'use strict'

var fs = require('fs')
var path = require('path')
var filter = require('filter-async')
var parallel = require('run-parallel')

module.exports = countNpmPackages

function countNpmPackages (directory, callback) {
  if (typeof directory === 'function') {
    callback = directory
    directory = 'node_modules'
  }

  directories(directory, function (err, files) {
    if (err) return callback(err)

    var scoped = files.filter(isScope).map(file => path.resolve(directory, file))
    if (!scoped.length) return callback(null, files.length)

    parallel(scoped.map(file => directories.bind(null, file)), function (err, results) {
      if (err) return callback(err)
      callback(null, files.length - scoped.length + results.reduce(function (acc, result) {
        return acc + result.length
      }, 0))
    })
  })
}

function directories (cwd, callback) {
  fs.readdir(cwd, function (err, files) {
    if (err) callback(err)
    filter(files, isDirectory, callback)
  })

  function isDirectory (file, callback) {
    fs.stat(path.resolve(cwd, file), function (err, stat) {
      if (err) return callback(err)
      callback(null, stat.isDirectory())
    })
  }
}

function isScope (directory) {
  return /^@/.test(directory)
}

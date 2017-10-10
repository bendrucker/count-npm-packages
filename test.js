'use strict'

var test = require('tape')
var path = require('path')
var count = require('./')

test('plain', function (t) {
  t.plan(1)

  count(path.resolve(__dirname, 'fixtures', 'plain'), function (err, count) {
    if (err) return t.end(err)
    t.equal(count, 1)
  })
})

test('scoped', function (t) {
  t.plan(1)

  count(path.resolve(__dirname, 'fixtures', 'scoped'), function (err, count) {
    if (err) return t.end(err)
    t.equal(count, 3)
  })
})

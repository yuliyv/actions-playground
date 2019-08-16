'use strict'

const lib = require('./index')

describe('getUserById', () => {
  test('sample test', () => {
    expect(lib.getUserById(1)).toEqual({id: 1})
  })
})

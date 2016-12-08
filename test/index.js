'use strict';

/**
 * Test the module to ensure proper responses and response codes are returned.
 */

const should = require('should');
const PostgresResponseCodes = require('../lib/index');

describe('PostgresResponse', () => {
  describe('Property Values', () => {
    it('Should have the property "28P01" equal "Invalid Password"', () => {
      PostgresResponseCodes.should.have.property('28P01', 'Invalid Password');
    });

    it('Should return the String "Warning" for `PostgresResponseCodes[\'01000\']`', () => {
      PostgresResponseCodes['01000'].should.be.exactly('Warning').and.be.a.String();
    });

    it('Should return the String "23505" for `PostgreResponseCodes.UNIQUE_VIOLATION`', () => {
      PostgresResponseCodes.UNIQUE_VIOLATION.should.be.exactly('23505').and.be.a.String();
    })
  });
});

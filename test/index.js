'use strict';

/**
 * Test the module to ensure proper responses and response codes are returned.
 */

const should = require('should');
const PostgresResponse = require('../lib/index');

describe('PostgresResponse', () => {
  describe('Property Values', () => {
    it('Should have the property "28P01" equal "Invalid Password"', () => {
      PostgresResponse.should.have.property('28P01', 'Invalid Password');
    });

    it('Should return the String "Warning" for `PostgresResponse[\'01000\']`', () => {
      PostgresResponse['01000'].should.be.exactly('Warning').and.be.a.String();
    });

    it('Should return the String "23505" for `PostgreResponse.UNIQUE_VIOLATION`', () => {
      PostgresResponse.UNIQUE_VIOLATION.should.be.exactly('23505').and.be.a.String();
    })
  });
});

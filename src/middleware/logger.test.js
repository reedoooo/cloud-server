'use strict';

const logger = require('./logger');

describe('Testing if the logger middleware is working correctly', () => {

  test('Should show the method and the url', () => {
    const request = {
      method: 'GET',
      url: '/person',
    };
    const response = {};
    const next = jest.fn();
  
    logger(request, response, next);
    expect(response.message).toBe(`Request: GET | URL: /person`);
    expect(next).toHaveBeenCalled();
  
  });

});
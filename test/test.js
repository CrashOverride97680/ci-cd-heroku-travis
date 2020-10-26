// IMPORT NODEJS MODULES
    const request = require('supertest');
    const express = require('express');
    const app = require('../app');
// INIT TESTING
    describe("IT WORKS ?", () => {
        it("TEST RUN", done =>
        {
            request(app).get('/test').expect(200, done);
        });
    });
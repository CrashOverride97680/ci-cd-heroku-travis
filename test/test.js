// IMPORT NODEJS MODULES
    const request = require('supertest');
    const express = require('express');
    const app = require('../app');
// INIT TESTING
    describe("IT WORKS ?", () => {
        it("TEST RUN", done =>
        {
            request(app)
            .get('/test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        }).timeout(10000);
    });
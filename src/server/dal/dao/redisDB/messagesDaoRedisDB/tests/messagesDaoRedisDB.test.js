const MessagesDaoRedisDB = require('../messagesDaoRedis');
const sinon = require('sinon');
const assert = require('assert');

describe('MessagesDaoRedisDB', () => {
    describe('MessagesDaoRedisDB', () => {
        let expected = null;

        before(() => {
            expected = {
                client: null,
            };
        });

        it('Should past!', () => {
            const actual = new MessagesDaoRedisDB();
            assert.deepEqual(actual, expected);
        });
    });
});
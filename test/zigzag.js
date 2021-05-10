var ZigZag = require('../lib/zigzag');

var assert = require('assert');

describe('wkx', function () {
    describe('ZigZag', function () {
        it('encode', function () {
            assert.strictEqual(ZigZag.encode(-1), 1);
            assert.strictEqual(ZigZag.encode(1), 2);
            assert.strictEqual(ZigZag.encode(-2), 3);
            assert.strictEqual(ZigZag.encode(2), 4);
        });
        it('decode', function () {
            assert.strictEqual(ZigZag.decode(1), -1);
            assert.strictEqual(ZigZag.decode(2), 1);
            assert.strictEqual(ZigZag.decode(3), -2);
            assert.strictEqual(ZigZag.decode(4), 2);
        });
    });
});

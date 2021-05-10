var BinaryReader = require('../lib/binaryreader');

var assert = require('assert');

describe('wkx', function () {
    describe('BinaryReader', function () {
        it('readVarInt', function () {
            assert.strictEqual(new BinaryReader(Buffer.from('01', 'hex')).readVarInt(), 1);
            assert.strictEqual(new BinaryReader(Buffer.from('ac02', 'hex')).readVarInt(), 300);
        });
    });
});

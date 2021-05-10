var BinaryReader = require('../lib/binaryreader');

var assert = require('assert');

describe('wkx', function () {
    describe('BinaryReader', function () {
        it('readVarInt', function () {
            assert.equal(new BinaryReader(Buffer.from('01', 'hex')).readVarInt(), 1);
            assert.equal(new BinaryReader(Buffer.from('ac02', 'hex')).readVarInt(), 300);
        });
    });
});

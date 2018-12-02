const test = require('ava')
const sha256 = require('crypto-js/sha256')
const {createBlock} = require('../src/block')
const {mineBlock} = require('../src/mine')
const timestampGenerator = require('./helpers/timestamp-generator-mock')
const hashGenerator = require('./helpers/hash-generator-mock')

test('Mine new block', t => {
    const block = {
        timestamp: timestampGenerator.generate(),
        previousHash: "previousHash",
        newHash: hashGenerator.generate(0, "previousHash", []),
        data: []}
    const newBlock = mineBlock(timestampGenerator, hashGenerator, block, [])
    t.notDeepEqual(block, newBlock)
})

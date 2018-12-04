const test = require('ava')
const {mineBlock} = require('../src/mine')
const timestampGenerator = require('./helpers/timestamp-generator-mock')
const hashGenerator = require('./helpers/hash-generator-mock')

console.log(hashGenerator.generate())

test('Mine new block', t => {
    const block = {
        timestamp: timestampGenerator.generate(),
        previousHash: 'previousHash',
        hash: hashGenerator.generate(0, 'previousHash', []),
        data: []
    }
    const newBlock = mineBlock(timestampGenerator, hashGenerator, block, [])
    t.notDeepEqual(block, newBlock)
})

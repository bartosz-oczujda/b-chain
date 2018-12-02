const {createBlock} = require('./block')

const mineBlock = (timestampGenerator, hashGenerator, previousBlock, data) => {
    const timestamp = timestampGenerator.generate()
    const newHash = hashGenerator.generate()
    const previousHash = previousBlock.hash
    return createBlock(timestamp, previousHash, newHash, data)
}

module.exports = {mineBlock}

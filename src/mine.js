const {createBlock} = require('./block')

const mineBlock = (block, data) => {
    return createBlock(Date.now(), block.hash, 'newhash', data)
}

module.exports = {mineBlock}

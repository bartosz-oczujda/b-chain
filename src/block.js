const createBlock = (timestamp, previousHash, newHash, data) => {
    return {
        timestamp,
        previousHash,
        hash: newHash,
        data
    }
}

module.exports = {createBlock}

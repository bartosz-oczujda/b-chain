const createBlock = (timestamp, previousHash, newHash, data) => {
    return {
        timestamp,
        previousHash,
        newHash,
        data
    }
}

module.exports = {createBlock}

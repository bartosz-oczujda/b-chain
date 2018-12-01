const createBlock = (timestamp, lastHash, hash, data) => {
    return {
        timestamp,
        lastHash,
        hash,
        data
    }
}

module.exports = {createBlock}

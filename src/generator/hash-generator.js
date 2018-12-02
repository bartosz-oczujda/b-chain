const sha256 = require('crypto-js/sha256')

const generate = (timestamp, previousHash, data) => {
    return sha256(`${timestamp}${previousHash}${data}`).toString()
}

module.exports = {generate}

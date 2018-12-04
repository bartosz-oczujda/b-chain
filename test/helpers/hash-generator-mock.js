const gen = generator()

const generate = () => {
    return gen.next().value
}

function* generator() {
    let index = 0
    while (true) yield index++
}

module.exports = {generate}

const colorGenerator = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let iter = 0

    while (iter < colors.length) {
        yield colors[iter]
        iter++
    }
}

const nextColor = colorGenerator()

const reindeerBuilder = (reindeerName) => {
    return {
        name: reindeerName,
        color: nextColor.next().value 
    } 
}

const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []
    reindeer.forEach(reindr => {
        coloredReindeer.push(reindeerBuilder(reindr))
    })
    return coloredReindeer
}

const displayReindeer = () => {
    reindeerArray = coloredReindeerBuilder()
    reindeerArray.forEach(reindeerObject => {
        $("#output-div").append(
            `
            <article style="color:${reindeerObject.color};">${reindeerObject.name}</article>
            `
        )
    })
}

displayReindeer()

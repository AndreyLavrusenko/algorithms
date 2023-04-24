const classPhoto = (blueShirtHeights, redShirtHeights) => {
    blueShirtHeights.sort((a,b) => a - b)
    redShirtHeights.sort((a,b) => a - b)

    const shirtColorInFirstRow = blueShirtHeights[0] > redShirtHeights[0] ? 'RED' : 'BLUE' // У кого меньше тот и на первом ряду

    for (let i = 0; i < redShirtHeights.length; i++) {
        const redShirtHeight = redShirtHeights[i]
        const blueShirtHeight = blueShirtHeights[i]

        if (shirtColorInFirstRow === 'RED') {
            if (redShirtHeight >= blueShirtHeight) {
                return false
            }
        } else {
            if (blueShirtHeight >= redShirtHeight) {
                return false
            }
        }
    }

    return true
}

console.log(classPhoto([6,9,2,4,5], [5,8,1,3,4]))
console.log(classPhoto([9,5,2,4,5], [5,8,1,3,4]))
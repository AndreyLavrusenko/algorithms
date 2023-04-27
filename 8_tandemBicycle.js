const tandemBicycle = (redShirtSpeed, blueShirtSpeed, fastest) => {
    let globalCounter = 0

    redShirtSpeed.sort((a,b) => b - a)
    blueShirtSpeed.sort((a,b) => b - a)

    if (fastest) {
        // Берем максимум и минимум
        for (let i = 0; i < redShirtSpeed.length; i++) {
            globalCounter += Math.max(redShirtSpeed[i], blueShirtSpeed[redShirtSpeed.length - 1 - i])
        }
    } else {
        // Берем максимумы
        for (let i = 0; i < redShirtSpeed.length; i++) {
            globalCounter += Math.max(redShirtSpeed[i], blueShirtSpeed[i])
        }
    }

    return globalCounter
}

console.log(tandemBicycle([5,5,3,9,2],[3,6,7,2,1], true))
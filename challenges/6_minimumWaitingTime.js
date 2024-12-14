const minimumWaitingTime = (arr) => {
    arr.sort((a,b) => a - b)

    let waitingTime = null
    const sum = []

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            sum.push(0)
        } else if (i === 1) {
            sum.push(arr[0])
        } else {
            waitingTime = arr[i - 1] + sum[sum.length - 1]
            sum.push(waitingTime)
        }
    }

    return sum.reduce((acc, sum) => {
        return acc + sum
    }, 0)


    // Другое решение

    // for (let i = 0; i < arr.length; i++) {
    //     const queriesLeft = arr.length + (i - 1)
    //     waitingTime += queriesLeft * arr[i]
    // }
    //
    // return waitingTime
}

console.log(minimumWaitingTime([3,2,1,2,6]))
const sortedSquareArray = (inputArray) => {
    const obj = {}

    inputArray.forEach(item => {
        obj[item] = item ** 2
    })

    return Object.values(obj)
}

console.log(sortedSquareArray([-4,1,2])) // [1,4,16]
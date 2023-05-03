// Массивы нельзя сортировать
const findThreeLargestNumber = arr => {
    const result = [null, null, null]

    arr.forEach(item => {
        updateLargestNumber(result, item)
    })

    return result
}


const updateLargestNumber = (arr, item) => {
    if (arr[2] === null || item > arr[2]) {
        shiftAndUpdate(arr, item, 2)
    } else if (arr[1] === null || item > arr[1]) {
        shiftAndUpdate(arr, item, 1)
    } else if (arr[0] === null || item > arr[0]) {
        shiftAndUpdate(arr, item, 0)
    }
}

const shiftAndUpdate = (arr, item, index) => {
    for (let i = 0; i < index + 1; i++) {
        if (i === index) {
            arr[i] = item
        } else {
            arr[i] = arr[i + 1]
        }
    }
}

console.log(findThreeLargestNumber([141,1,17-7,-17,-27,18,541,8,7,7])) // [18,141,541]

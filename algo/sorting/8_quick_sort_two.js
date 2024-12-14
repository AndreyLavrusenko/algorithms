function quickSort(arr) {

    if (arr.length <= 1) {
        return arr
    } else {
        const left = []
        const right = []
        const middle = []
        let pivot = medianOfThree(arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1])


        arr.forEach(element => {
            if (element < pivot) {
                left.push(element)
            } else if (element === pivot) {
                middle.push(pivot)
            } else {
                right.push(element)
            }
        })

        return quickSort(left).concat(middle, quickSort(right))
    }

}

function medianOfThree(a, b, c) {
    const sortedArray = [a, b, c].sort((x, y) => x - y);
    return sortedArray[1];
}


console.log(quickSort([4,7,3,1,3,6,9,9,6,4,1]))



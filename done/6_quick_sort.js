const quickSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    const index = Math.floor((arr.length - 1) / 2)
    const currentItem = arr[index]

    const less = []
    const more = []

    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            continue
        }

        if (arr[i] < currentItem) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        }
    }

    return [
        ...quickSort(less),
        currentItem,
        ...quickSort(more)
    ]

}

console.log(quickSort([4,7,3,1,3,6,9,9,6,4,1]))
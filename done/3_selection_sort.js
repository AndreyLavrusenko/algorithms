const arr = [5, 3, 8, 1, 9, 2, 6, 4, 7, 10]

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let tmp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tmp
    }
    return arr
}

console.log(selectionSort(arr))
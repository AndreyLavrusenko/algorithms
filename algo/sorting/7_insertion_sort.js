function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j = i - 1

        // currentValue - Текущее значение
        // arr[j] - Предыдущее значение

        // console.log(arr[j], currentValue)
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentValue
    }

    return arr
}

console.log(insertionSort([5, 3, 1, 4, 2]))
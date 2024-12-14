const arr = [5, 3, 8, 1, 9, 2, 6, 4, 7, 10]

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j+1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }

    return arr
}


console.log(bubbleSort(arr))
const array = [1,4,5,8,5,1,2,7,5,2,11]

const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }

    return -1;
}


console.log(linearSearch(array, 7))
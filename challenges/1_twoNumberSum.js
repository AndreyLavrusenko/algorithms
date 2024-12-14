const twoNumberSum = (arr, targetSum) => {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (targetSum - arr[i] in obj) {
            return [targetSum - arr[i], arr[i]]
        } else {
            obj[arr[i]] = arr[i]
        }
    }

    return []
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10)) // [11,-1]
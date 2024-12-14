const productSum = arr => {

    let globalCounter = 0

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            globalCounter += productSum(arr[i])
        } else {
            globalCounter += arr[i]
        }
    }

    return globalCounter

}

console.log(productSum([5,2,[7,-1],3,[6,[-13,8],4]] ))
const palindromeCheck = string => {
    const newArr = []

    for (let i = string.length; i--;) {
        newArr.push(string[i])
    }

    return string === newArr.join('')
}

console.log(palindromeCheck('abcdcba'))
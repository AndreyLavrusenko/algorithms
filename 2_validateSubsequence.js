const validateSubsequence = (arr, sequence) => {
    let arrIdx = 0, seqIdx = 0

    while (arrIdx < arr.length && seqIdx < sequence.length) {
        if (arr[arrIdx] === sequence[seqIdx]) {
            seqIdx += 1
        }

        arrIdx += 1
    }

    return seqIdx === sequence.length
}

console.log(validateSubsequence([5,1,22,25,6,-1,8,10,11,7], [1,6,-1,10]))
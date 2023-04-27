

const findClosestValueInBinaryTree = (tree, target) => {
    return findClosestValueInBinaryTreeHelper(tree, target, )
}

const findClosestValueInBinaryTreeHelper = (tree, target, closest) => {
    let currentNode = tree
    while (currentNode !== null) {

        if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
            closest = currentNode.value
        }

        if (target < currentNode.value) {
            currentNode = currentNode.left
        } else if (target > currentNode.value) {
            currentNode = currentNode.right
        } else {
            break
        }
    }

    return closest
}


console.log(findClosestValueInBinaryTree())
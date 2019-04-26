function findMinScore(array) {
    return (isNullArray(array)) ? "Array is null!" : ((array.length === 1) ? array[0] : findMinScoreOfLongArray(array));
}

function findMinScoreOfLongArray(array) {
    let minScore = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minScore)
            minScore = array[i];
    }
    return minScore;
}

function isNullArray(array){
    return array.length === 0;
}

let array = [10, 5, 2, 8, -1, 6, 8];
alert("" + findMinScore(array));
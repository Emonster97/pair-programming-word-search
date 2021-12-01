const transpose = function(matrix) {
    let arr = [];
    for (let i = 0; i < matrix[0].length; i++) {
        arr.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let v = 0; v < matrix[0].length; v++) {
            arr[v].push(matrix[i][v]);
        }
    }
    return arr;
};

const checkHorizontal = function(letters, word) {
    let horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.split("").reverse().join("").includes(word)) 
            return true;
    }
    return false;
}

const wordSearch = (letters, word) => { 
    if (letters.length <= 0)
        return false;
    if (checkHorizontal(letters, word) || checkHorizontal(transpose(letters), word))
        return true;
    return false;
};

module.exports = wordSearch;    
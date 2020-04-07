// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [];

    //this adds an array based on n value
    for (let i = 0; i < n; i++) {
        result.push([])
        console.log(result)
    }
    // keep track of what number goes in at index
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    // As long as start column is less than endColumn and 
    while (startCol <= endCol && startRow <= endRow) {

        // Top Row
        for (let i = startCol; i <= endCol; i++) {
        // console.log(result, result[startRow], result[startRow][i])
        result[startRow][i] = counter;
        counter++; 
        }
        startRow++;

        // Right Column
        for (let i = startRow; i <= endRow; i++) {
        result[i][endCol] = counter;
        counter++;
        }
        endCol--;

        // Bottom Colum
        for (let i = endCol; i >= startCol; i--) {
        result[endRow][i] = counter;
        counter++;
        }
        endRow--;

        // Start Column
        for (let i = endRow; i >= startRow; i--) {
        result[i][startCol] = counter;
        counter++;
        }
        startCol++;
    }
    return result;
    }

module.exports = matrix;

function solution(cell) {
    let x = cell.charCodeAt(0) - 96;
    let y = parseInt(cell[1]);
    let count = 0;
    if (x + 2 <= 8 && y + 1 <= 8) count++;
    if (x + 2 <= 8 && y - 1 >= 1) count++;
    if (x - 2 >= 1 && y + 1 <= 8) count++;
    if (x - 2 >= 1 && y - 1 >= 1) count++;
    if (x + 1 <= 8 && y + 2 <= 8) count++;
    if (x + 1 <= 8 && y - 2 >= 1) count++;
    if (x - 1 >= 1 && y + 2 <= 8) count++;
    if (x - 1 >= 1 && y - 2 >= 1) count++;
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test chessKnight

// alternative solution

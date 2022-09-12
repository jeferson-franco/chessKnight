const solution = require('./chessKnight.js');

test('test 1', () => {
    expect(solution("a1")).toBe(2);
});

test('test 2', () => {
    expect(solution("c2")).toBe(6);
});

test('test 3', () => {
    expect(solution("d4")).toBe(8);
});

test('test 4', () => {
    expect(solution("g6")).toBe(6);
});

test('test 5', () => {
    expect(solution("a3")).toBe(4);
});

test('test 6', () => {
    expect(solution("b7")).toBe(4);
});

test('test 7', () => {
    expect(solution("h8")).toBe(2);
});

test('test 8', () => {
    expect(solution("h6")).toBe(4);
});

test('test 9', () => {
    expect(solution("g8")).toBe(3);
});

test('test 10', () => {
    expect(solution("a5")).toBe(4);
});

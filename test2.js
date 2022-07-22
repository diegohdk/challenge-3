function squaredArray(numbers) {
  return numbers.map(n => n * n).sort((a, b) => a - b)
}

console.log(squaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(squaredArray([-2, -1]))
console.log(squaredArray([-10, -5, 0, 5, 10]))

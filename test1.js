function makeChange(coins) {
  const coinsCopy = [...coins].sort((a, b) => b - a)
  const total = coinsCopy.reduce((total, coin) => total + coin, 0)
  const uniqueCoins = [...new Set(coinsCopy)]
  let max = total + 1
  let change = total

  if (uniqueCoins.length === 1) {
    return max
  }

  for (const coin of coinsCopy) {
    if (change >= max) {
      break
    }

    change = max - coin
    max = change
  }

  return change
}

console.log(makeChange([5, 7, 1, 1, 2, 3, 22]))
console.log(makeChange([1, 1, 1, 1, 1]))
console.log(makeChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))
console.log(makeChange([3, 3, 3]))
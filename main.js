function fac(num) {
  if (num < 0) return
  if (num === 1) return num
  console.log( num * fac(num - 1))
}

fac(5)
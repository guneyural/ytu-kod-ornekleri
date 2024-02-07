function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 5. elemanı yazdır
console.log(fibonacci(0));

function fibonacci_YukaridanAsagi(n, hafiza = {}) {
  if (n <= 1) return n;

  if (hafiza[n]) return hafiza[n];

  hafiza[n] = fibonacci(n - 1, hafiza) + fibonacci(n - 2, hafiza);

  return hafiza[n];
}

console.log(fibonacci_YukaridanAsagi(5));

function fibonacci_AsagidanYukari(n) {
  if (n <= 1) {
    return n;
  } else {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
  }
}

console.log(fibonacci(n));



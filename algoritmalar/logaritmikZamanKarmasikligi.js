function logaritmikAlgoritma(n) {
  for (let i = 1; i < n; i = i * 2) {
    console.log(i);
  }
}

logaritmikAlgoritma(8);

function log2Hesapla(n) {
  if (n <= 0) {
    return "Geçersiz giriş";
  }

  if (n === 1) {
    return 0;
  }

  return 1 + log2Hesapla(Math.floor(n / 2));
}

console.log(log2Hesapla(8));

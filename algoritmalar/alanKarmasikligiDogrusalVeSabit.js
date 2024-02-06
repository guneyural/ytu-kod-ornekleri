function sabitAlanKarmasikligi(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sabitAlanKarmasikligi([1, 2, 3, 4, 5]));

function dogrusalAlanKarmasikligi(dizi) {
  let yeniDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    yeniDizi.push(2 * dizi[i]);
  }
  return yeniDizi;
}

console.log(dogrusalAlanKarmasikligi([1, 2, 3, 4, 5]));

// Doğrusal O(n) alan karmaşıklığı
function geriSayim(n) {
  if (n === 0) return;

  return geriSayim(n - 1);
}

geriSayim(5);

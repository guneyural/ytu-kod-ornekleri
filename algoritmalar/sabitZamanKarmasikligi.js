function elemanGetir(dizi, index) {
  return dizi[index]; // Sabit O(1)
}

const ardisikSayilar = [1, 2, 3, 4, 5, 6, 7, 9, 10];
console.log(elemanGetir(ardisikSayilar, 1));

function sabitFonksiyon(array) {
  console.log(array.length * 5); // Sabit O(1)
  console.log(1000 * 1000); // Sabit O(1)
}

sabitFonksiyon(ardisikSayilar);

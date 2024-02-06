function faktoriyelHesapla(n) {
  // Temel durumu kontrol et
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Faktöriyel hesaplamak için fonksiyonu kendi içinde çağır
    return n * faktoriyelHesapla(n - 1);
  }
}

const sayi = 5;
const faktoriyelSonucu = faktoriyelHesapla(sayi);
console.log(faktoriyelSonucu);

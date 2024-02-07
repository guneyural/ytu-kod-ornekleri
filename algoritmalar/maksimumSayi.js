let maksimumSayi = Math.max(100, 1500, 200, 400, 500, 600);
console.log(maksimumSayi);

// O(n)
function maksimumBul_DogrusalArama(dizi) {
  // Eğer dizi boşsa veya undefined ise, undefined döndür
  if (!dizi || dizi.length === 0) {
    return undefined;
  }

  // Başlangıçta maksimum olarak ilk elemanı al
  let maksimum = dizi[0];

  // Diziyi dolaşarak maksimum değeri bul
  for (let i = 1; i < dizi.length; i++) {
    if (dizi[i] > maksimum) {
      maksimum = dizi[i];
    }
  }

  return maksimum;
}

//let dizi = [10, 5, 8, 15, 20, 3];
let maksimumDeger = maksimumBul_DogrusalArama(dizi);
console.log(maksimumDeger);

function parcalaFethetMaksimum(dizi, baslangic = 0, bitis = dizi.length - 1) {
  // Eğer dizi sadece bir elemana sahipse, bu elemanı döndür
  if (baslangic === bitis) {
    return dizi[baslangic];
  }

  // Orta noktayı hesapla
  let orta = Math.floor((baslangic + bitis) / 2);

  // Sol ve sağ parçaları parçala ve maksimumları al
  let solMaksimum = parcalaFethetMaksimum(dizi, baslangic, orta);
  let sagMaksimum = parcalaFethetMaksimum(dizi, orta + 1, bitis);

  // Sol ve sağ maksimumlar arasından en büyüğünü döndür
  return Math.max(solMaksimum, sagMaksimum);
}

let dizi = [6, 4, 9, 0];
let enBuyuk = parcalaFethetMaksimum(dizi);
console.log(enBuyuk);



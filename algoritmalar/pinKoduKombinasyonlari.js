function pinKoduTahminEt(sayilar, pinUzunlugu, mevcutPIN = "") {
  const kombinasyonlar = [];

  //Belirlenen PIN uzunluğuna ulaşıldığında, mevcut PIN'i kombinasyonlara ekle
  if (mevcutPIN.length === pinUzunlugu) {
    kombinasyonlar.push(mevcutPIN);
    return kombinasyonlar;
  }

  //Her bir sayıyı ekleyerek rekürsif olarak kombinasyonları oluştur
  for (let sayi of sayilar) {
    kombinasyonlar.push(
      ...pinKoduTahminEt(sayilar, pinUzunlugu, mevcutPIN + sayi)
    );
  }

  return kombinasyonlar;
}

const sayilar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const pinKodlari = pinKoduTahminEt(sayilar, 2);
console.log(pinKodlari);

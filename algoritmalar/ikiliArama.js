function ikiliArama(liste, hedef) {
  let baslangic = 0;
  let son = liste.length - 1;

  while (baslangic <= son) {
    let orta = Math.floor((baslangic + son) / 2);

    if (liste[orta] === hedef) {
      console.log("SAYI BULUNDU!");
      return;
    } else if (liste[orta] < hedef) {
      baslangic = orta + 1;
    } else {
      son = orta - 1;
    }
  }

  console.log("Sayı listede yok");
}

const ardisikSayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hedefSayi = 7;
ikiliArama(ardisikSayilar, hedefSayi);

let cikolataBulunduysa = null;
let matruskaKalmadiysa = null;

function matruskaAc(matruska) {
  if (cikolataBulunduysa) {
    console.log("Çikolatayı Aldım");
    return;
  } else if (matruskaKalmadiysa) {
    console.log("Çikolata Bulunamadı");
    return;
  } else {
    matruskaAc(dahaKucukMatruska);
  }
}

matruskaAc();

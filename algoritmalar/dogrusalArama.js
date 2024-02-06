function dogrusalArama(liste, hedef) {
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === hedef) {
      console.log("SAYI BULUNDU!");

      return;
    }
  }

  console.log("Sayı listede yok");
}

const ardisikSayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hedefSayi = 7;

dogrusalArama(ardisikSayilar, hedefSayi);




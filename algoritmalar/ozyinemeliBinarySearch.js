function binarySearch(arr, hedef) {
  if (arr.length === 0) {
    console.log("Dizi boş, sayı bulunamadı!");
    return false;
  }

  // Listenin bölüneceği nokta
  let ortaNokta = Math.floor(arr.length / 2);

  if (arr[ortaNokta] === hedef) {
    console.log("Sayı bulundu!");
    return true;
  } else if (arr[ortaNokta] < hedef) {
    // Ortadaki sayı aranan sayıdan küçükse, listenin sol tarafını tekrar kontrol et
    return binarySearch(arr.slice(ortaNokta + 1), hedef);
  } else if (arr[ortaNokta] > hedef) {
    // Ortadaki sayı aranan sayıdan büyükse, listenin sağ tarafını tekrar kontrol et
    return binarySearch(arr.slice(0, ortaNokta), hedef);
  }
}

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8];
const hedefSayi = 8;
binarySearch(sayilar, hedefSayi);

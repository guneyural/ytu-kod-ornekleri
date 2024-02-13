function bubbleSort(dizi) {
  let yerDegistirmeYapildiMi;

  do {
    yerDegistirmeYapildiMi = false;

    for (let i = 0; i < dizi.length - 1; i++) {
      if (dizi[i] > dizi[i + 1]) {
        let geciciDeger = dizi[i];
        dizi[i] = dizi[i + 1];
        dizi[i + 1] = geciciDeger;

        yerDegistirmeYapildiMi = true;
      }
    }
  } while (yerDegistirmeYapildiMi);
}

const dizi = [5, 0, 3, 7, 9, 8];
bubbleSort(dizi);

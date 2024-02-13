function insertionSort(dizi) {
  for (let i = 1; i < dizi.length; i++) {
    let mevcutDeger = dizi[i];
    let j = i - 1;

    while (j >= 0 && dizi[j] > mevcutDeger) {
      dizi[j + 1] = dizi[j];
      j--;
    }

    dizi[j + 1] = mevcutDeger;
  }
  return dizi;
}

const dizi = [5, 3, 8, 1, 2, 7];
insertionSort(dizi);

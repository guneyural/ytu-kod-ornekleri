function selectionSort(dizi) {
  for (let i = 0; i < dizi.length - 1; i++) {
    let enKucukDegerinIndexi = i;

    for (let j = i + 1; j < dizi.length; j++) {
      if (dizi[j] < dizi[enKucukDegerinIndexi]) {
        enKucukDegerinIndexi = j;
      }
    }

    if (enKucukDegerinIndexi !== i) {
      // Yer değiştirme işlemi
      let gecici = dizi[i];
      dizi[i] = dizi[enKucukDegerinIndexi];
      dizi[enKucukDegerinIndexi] = gecici;
    }
  }
  return dizi;
}

const dizi = [5, 0, 3, 7, 9, 8];
selectionSort(dizi);

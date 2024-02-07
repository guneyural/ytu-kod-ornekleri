function mergeSort(dizi) {
  if (dizi.length <= 1) {
    return dizi;
  }

  const orta = Math.floor(dizi.length / 2);
  const sol = dizi.slice(0, orta);
  const sag = dizi.slice(orta);

  return birlestir(mergeSort(sol), mergeSort(sag));
}
function birlestir(sol, sag) {
  let sonuc = [];
  let solIndex = 0;
  let sagIndex = 0;

  while (solIndex < sol.length && sagIndex < sag.length) {
    if (sol[solIndex] < sag[sagIndex]) {
      sonuc.push(sol[solIndex]);
      solIndex++;
    } else {
      sonuc.push(sag[sagIndex]);
      sagIndex++;
    }
  }

  return sonuc.concat(sol.slice(solIndex)).concat(sag.slice(sagIndex));
}

const dizi = [8, 3, 9, 5, 1, 2, 7, 4, 6];
const siralanmisDizi = mergeSort(dizi);
console.log(siralanmisDizi);

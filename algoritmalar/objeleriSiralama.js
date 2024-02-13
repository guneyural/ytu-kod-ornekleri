const quickSort = (devrimler) => {
  if (devrimler.length <= 1) {
    return devrimler;
  }

  let pivot = devrimler[0];
  let solDizi = [];
  let sagDizi = [];

  for (let i = 1; i < devrimler.length; i++) {
    if (devrimler[i].date.getTime() < pivot.date.getTime()) {
      solDizi.push(devrimler[i]);
    } else {
      sagDizi.push(devrimler[i]);
    }
  }

  return [...quickSort(solDizi), pivot, ...quickSort(sagDizi)];
};

const devrimler = [
  { name: "Cumhuriyetin İlanı", date: new Date("1923-10-29") },
  { name: "Harf Devrimi", date: new Date("1928-11-1") },
  { name: "Saltanatın Kaldırılması", date: new Date("1922-11-1") },
  { name: "Kadınların Seçme ve Seçilme Hakkı", date: new Date("1934-12-5") },
  { name: "Soyadı Kanunu", date: new Date("1934-06-21") },
];

console.log(quickSort(devrimler));


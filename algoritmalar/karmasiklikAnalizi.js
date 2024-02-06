// O(2n) = O(n)
function ikiDongu(sayi) {
  //O(n)
  for (let i = 0; i < sayi; i++) {
    console.log(i);
  }

  //O(n)
  for (let i = 0; i < sayi; i++) {
    console.log(i);
  }
}

function ikiFarkliGirdi(sayi1, sayi2) {
  for (let i = 0; i < sayi1; i++) {
    console.log(i);
  }

  for (let i = 0; i < sayi2; i++) {
    console.log(i);
  }
}

function ikiFarkliGirdiIcIceDongu(sayi1, sayi2) {
  for (let i = 0; i < sayi1; i++) {
    for (let i = 0; i < sayi2; i++) {
      console.log(i);
    }
  }
}

function paraUstuVer(paraUstuMiktari) {
  //Para birimleri büyükten küçüğe sıralı olmalıdır
  const paraBirimleri = [20, 10, 5, 1];

  let verilenParalar = {};

  for (let i = 0; i < paraBirimleri.length; i++) {
    const paraBirimi = paraBirimleri[i];
    const adet = Math.floor(paraUstuMiktari / paraBirimi);
    if (adet > 0) {
      verilenParalar[paraBirimi] = adet;
      paraUstuMiktari -= adet * paraBirimi;
    }
    if (paraUstuMiktari === 0) {
      break;
    }
  }

  return verilenParalar;
}

const paraUstuMiktari = 47;
const verilenParalar = paraUstuVer(paraUstuMiktari);
console.log(verilenParalar);



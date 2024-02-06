function nLogNAlgoritması(n) {
  let y = n;

  while (n > 0) {
    n = Math.floor(n / 2);

    for (let i = 0; i < y; i++) {
      console.log(i);
    }
  }
}

nLogNAlgoritması(4);



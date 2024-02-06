function kareCiz(boyut) {
  for (let y = 0; y < boyut; y++) {
    let satir = "";
    for (let x = 0; x < boyut; x++) {
      satir += `(${x},${y}) `;
    }

    console.log("-----------------------");
    console.log(satir);
  }
}

kareCiz(4);

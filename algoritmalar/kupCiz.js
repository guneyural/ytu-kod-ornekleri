function kupCiz(boyut) {
  for (let z = 0; z < boyut; z++) {
    let katman = "";
    for (let y = 0; y < boyut; y++) {
      let satir = "";
      for (let x = 0; x < boyut; x++) {
        satir += `(${x},${y},${z}) `;
      }
      katman += satir + "\n";
    }
    console.log(`--- Katman ${z + 1} ---`);
    console.log(katman);
  }
}

kupCiz(3);


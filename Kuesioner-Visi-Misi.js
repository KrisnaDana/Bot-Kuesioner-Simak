// Kuesioner Visi Misi

let input = 1;

for (let i = 529; i <= 548; i++) {
  real = (i - 528) * 3 + 2189 + input;
  document.querySelector("#jawaban_" + i + "_" + real).click();
}

// Potret Visi Misi

let input = 1;

for (let i = 81; i <= 106; i++) {
  real = (i - 80) * 3 + 397 + input;
  document.querySelector("#jawaban_" + i + "_" + real).click();
}

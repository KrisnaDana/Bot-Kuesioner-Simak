let input = 5;

for (let i = 1; i <= 40; i++) {
  if (i == 1) {
    real = input;
    document.querySelector("#jawaban_" + i + "_" + real).click();
  } else {
    real = i * 5 + input;
    document.querySelector("#jawaban_" + i + "_" + real).click();
  }
}

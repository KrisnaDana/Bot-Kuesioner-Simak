// Potret Layanan

let input = 5;

for (let i = 62; i <= 80; i++) {
    real = i * 5 + input - 5;
    document.querySelector("#jawaban_" + i + "_" + real).click();
}

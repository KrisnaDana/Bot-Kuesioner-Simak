// Kuesioner Pencegahan dan Penanganan Seksual

let input = 1;

for (let i = 6761; i <= 6779; i++) {
    real = (i - 6761) * 3 + 22609 + input;
    document.querySelector("#jawaban_" + i + "_" + real).click();
}

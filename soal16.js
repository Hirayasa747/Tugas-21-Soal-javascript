// M.Hirayasa X PPLG 2 soal 16

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt("Masukkan juara (1/2/3): ");
const juara = Number(input);

if (juara === 1) {
  console.log("Horey Selamat yak Anda Juara Utama");
} else if (juara === 2) {
  console.log("Selamat Anda Runner Up");
} else if (juara === 3) {
  console.log("Selamat Anda Juara Ketiga");
} else {
  console.log("Inputan Anda Salah!");
}
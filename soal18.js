// M.Hirayasa X PPLG 2 soal 18

const prompt = require('prompt-sync')({sigint: true});

// Input bilangan bulat dari user
let angka = parseInt(prompt("Masukkan bilangan bulat: "));

// Cek apakah bilangan kelipatan 7
if (angka % 7 === 0) {
    console.log(`kelipatan 7 horey Anda Beruntung`);
} else {
    console.log("Anda belum beruntung");
}
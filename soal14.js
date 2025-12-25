// M.Hirayasa X PPLG 2 soal 14

const prompt = require('prompt-sync')({sigint: true});

// Input angka 
let angka = parseFloat(prompt("Masukkan angka sembarang atau bebaslah: "));

// Cek kondisi
if (angka > 100) {
    console.log("Nilai kamu sempurna!");
} else {
    console.log("Nilai kamu belum sempurna.");
}

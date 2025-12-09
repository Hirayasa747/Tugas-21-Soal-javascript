// M.Hirayasa X PPLG 2 soal 13

const prompt = require('prompt-sync')({sigint: true});

// Input harga makanan
let harga = parseInt(prompt("Masukan Harga Makanannya: "));

// Hitung pajak (10%) dan fee (5%)
let pajak = 0.10 * harga;
let fee = 0.05 * harga;

// Hitung total harga yang harus dibayar
let totalBayar = harga + pajak + fee;


console.log(`Harga makanan : ${harga}`);
console.log(`Pajak : ${pajak}`);
console.log(`Fee : ${fee}`);
console.log(`Harga bayar : ${totalBayar}`);
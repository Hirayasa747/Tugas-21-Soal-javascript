// M.Hirayasa X PPLG 2 soal 9

const prompt = require('prompt-sync')({sigint: true});

let panjang = parseFloat(prompt("Masukkan panjang: "));
let lebar   = parseFloat(prompt("Masukkan lebar: "));

// Rumus luas dan keliling
let luas = panjang * lebar;
let keliling = 2 * (panjang + lebar);


console.log(`Luas persegi panjang = ${luas}`);
console.log(`Keliling persegi panjang = ${keliling}`);
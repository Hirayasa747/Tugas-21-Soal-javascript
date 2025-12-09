// M.Hirayasa X PPLG 2 soal 19

const prompt = require('prompt-sync')({sigint: true});

// Input bilangan bulat
let x = parseInt(prompt("Masukkan nilai x: "));
let y = parseInt(prompt("Masukkan nilai y: "));
let z = parseInt(prompt("Masukkan nilai z: "));

// Cari nilai terbesar dan terkecil
let terbesar = Math.max(x, y, z);
let terkecil = Math.min(x, y, z);


console.log(`Nilai terbesar adalah: ${terbesar}`);
console.log(`Nilai terkecil adalah: ${terkecil}`);
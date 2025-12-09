
// M.Hirayasa X PPLG 2 soal 12

//program menghitung volume dan luas permukaan bola sesuai jari-jari yang diinput user

const prompt = require('prompt-sync')({sigint: true});

// Input jari-jari 
let r = parseFloat(prompt("Masukkan jari-jari bola: "));

// Rumus volume dan luas permukaan bola
let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
let luasPermukaan = 4 * Math.PI * Math.pow(r, 2);


console.log(`Volume bola = ${volume}`);
console.log(`Luas permukaan bola = ${luasPermukaan}`);
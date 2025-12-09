// M.Hirayasa X PPLG 2 soal 11

// program menghitung jumlah total siswa dari 4 kelas yang diinput user

const prompt = require('prompt-sync')({sigint: true});

// Input jumlah siswa tiap kelas
let rpl1 = parseInt(prompt("Masukkan jumlah siswa X RPL 1: "));
let rpl2 = parseInt(prompt("Masukkan jumlah siswa X RPL 2: "));
let tkj1 = parseInt(prompt("Masukkan jumlah siswa X TKJ 1: "));
let tkj2 = parseInt(prompt("Masukkan jumlah siswa X TKJ 2: "));

// Hitung total
let total = rpl1 + rpl2 + tkj1 + tkj2;

// Tampilkan hasil
console.log(`Jumlah total semua siswa = ${total}`);
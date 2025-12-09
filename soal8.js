// M.Hirayasa X PPLG 2 soal 8


const prompt = require('prompt-sync')({sigint: true});

function sapa(nama) {
    console.log(`Apakabar ${nama}? Wish you luck!`);
}

let nama = prompt("Masukkan nama: ");
sapa(nama);
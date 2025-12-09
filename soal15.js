// M.Hirayasa X PPLG 2 soal 15

const prompt = require('prompt-sync')({sigint: true});

// Input kode dari user
let kode = prompt("Masukkan kode 5 digit: ");

// Cek kode
if (kode === "78821") {
    console.log("You are authenticated");
} else {
    console.log("You have no access");
}
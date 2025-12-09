// M.Hirayasa X PPLG 2 soal 6

const prompt = require("prompt-sync")({ sigint: true });

let nama, nilai;

nama = prompt("Nama : "); 
nilai = parseInt(prompt("Nilai rapot : ")); 

if (nilai >= 85) {
    console.log("Lulus");
} else {
    console.log("Tidak lulus");
}
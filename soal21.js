// M.Hirayasa X PPLG 2 soal 21
const prompt = require('prompt-sync')({sigint: true});

// Program menentukan grade siswa berdasarkan nilai

// Input nama dan nilai siswa melalui prompt
let nama = prompt("Masukkan nama siswa:");
let nilai = parseInt(prompt("Masukkan nilai siswa (0-100):"));

// Menentukan grade
let grade;
if (nilai >= 90 && nilai <= 100) {
    grade = "A";
} else if (nilai >= 80 && nilai < 90) {
    grade = "B";
} else if (nilai >= 70 && nilai < 80) {
    grade = "C";
} else if (nilai >= 60 && nilai < 70) {
    grade = "D";
} else if (nilai >= 0 && nilai < 60) {
    grade = "E";
} else {
    grade = "Nilai tidak valid";
}


console.log("Nama Siswa: " + nama);
console.log("Nilai: " + nilai);
console.log("Grade: " + grade);
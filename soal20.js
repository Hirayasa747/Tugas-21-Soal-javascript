// M.Hirayasa X PPLG 2 soal 20

const prompt = require('prompt-sync')({sigint: true});

// Input huruf dari user
let huruf = prompt("Masukkan satu huruf (A-Z): ");

// Ubah ke huruf besar agar mudah dicek
huruf = huruf.toUpperCase();

// Cek apakah input berupa huruf A-Z
if (huruf >= "A" && huruf <= "Z") {
    // Cek vokal
    if (huruf === "A" || huruf === "I" || huruf === "U" || huruf === "E" || huruf === "O") {
        console.log(`${huruf} adalah huruf vokal`);
    } else {
        console.log(`${huruf} adalah huruf konsonan`);
    }
} else {
    console.log("Input bukan berupa huruf A-Z");
}
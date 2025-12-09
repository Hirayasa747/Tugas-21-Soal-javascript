// M.Hirayasa X PPLG 2 soal 17

const prompt = require('prompt-sync')({sigint: true});

// Input total harga barang
let harga = parseFloat(prompt("Masukkan total harga barang: "));

// Variabel diskon dan total bayar
let diskon = 0;
let totalBayar = harga;

// jika harga nya 200000 atau lebih, bakal di kasih diskon 7.5%
if (harga >= 200000) {
    diskon = 0.075 * harga;          // 7.5% dari harga
    totalBayar = harga - diskon;     // harga setelah diskon
}


console.log(`Total harga barang : ${harga}`);
console.log(`Diskon : ${diskon}`);
console.log(`Total bayar : ${totalBayar}`);
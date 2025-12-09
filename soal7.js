// soal 7 M.Hirayasa X PPLG 2

// Deklarasi variabel
let a = 8.3;
let c = "3.2"; 

// Ubah string ke number dengan Number()
let b = Number(c);

// Operasi aritmatika
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} x ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

// Modulus: konversi ke integer dulu
console.log(`${parseInt(a)} % ${parseInt(b)} = ${parseInt(a) % parseInt(b)}`);
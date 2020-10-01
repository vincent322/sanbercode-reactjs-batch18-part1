// soal 1
console.log('LOOPING PERTAMA');
var nomor = 0
while (nomor<20) {
    nomor+=2;
    console.log(nomor + " -  I love coding");
}
console.log('LOOPING Kedua');
while (nomor>=0) {
    console.log(nomor + " -  I will become a frontend developer");
    nomor-=2;
}

// soal 2
for (number=1; number<=20; number++) {
    if (number%3 == 0 && number%2 != 0) {
        console.log(number + ' - I love Coding');
    } else if (number%2 != 0) {
        console.log(number + ' - Santai');
    } else if (number%2 == 0) {
        console.log(number + ' - Berkualitas');
    } else {
        console.log('Wrong');
    }
}

// soal 3
for(a=1; a<=7; a++){
    console.log ("#".repeat(a))
  }

// soal 4
var kalimat= "saya sangat senang belajar javascript"
var nama = kalimat.split(" ");
console.log(nama);

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
console.log(daftarBuah);
console.log(daftarBuah[0]);
console.log(daftarBuah[1]);
console.log(daftarBuah[2]);
console.log(daftarBuah[3]);
console.log(daftarBuah[4]);
for (i=0; i<=4; i++) {
    console.log(daftarBuah[i]);
} 
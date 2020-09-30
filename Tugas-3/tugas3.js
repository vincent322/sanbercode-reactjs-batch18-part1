//soal 1
var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascript ";
var hasil = kataPertama + kataKedua + kataKetiga + kataKeempat; 
console.log(hasil) 

//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var hasil = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);
console.log(hasil); 

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua  = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 32);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal 4
var nilai = 30;
if (nilai>=80) {
    console.log("Indeksnya A")
} else if ( nilai>=70){
    console.log("Indeksnya B")
} else if (nilai>=60){
    console.log("Indeksnya C")
} else if (nilai >=50){
    console.log("Indeksnya D")  
}else {
    console.log("indeksnya E ")
}

// soal 5
var tanggal = 26;
var bulan = 9;
var tahun = 1998;
switch(bulan){
    case 1: {console.log('Januari'); break;}
    case 2: {console.log('Febuary'); break;}
    case 3: {console.log('Maret'); break;}
    case 4: {console.log('April'); break;}
    case 5: {console.log('Mei'); break;}
    case 6: {console.log('Juni'); break;}
    case 7: {console.log('Juli'); break;}
    case 8: {console.log('Agustus'); break;}
    case 9: {console.log('September'); break;}
    case 10: {console.log('Oktober'); break;}
    case 11: {console.log('November'); break;}
    case 12: {console.log('Desember'); break;}
    default: {console.log('ANJAY');}}

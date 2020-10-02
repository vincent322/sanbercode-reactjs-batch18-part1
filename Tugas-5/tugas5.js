//soal1
function halo(){
    return "Halo Sanbers!";
}

var show = halo();
console.log (show)

//soal2
var num1 = 12;
var num2 = 4;

function kalikan(){
    return num1 * num2;
}
var hasilkali = kalikan(num1, num2)
console.log(hasilkali)

// soal3
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

function introduce(){
return "Nama saya "+name+", umur saya "+age+", alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!"
}
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// soal4
var arrayDaftarPeserta = ["Asep", "Laki-laki", "baca buku", 1992]
var daftarPeserta = {
    nama : "Asep",
    jenisKelamin : "Lakilaki",
    hobi : "baca buku",
    tahunLahir : 1992 
}
console.log(daftarPeserta.nama)
console.log(daftarPeserta.jenisKelamin)
console.log(daftarPeserta.hobi)
console.log(daftarPeserta.tahunLahir)

// soal5
var buah = [{nama : "Strawbery", warna : "merah", adaBijinya : "tidak", harga : 9000}, {nama : "jeruk", warna : "oranye", adaBijinya : "ada", harga : 8000}, 
{nama : "Pisang", warna : "Kuning", adaBijinya : "tidak", harga : 5000}]

console.log(buah[0])

//soal6

var dataFilm = [];
console.log(dataFilm);
function tambahFilm(nama, durasi, genre, tahun){
    dataFilm.push({nama: nama, durasi: durasi, genre: genre, tahun: tahun});
    return dataFilm;
}
var filmBaru = tambahFilm("Resident Evil", 120, "Action, Horor", 2019);
var filmBaru = tambahFilm("The Conjuring", 130, "Horor", 2018);
var filmBaru = tambahFilm("Record of Youth", 130, "Drama", 2018);
console.log(filmBaru);
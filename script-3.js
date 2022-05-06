//Function Expression
//Berikut ini ada beberapa cara membuat Arrow Function Javascript

//1
// const tampilNama = function(nama){
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Anggit'));

//2
// const tampilNama = (nama) => {return `Halo, ${nama}`;}
// console.log('Anggit Puguh Setyawan');

//3
// const tampilNama = (nama,waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik','Malam'));

//4 - Implisit Return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('Anggit Puguh S');

//5
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

//6
// let mahasiswa = ['Umi', 'Andi', 'Budi'];

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

//Yang Atas ini diubah menggunakan ArrowFunction ---
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);
 
// lanjutan nomor 6, Mengembalikan dalam bentuk Objek, bukan Array lagi
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);


//7
//KONSEP this PADA ARROW FUNCTION
//Construction Function

// const Mahasiswa = function(){           //ini namanya Objek Mahasiswa kemudian membuat function expresion
//     this.nama = 'Sandhika';             //properti nama
//     this.umur = 33;                     //properti umur
//     this.sayHello = function(){      // this.sayHello = () => {    //ini namanya function expresion yang diubah menjadi arrow function
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
// }

// const sandhika = new Mahasiswa();

//OBJECT LITERAL
const mhs1 = {
    nama: 'Sandhika',
    umur: 33,
    sayHello: () => {
        console.log (`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}
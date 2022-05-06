//cara untuk membuat Object pada Javascript
// 1. Object Literal
// let mahasiswa = {
//     nama: 'Anggit',
//     energi:10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;  //kalau didalam objek ada keyword this
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration
// cara 1 tidak efektif ---

// function Mahasiswa (nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let anggit = Mahasiswa('anggit', 10);
// let puguh = Mahasiswa('puguh', 20);

//cara 2 efektif ---

// const methodMahasiswa = {

//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     },

//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa (nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    

//     return mahasiswa;
// }

// let anggit = Mahasiswa('anggit', 10);
// let puguh = Mahasiswa('puguh', 20);


// #cara efektif 3 menggunakan prototype  inheritance

function Mahasiswa (nama, energi){
//    let this = Object.create(Mahasiswa.prototype);
    this.nama = nama;
    this.energi = energi;
//    return mahasiswa;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main =function(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
}

let anggit = new Mahasiswa('Anggit', 10);

//---- LAGI UNTUK VERSI KELAS ---
// class Mahasiswa{
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi){
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }
    
//     main(jam){
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain`;
//     }
    
//     tidur(jam){
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur`;
//     }
// }

// let anggit = new Mahasiswa('Anggit', 15);


// 3. Constructor Function
//keyword new

// function Mahasiswa (nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// let anggit = new Mahasiswa('Anggit', 10);

// 4. Object.Create

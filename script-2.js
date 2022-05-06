//Penggunaan Closure
// //contoh 0 - Lexical Scope
// function init(){
//     let nama = 'Anggit Puguh';   //local variable - variable yang dibuat di dalam function init()
//     let umur = 32; 
//     function tampilNama(){ //inner function (closure*) - inner function memiliki akses ke parent variable nya. 
//         console.log(nama); //akses ke parent variable
//         console.log(umur); 
//     }
//     console.log(tampilNama());
// }
// init();


// //contoh 1
// function init(){
//     //let nama = 'Anggit';   //local variable
//     function tampilNama(nama){ //inner function (closure*)
//         console.log(nama); //akses ke parent variable
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Anggit Setyawan');


//contoh 2
// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}. Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.log(selamatMalam("Anggit"));

//contoh 3 - Pemahaman Closure
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
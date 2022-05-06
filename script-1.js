//EXECUTIONS CONTEXT, HOISTING AND SCOPE
// console.log(nama);
// var nama='Anggit';

//creations phase pada Global Context - saat program dijalankan, ada creations phase yaitu mencari ada VARIABLE atau FUNCTION tidak disana. 

//--kemudian menjalankan konsep HOISTING--
//nama var = undefined
//nama function = fn()

//kemudian javascript mendefinisikan 
//window = global object
//this = window

//EXCECUTION PHRASE
// console.log(sayHello());

// var nama = 'Anggit';
// var umur = 32;


// function sayHello(){
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

//function membuat Local Execution Context
// yang dida lamnya terdaapat creation dan execution phase
//window
//arguments
//hoistings

var nama = 'Anggit Puguh';
var username = 'anggitpuguh';

function cetakURL(username){
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL(username));
// function init() {
//   let nama = `galih`;
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// kenapa menggunakan closure?
// 1. untuk membuat function factories
// 2. untuk membuat private method
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}!!`);
  };
}
let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");

selamatPagi(`galih`);
selamatMalam("Arizza");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

let counter = 10;
// let a = add();

console.log(add());
console.log(add());
console.log(add());

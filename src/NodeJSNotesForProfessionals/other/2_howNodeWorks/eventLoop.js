let fs = require('fs');
let crypto = require('crypto');

setTimeout(() => console.log("Timer 1 finish"), 0);
setImmediate(() => console.log("Immediate 1 finish"));

fs.readFile('./test.txt', () => {
  console.log('I/O finished')
})

console.log("Welcome there :)");
/*
  Welcome there :)
  Timer 1 finish
  Immediate 1 finish
  I/O finished
*/

setTimeout(() => console.log("Timer 1 finish"), 0);
setImmediate(() => console.log("Immediate 1 finish"));

fs.readFile('./test.txt', () => {
  console.log('I/O finished')

  setTimeout(() => console.log("Timer 2 finish"), 0);
  setTimeout(() => console.log("Timer 3 finish"), 3000);
  setImmediate(() => console.log("Immediate 2 finish"));
})

console.log("Welcome there :)");
/*
  Welcome there :)
  Timer 1 finish
  Immediate 1 finish
  I/O finished
  Immediate 2 finish
  Timer 2 finish
  Timer 3 finish
*/

setTimeout(() => console.log("Timer 1 finish"), 0);
setImmediate(() => console.log("Immediate 1 finish"));

fs.readFile('./test.txt', () => {
  console.log('I/O finished');
  console.log('------------');

  setTimeout(() => console.log("Timer 2 finish"), 0);
  setTimeout(() => console.log("Timer 3 finish"), 3000);
  setImmediate(() => console.log("Immediate 2 finish"));

  process.nextTick(() => console.log('Process.nextTick'));
  process.nextTick(() => console.log('Process.nextTick - 2'));
})

console.log("Welcome there :)");
/*
  Welcome there :)
  Timer 1 finish
  Immediate 1 finish
  I/O finished
  ------------
  Process.nextTick
  Process.nextTick - 2
  Immediate 2 finish
  Timer 2 finish
  Timer 3 finish 
*/

let start = Date.now();

setTimeout(() => console.log("Timer 1 finish"), 0);
setImmediate(() => console.log("Immediate 1 finish"));

fs.readFile('./test.txt', () => {
  console.log('I/O finished');
  console.log('------------');

  setTimeout(() => console.log("Timer 2 finish"), 0);
  setTimeout(() => console.log("Timer 3 finish"), 3000);
  setImmediate(() => console.log("Immediate 2 finish"));

  process.nextTick(() => console.log('Process.nextTick'));
  process.nextTick(() => console.log('Process.nextTick - 2'));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
})

console.log("Welcome there :)");

/*
  Welcome there :)
  Timer 1 finish
  Immediate 1 finish
  I/O finished
  ------------
  Process.nextTick
  Process.nextTick - 2
  Immediate 2 finish
  Timer 2 finish
  Timer 3 finish
  3323 'Password encrypted'
  3351 'Password encrypted'
  3364 'Password encrypted'
  3373 'Password encrypted'
*/

process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finish"), 0);
setImmediate(() => console.log("Immediate 1 finish"));

fs.readFile('./test.txt', () => {
  console.log('I/O finished');
  console.log('------------');

  setTimeout(() => console.log("Timer 2 finish"), 0);
  setTimeout(() => console.log("Timer 3 finish"), 3000);
  setImmediate(() => console.log("Immediate 2 finish"));

  process.nextTick(() => console.log('Process.nextTick'));
  process.nextTick(() => console.log('Process.nextTick - 2'));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  })
})

console.log("Welcome there :)");

/*
// process.env.UV_THREADPOOL_SIZE = 1; //
    Welcome there :)
    Timer 1 finish
    Immediate 1 finish
    I/O finished
    ------------
    Process.nextTick
    Process.nextTick - 2
    Immediate 2 finish
    Timer 2 finish
    1678 'Password encrypted'
    Timer 3 finish
    3354 'Password encrypted'
    5063 'Password encrypted'
    6738 'Password encrypted'

// process.env.UV_THREADPOOL_SIZE = 2; //
    Welcome there :)
    Timer 1 finish
    Immediate 1 finish
    I/O finished
    ------------
    Process.nextTick
    Process.nextTick - 2
    Immediate 2 finish
    Timer 2 finish
    1717 'Password encrypted'
    1734 'Password encrypted'
    Timer 3 finish
    3441 'Password encrypted'
    3445 'Password encrypted'

// process.env.UV_THREADPOOL_SIZE = 3; //
    Welcome there :)
    Timer 1 finish
    Immediate 1 finish
    I/O finished
    ------------
    Process.nextTick
    Process.nextTick - 2
    Immediate 2 finish
    Timer 2 finish
    2156 'Password encrypted'
    2618 'Password encrypted'
    2978 'Password encrypted'
    Timer 3 finish
    3822 'Password encrypted'

// process.env.UV_THREADPOOL_SIZE = 4; //
    Welcome there :)
    Timer 1 finish
    Immediate 1 finish
    I/O finished
    ------------
    Process.nextTick
    Process.nextTick - 2
    Immediate 2 finish
    Timer 2 finish
    Timer 3 finish
    3295 'Password encrypted'
    3333 'Password encrypted'
    3368 'Password encrypted'
    3395 'Password encrypted'
*/
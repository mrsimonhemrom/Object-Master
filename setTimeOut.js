// Asynchronous Javascript setTimeout, setInterval:

console.log(22222);
console.log(33333);
console.log(44444);
console.log(55555);

// setTimeOut:
// ---------------------
// For call function
// function timeOut() {
//     console.log("I'm normal set time out function.");
// }
// setTimeout(timeOut);

// // For setTimeOut keyword in function
// setTimeout(function () {
//     console.log("Hello se time out");
// }, 2000)

// // For setTimeOut keyword in arrow keyword function
// setTimeout(() => {
//     console.log("Hi i'm here set time out. ");
// }, 4000)

// setInterval:
// ---------------------
setInterval(() => {
    console.log("Hello set interval");
}, 1000); // Press control + c (keyboard) and STOP;
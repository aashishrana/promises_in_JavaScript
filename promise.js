function createPromise() {
    return new Promise((resolve, reject) => {
        // Asynchronus piece of code
        setTimeout(function f() {
            console.log("timer done");
            resolve("done");
        }, 3000);
    });
}
console.log("start");
let x = createPromise();
console.log("got a new promise");
x.then(function f() {
    console.log("promise done");
});
console.log("end");
for(let i = 0; i < 5; i++) {
    // code
    console.log("Synchronus function");
}
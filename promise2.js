function promiseNew() {
    return new Promise((resolve , reject) => {
        setTimeout(function f() {
            console.log("Asynchronus code");
            resolve("asynchronus code execute completly");
        }, 5000);
        
    });
};
console.log("Start");
let x = promiseNew();
console.log("Got a new promise");
x.then(function f2() {
    console.log("after the completion of async  code ");
});
console.log("end");
for(let i = 0; i < 5; i++) {
   console.log("simple loop");
}








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
let y = createPromise();
console.log("got a new promise");
y.then(function f() {
    console.log("promise done");
});
console.log("end");
for(let i = 0; i < 5; i++) {
    // code
    console.log("Synchronus function");
}
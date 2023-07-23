function promiseNew() {
    return new promiseNew((resolve , reject) => {
        setTimeout(function f() {
            console.log("Asynchronus code");
            resolve("asynchronus code execute completly");
        }, 5000);
        
    });
};

console.log("Start");
let x = promiseNew();

x.then(function f2() {
    console.log("after the completion of async  code ");
});

console.log("end");
for(let i = 0; i < 5; i++) {
   console.log("simple loop");
}
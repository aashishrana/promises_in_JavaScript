function morePromise() {
    return new Promise((resolve, reject) => {
        // Asyncc code
        setTimeout(function f() {
            console.log("async function")
            reject("rejected");
        }, 5000);
    });
}

console.log("start");
let x = morePromise();
console.log("a new promise");
x.then(function f2(value) {
    console.log("after completion of async code", value)
})
.catch(function f3(value) {
    console.log("new code ", value);
}) 
console.log("end");
for(let i = 0; i < 3; i++) {
    console.log("simple function ");
}
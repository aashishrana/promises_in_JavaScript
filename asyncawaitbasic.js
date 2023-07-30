function createPromise() {
    return new Promise(function exec(resolve, reject) {
        // Asynch code

        setTimeout(function f() {
            console.log("Timer done");
            reject("promise rejected");
        }, 3000);
    });
}


async function consume() {

    try {
        console.log("Inside function");
        const response = await createPromise();
        const response2 = await createPromise();

        console.log("response is ", response);
    } catch(err) {
        console.log("handled" , err);
    }
}

console.log("Start");
consume();
console.log("end");
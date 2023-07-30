function simulateDelayedAPICall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("API call successful!");
      }, 1000);
    });
  }
  
  async function fetchData() {
    try {
      const data = await simulateDelayedAPICall();
      console.log(data); // Prints "API call successful!" after 1 second.
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  
  fetchData();
  
//   In the example above, the simulateDelayedAPICall() function returns a Promise that resolves after a 1-second delay. The fetchData() function is defined as async, and it uses await to pause the execution until the Promise from simulateDelayedAPICall() is resolved. This makes the code look like synchronous code, even though it is handling asynchronous operations.
  
//   Using async and await simplifies error handling as well. Any errors thrown inside an async function will be caught by the nearest try...catch block.
  
//   It's important to note that using await can only be done inside async functions. However, you can still use regular Promises and the .then() syntax if needed, making async and await complementary to traditional Promise-based approaches.
  
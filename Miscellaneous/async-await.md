```javascript
async syncCall(){
  console.log("Inside");
  const resp = await fetch("https://api.github.com/users/harshitrajsinha"); // returns promise and then response = headers and body stream in resp variable
  const result = await resp.json(); // returns promise and then response in JSON format
  console.log(result);
}
console.log("Before");
console.log(syncCall());
console.log("After");
```
## Working of async/await -
program pushes console.log("Before") to call stack(main thread), which outputs - Before -> syncCall() function is pushed to Call Stack -> outputs - Inside -> fetch() is moved to Web API (can be considered as seperate stack) -> function returns a promise and output - promise <'pending'> and continues -> outputs - After. Once response is recieved, it is moved from Web API to callback queue -> Event Loop constantly checks if Call Stack is empty. If empty, moves items from Callback Queue to Call Stack, response of the URL is printed.

> If javascript is a single threaded language then how come async and await works ? Think of JavaScript like a waiter (single thread) at a restaurant:
> 
```javascript
console.log("I am the waiter");

// This is like taking a customer's order
async function takeOrder() {
    console.log("Taking order from table 1");
    
    // This is like sending order to kitchen
    const food = await cookFood();  // Doesn't block the waiter
    
    // Waiter is free to serve others while food is being cooked
    console.log("Food is ready for table 1");
}

// This represents kitchen cooking food
function cookFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food prepared");
        }, 2000);  // Kitchen takes 2 seconds
    });
}

// Waiter's activities
console.log("Starting my shift");
takeOrder();                    // Submit order to kitchen
console.log("Serving table 2"); // Immediately moves to next task

// Output:
// Starting my shift
// Taking order from table 1
// Serving table 2
// (after 2 seconds)
// Food is ready for table 1

/*
How it works behind the scenes:
1 - JavaScript Runtime (Main Thread - The Waiter):
* Executes your code line by line
* Can only do one thing at a time
2 - Web APIs (The Kitchen):
* Handle async operations like:
- setTimeout/setInterval (timers)
- fetch (network requests)
- file operations
- database calls
3 - Callback Queue (Order Pickup Counter):
* Holds completed async operations
* Waits for main thread to be free
4 - Event Loop (Restaurant Manager):
* Checks if main thread is free
* Moves completed tasks from queue to main thread
*/
```


* async/await can be considered as an alternative to .then().catch() which returns a response synchronously.
* async - keyword is used to allow the use of 'await' and returns a promise
```javascript
async function test(){
  reuturn "1";
}
console.log(test()); // promise <'1'>
```
* await - keyword is used to make the function synchronous.
* Promise (an object) is returned in multiple scenarios - Fetching data from API, working with databases, authentication and authorization, websockets, reading and writing files.

# Simulating api creation to return promise, then response
```javascript
function mockFetch(url) {
    return new Promise((resolve, reject) => {

        // Simulate network latency with a delay of 2 seconds
        setTimeout(() => {
            if (url === "https://example.com/api/data") {
                // Simulated response data
                const data = {
                    message: "Data fetched successfully!",
                    timestamp: new Date().toISOString()
                };

                // Resolve the promise with a Response-like object
                resolve({
                    ok: true,
                    status: 200,
                    json: () => Promise.resolve(data)
                    /*
                      In the real fetch API, calling .json() on the response object returns a promise that resolves to parsed JSON data. To mimic this behavior, json: () => Promise.resolve(data) is used to simulate the .json() method.
                    */
                });
            } else {
                // If the URL is not correct, reject the promise
                reject(new Error("404: Not Found"));
            }
        }, 2000); // 2-second delay
    });
}

const responsePromise = mockFetch("https://example.com/api/data");
console.log(responsePromise); // Promise { <pending> }
responsePromise
    .then((response) => {
        console.log(response); // { ok: true, status: 200, json: [Function: json] }
        return response.json();
    })
    .then((data) => {
        console.log(data); 
        /*
            {
                message: 'Data fetched successfully!',
                timestamp: '2024-11-02T12:20:28.561Z'
            }
        */
    })
    .catch((error) => {
        console.log(error)
    })

// Usage with async/await
(async () => {
    try {
        const response = await mockFetch("https://example.com/api/data");
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log("Response received:", data);
        } else {
            console.error("Failed to fetch data.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
})();
```

# References:
[.then().catch vs async/await](https://www.youtube.com/watch?v=li7FzDHYZpc)

[Why does JavaScript's fetch make me wait TWICE?](https://youtu.be/Ki64Cnyf_cA?si=WH_mUGn8sy3QsBTh)

## async await vs promise.all
Theo-t3.gg [https://youtu.be/3h7Lc85RDLo?feature=shared] - 2:14
He explains how he was able to 4x the performance for one of his client where the client had used multiple await blocks starting from taking user input and then followed by couple of prisma database queries to get more data and work on the user data. In all the blocks, client had used an await. He optimized it by taking all the queries and wrapping them in promise.all so that they can run in parallel instead of individually.

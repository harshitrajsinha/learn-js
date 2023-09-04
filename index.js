function outer() {
  const name = "Bob";

  function inner() {
    console.log(`Hello, ${name}!`);
  }

  return inner;
}

const greeting = outer();
greeting(); // logs "Hello, Bob!"
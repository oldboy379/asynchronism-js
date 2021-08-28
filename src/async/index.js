const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do something Async'), 3000)
      : reject(new Error('Test Error'))
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

const anotherFunction = async () => {
  try{
    const something = await doSomethingAsync();
    console.log(something)
  } catch (error) {
    console.log(error)
  }
}

console.log('Before 1');
doSomething();
console.log('After 1');

console.log('Before 2');
anotherFunction();
console.log('After 2');
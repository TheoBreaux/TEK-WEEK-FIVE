function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

const name = "Module File Value";

function getValue(arg) {
  // do something with arg
  console.log(arg);
}

const greeting = (name) => {
  console.log(`Hello ${name}`);
};

export { add, subtract, name, greeting, getValue };

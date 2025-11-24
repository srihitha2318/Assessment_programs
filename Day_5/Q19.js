// -----------------------------
// 1. Template Literals
// -----------------------------
console.log(`5 + 7 = ${5 + 7}`);

const multi = `Line 1
Line 2
Line 3`;
console.log(multi);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// -----------------------------
// 2. Arrow Functions & this
// -----------------------------
const square = (n) => n * n;
console.log(square(5));

const obj1 = {
  value: 50,
  test: () => console.log(this.value)
};
obj1.test();

const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// -----------------------------
// 3. Rest, Spread & Copying
// -----------------------------
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1, 5, 2, 9));


// -----------------------------
// 4. Destructuring & Optional Chaining
// -----------------------------
const arr = [10, 20, 30];
const [aa, bb] = arr;
console.log(aa, bb);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.user?.name);


// -----------------------------
// 5. Scoping
// -----------------------------
for (var i = 0; i < 3; i++) {}
console.log(i);

// console.log(j); (let is block scoped)


// -----------------------------
// 6. Ternary Operator
// -----------------------------
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 20;
const category = age >= 18 ? "Adult" : "Minor";
console.log(category);

const checkNum = (n) => (n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative");
console.log(checkNum(-5));


// -----------------------------
// 7. Spread, Rest & Arrays
// -----------------------------
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

const a1 = ["x", "y"];
const b1 = ["z"];
const combined = [...a1, ...b1];
console.log(combined);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// -----------------------------
// 8. Object Destructuring & Shorthand
// -----------------------------
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const id1 = 101;
const role = "admin";
const user2 = { id1, role };
console.log(user2);

const person = {
  name: "Sam",
  greet() {
    console.log("Hello!");
  }
};
person.greet();


// -----------------------------
// 9. Template Literal Practice
// -----------------------------
console.log(`Today: ${new Date().toDateString()}`);

const NAME = "Alice";
const SCORE = 92;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// -----------------------------
// 10. Arrow Function Shorthands
// -----------------------------
const add = (a, b) => a + b;
console.log(add(3, 4));

const isAdult = (age) => age >= 18;
console.log(isAdult(20));

const double = (n) => n * 2;
console.log(double(6));


// -----------------------------
// 11. Spread Operator
// -----------------------------
const arrClone = [...nums];
console.log(arrClone);

const addFront = [100, ...nums];
console.log(addFront);

const objA = { name: "Ram", age: 20 };
const objB = { age: 25 };
const finalObj = { ...objA, ...objB };
console.log(finalObj);


// -----------------------------
// 12. Optional Chaining
// -----------------------------
const user3 = {
  name: "Alex",
  address: { city: "Bangalore" }
};
console.log(user3?.address?.city);

console.log(user3?.job?.title);

const book = { title: "JS Guide" };
console.log(book.author?.name);

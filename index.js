let a = ["Pritam", 24, "Programmer"];
let[name, age, profession] = a;
console.log(name); // Pritam
console.log(age); // 24
console.log(profession); // Programmer

// Default value in destructuring assignment
let b = [10];
let [x=10, y=20] = b;
console.log(x); // 10
console.log(y); // undefined

// Swapping variables without temporary variable
// let x1 = 5, y1 = 7;
// [x1, y1] = [y1, x1];
// console.log(x1); //  7
// console.log(y1); //    5
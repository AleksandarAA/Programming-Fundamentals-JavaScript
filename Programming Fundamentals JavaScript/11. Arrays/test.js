//let student1 = "Pesho";
//let student2 = "Gosho";
//let student3 = "Stamat";
//let student4 = "Mariyka";

//... to student24

// Problem: each student need to say Hello, my name is ${name}
//console.log(`Hello my name is ${student1}`);
//console.log(`Hello my name is ${student2}`);
//console.log(`Hello my name is ${student3}`);
//console.log(`Hello my name is ${student4}`);
//...

let students = ["Pesho", "Gosho", "Stamat", "Mariyka","Kalinka"];

students[3] = "Mariya"

console.log(students[3]);

// Get the length of array
console.log(students.length);

// get the last element of the array
console.log(students[students.length - 1]);

// Add element at the edn of the array
students[students.length] = 'Vladi'; // not clean code (not very usefull)
console.log(students);

// Add at the end using PUSH method, AKA the clean method :)
students.push('Gaby')
console.log(students);

// Select element on invalid position
console.log(students[100]);

// Set element on non existing position
students[23] = 'Yavor'
console.log(students);
console.log(students.length);

// Using invalid index
//console.log(students[-1]);
//students[-1] = 'ninja';  // Bad practice, invalid index
//console.log(students[-1]);

// Check id there is an element inside the array
console.log(students.includes('Pesho'));

// Use toString method on array
console.log(students.toString());   // Less usefull

// Join elements inside array into string
console.log(students.join(" "));    // More usefull


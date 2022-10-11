//Function declaration
function solve() {
  console.log("Function declaration");
}

//Function expression
let func = function () {
  console.log("Function expression");
};

//Function expression with named function
let func2 = function fancyName(){
  console.log("Function expression with named function");
}

//Function calling inside function
function main() {
  solve();
  func();
  func2();
}

//Function invoking
solve();
func();
func2();
main();

//Function always return value
let returnedValue = solve();
console.log(returnedValue);

//Function expression with arguments
const sum = function(a, b) {
  console.log(a + b);
}
sum(1, 2)
// alert ('hello world')

var x=5, y=6;
var z, a=100;
var b = '5';
var firstName = 'Sara';
var lastName = 'Carbonell';
var fullName = firstName, lastName;
var sum = x + y;
var test = x + b;
var fullName = firstName + ' ' + lastName;
var isTrue = true;

console.log(x,y);
console.log(z);
console.log(a);
console.log(firstName);
console.log('Carbonell');
console.log(sum);
console.log(test);
console.log(typeof test);
console.log(fullName)
console.log(firstName, lastName);
console.log(sum);
console.log('My name is', fullName, 'and my math is', sum);
console.log('My name is', fullName, 'and my math is', test);
console.log(isTrue);
console.log(false);
console.log('The opposite of isTrue is', false);
console.log('The value of isTrue is', isTrue);
console.log(firstName * x);
console.log(x ** y);
var sum = 10 % 3;
console.log('The new value of sum is', sum);
console.log(x);
console.log(x > y);
console.log(x < y);
console.log(x == 5);
console.log(x == b);
console.log(x === b);
console.log(x > 5);
console.log(x >= 5);
console.log(!isTrue);
console.log(x != 5);
console.log(x == 5 && y == 6);
console.log(x != 5 && y == 6);
console.log(x == 5 && y != 6);
console.log(x != 5 && y != 6);
console.log(x == 5 || y == 6);
console.log(x == 5 || y != 6);
console.log(x != 5 || y == 6);
console.log(x != 5 || y != 6);

if (x == 5 && y == 6) {
  console.log('our condition is true')
}

if (x == 5 && y!=6) { // false
  console.log('our condition is false so this will not show');
} else if (x >= 6) { // 5 is not equal to 6, x 5 is not greater that or equal to 6
  console.log('x is not equal to 6 that\'s why this is showing');
} else {
  console.log('This shows if all if/else if statements are false');
  }

x = 10;
if (x % 2 == 0) {
  console.log('x is an even number');
} else {
  console.log('x is an odd number');
}

if (firstName == "Sara") {
  console.log('access granted')
}

if (lastName == 'carbonell') {
  console.log('Comparison is case sensitive');
}

if (firstName == 'sara' || lastName == 'carbonell') {
  console.log('princess is in');
} else {
  console.log('princess is out');
}

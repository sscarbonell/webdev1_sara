var length = 0;
var width = 0;
var height = 0;

width = 10;
height = 15;
length = 23;

var product = length * width * height;

console.log(product);

if (product % 2 == 0) {
  console.log('the product is even number');
} else if (product % 2 != 0) {
  console.log('the product is odd number');
}

if (product % 3 == 0) {
  console.log('divisible by 3');
} else if (product % 3 != 0) {
  console.log('not divisible by 3');
}

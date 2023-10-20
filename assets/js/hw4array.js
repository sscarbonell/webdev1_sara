var fruits = [];
var fruitNumber = prompt('How many fruits do you want to enter (3-10)?');
if (fruitNumber < 3 || fruitNumber > 10) {
alert("Please enter a number between 3 and 10. Refresh page to start again.");
} else {
for (var i = 0; i < fruitNumber; i++) {
  var fruitName = prompt(`Enter fruit #${i + 1} (in lowercase):`);
  fruits.push(fruitName);
}

console.log(fruits);
console.log('First fruit is', fruits[0], 'and last fruit is', fruits[fruits.length - 1]);
fruits.sort()
console.log(fruits.reverse());
console.log('Second fruit is', fruits[1]);
fruits.splice(0,1);
fruits.splice(1,1);
console.log(fruits);

var vegetables = [];
var vegNumber = prompt('How many vegetables do you want to enter (3-10)?');
if (vegNumber < 3 || vegNumber > 10) {
  alert("Please enter a number between 3 and 10. Refresh page to start again.");
} else {
for (var i = 0; i < vegNumber; i++) {
  var vegName = prompt(`Enter vegetable #${i + 1} (in lowercase):`);
  vegetables.push(vegName);
}

var food = fruits.concat(vegetables);
console.log(food);

for (let i = 0; i < food.length; i++) {
var item = food[i];
var isEven = i % 2 === 0;
var itemLength = item.length;
var secondLetter = item[1];
var reversedItem = item.split('').reverse().join('');
console.log(`Index ${i} is ${isEven ? 'even' : 'odd'} and the food inside it is called ${item}. 
The word ${item} has ${itemLength} letters and the second letter is ${secondLetter}. 
If you reverse it, it becomes ${reversedItem}.`);
}

var searchFood = prompt('Enter a food to search (in lowercase):');
var foodIndex = food.indexOf(searchFood);
if (foodIndex !== -1) {
  alert(`Food is found at index ${foodIndex}`);
} else {
  alert("Food not found");
  }

food[0] = 'START';
food[food.length - 1] = 'END';
food = food.map(item => item.toUpperCase());

console.log(food);
  }
}

for (var x = 0; x <= 10; x++) {
  console.log('Kael pogi #', x)
}

for (var counter = 0; counter < 10; counter++) {
  if (counter % 2 == 0) {
    console.log(counter, 'Even')
  } else {
    console.log(counter, 'Odd')    
  }
}

for (var goingDown = 100; goingDown > 3; goingDown--) {
  if (counter % 2 == 0) {
    console.log('goingDown for real in', goingDown)
  } 
}
console.log('down')

var y = 0
while (y <= 10) {
  console.log('Kael ulit #', y);
  y++;
}

if (confirm('Press a button')) {
  console.log('You pressed OK!');
} else {
  console.log('You pressed cancel');
}

console.log('end # 1')

var confirmOutput = confirm('Trying out confirm box');
console.log('checking confirmOutput');

if (confirmOutput == true) {
  console.log('it is true');
} else {
  console.log('false');
}

console.log('end #2')

var personName = prompt('Please enter your name so I can address you');
console.log(personName);
if (personName == 'Alixandria') {
  alert('Welcome to my site, ' + personName);
} else {
  alert('Only Alixandria can enter here!');
}
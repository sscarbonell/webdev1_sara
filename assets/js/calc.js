var displayElement = document.getElementById ('displayRow');
var value = 0;
displayElement.innerHTML = 0;

function pressNumber(number) {
  valueString = value.toString();
  if (valueString == '0') {
    valueString = number.toString();
    value = number;
  } else {
    valueString = valueString + number.toString();
    value = parseInt(valueString);
  }
  console.log(valueString);
  displayElement.innerHTML = valueString;
}
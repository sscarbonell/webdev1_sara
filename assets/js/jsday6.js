var elem = document.createElement ('p');
elem.innerHTML = 'Hello World for DOM!';
var divElement = document.getElementsByTagName('div')[0];
divElement.appendChild(elem);
var linkElement = document.createElement('a');
linkElement.href='http://facebook.com';
linkElement.innerHTML='This is link to Facebook';
divElement.appendChild(linkElement);

var animationElement = document.getElementById('myAnimation');
var containerElement = document.getElementById('myContainer');
var pos = 0;
var id = setInterval(frame, 10);
animationElement.style.background = 'white';
containerElement.style.backgroundColor = 'black';

function frame() {
  if (pos > 350) {
    animationElement.style.background = 'yellow';
    containerElement.style.backgroundColor = 'green';
    clearInterval(id);
  } else {
    animationElement.style.top = 'px';
    containerElement.style.left = 'px';
  }
  pos++;
}

document.getElementById('printing').innerHTML = 'Printing';
setTimeout(doone, 3000);

function doone() {
  document.getElementById('printing').innerHTML = 'DONE!';
};

var eventsElement = document.getElementById('events');

function hover() {
  eventsElement.style.color = 'red';
  eventsElement.style.backgroundColor = 'blue';
  eventsElement.style.fontSize = '100px';
};

function out() {
  eventsElement.style.color = 'blue';
  eventsElement.style.backgroundColor = 'red';
  eventsElement.style.fontSize = '20px';
}

var click1=0
function colStyle() {
  var myCollection = document.getElementsByClassName('collection');
  if(click1%2 == 0) {
    for (i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "gold";
    }
  }
  else {
    for (i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "purple";
    }
  }
    click1 ++;
}

var todoInput = document.getElementById('todoInput');
var todoUL = document.getElementById('todoUL');

function submitTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();

  if (todoText === '') {
      alert('Please enter a task.');
      return;
  }

  const todoUL = document.getElementById('todoUL');
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
          li.style.textDecoration = 'line-through';
      } else {
          li.style.textDecoration = 'none';
      }
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
      li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(todoText));
  li.appendChild(deleteButton);
  todoUL.appendChild(li);

  todoInput.value = '';
}
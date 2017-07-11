console.log('hi hello connected');
//GOALS
//be able to enter information to input element
//dynamically create list items for new information
//assign entered information to newly created list items
//append list item elements and content to html page

//STRETCH GOALS
//be able to select a specific existing list item
//remove selected item along with content assigned to it


let addBtn = document.getElementById('addItem');

addBtn.addEventListener('click', function newListItem(){
  let newItem = document.createElement('li');
  let userText = document.getElementById('enterItem').value;
  let textNode = document.createTextNode(userText);
  let list = document.getElementById('listItems');

  newItem.appendChild(textNode);
  list.appendChild(newItem);

// document.getElementById('enterItem').value = ' ';
// let placeholderInput = document.querySelector('input');
// placeholderInput.style.placeholder = 'what do you need to do?'
});

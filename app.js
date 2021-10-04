// import functions and grab DOM elements

const firstName = document.getElementById('first-name');
const button = document.getElementById('generate-entry');
const newNameInput = document.getElementById('new-name-input');
const textBoxP = document.getElementById('text-box-p')

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button.addEventListener('click', ()=> {
  // post-click logic goes here
  //when the button is clicked
  // get the value of the input
  // replace the text in the nametag with the value
  
  let nameValue = newNameInput.value;
  firstName.textContent = nameValue;

  let pronounValue = textBoxP.value;
  pronouns.textContent = pronounValue;
});



      
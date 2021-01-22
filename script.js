const input = document.querySelector('.text-input');
const para = document.querySelector('p');
const reverseBtn = document.querySelector('.reverse-button');
const resetBtn = document.querySelector('.reset-button');

function reverseText() {
  let outputText = reverseString(input.value);
  para.textContent = outputText;
}

reverseBtn.addEventListener('click', reverseText);

resetBtn.addEventListener('click', function() {
  input.value = '';
  para.textContent = '';
});

input.addEventListener('keydown', pressEnter);

function pressEnter(e) {
  if(e.key === 'Enter') {
    reverseText();
  }
}

// the first way I could think of to reverse the string:

// with the for loop:

function reverseString(str) {
  let array = str.split('');
  let reversedArray = [];
  
  for(let i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  
  return reversedArray.join(''); 
}

//other ways to do it:

//reverting the loop:

/*function reverseString(str) {
    let array = para.textContent.split('');
    let reversedArray = [];
    
    for(let i = array.length; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    
    result = reversedArray.join('');
    
}*/

//the shortest way:

/*function reverseString(str) {
  return str.split('').reverse().join('');
}*/

//with 'for of' loop:

/*function reverseString(str) {
  let reversedStr = '';
  for(value of str) {
    reversedStr = value + reversedStr;
  }
  return reversedStr;
}*/
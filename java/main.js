const rolldice = document.querySelector('#rollDice')//For my rolls
const button2 = document.querySelector('.button2')//Shows all the rolls
const button3 = document.querySelector('.button3')//extra crd
const diceroll = document.querySelector('#name')
const status = document.querySelector('#status')
const showme = document.querySelector('#showme')
let total = 0 //of the roll
let dieroll = []; //sum of every round
let index = 0
let array = 0
let randomroll = 0
var die1 = document.getElementById('die1');
var die2 = document.getElementById('die2');
//var status = document.getElementById ('status');
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
var dicetotal = d1 + d2;
//var newDiv = document.createElement("div");

rolldice.addEventListener('click', function () {
  let userInput = diceroll.value
  while (index < userInput) {
    let randomroll = Math.floor(Math.random() * 6) + 1;
    total += randomroll
    console.log("randomroll")
    dieroll.push(randomroll);
    index += 1
  }
  status.innerHTML = "Sum Total is ?" + total + '';
})

button2.addEventListener('click', function () {
  console.log("clicked")
  while (array < dieroll.length) {
    let list = document.createElement('li')
    list.innerHTML = dieroll[array]
    showme.appendChild(list)

    array += 1

  }

})

button3.addEventListener('click',reset);
  function button3 (){
    
  }
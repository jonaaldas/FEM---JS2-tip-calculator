// DOM variables
let total = document.querySelector('.totalBill').addEventListener('input', getTotalBill);
let tip = document.querySelectorAll('.tip-amount');
// transforming NodeList to Array
let tipArr = Array.from(tip);
tipArr.forEach(function(e){
  if(e.tagName === 'DIV'){
    e.addEventListener('click', getTotalTip);
  } 
  if(e.tagName === 'INPUT'){
    e.addEventListener('input', getTotalTip);
  }
})

let people = document.querySelector('.people').addEventListener('input', getTotalPeople);

let tipPerPerson = document.querySelector('.tip-output');
let PerPerson = document.querySelector('.per-person');

let resetButton = document.querySelector('.reset-btn').addEventListener('click', resetEverything);

// tracking varaiables
let starterValue = 0; //Value of the bill is zero
let totalTip = 0; //Value for tip
let totalPeople = 0 //Value of total people

let totalTipPerPerson = 0; //tip per each person
let totaPerPerson = 0 //how much it cost in total per person



// functions
function getTotalBill(){
  starterValue = parseInt(this.value);
}

function getTotalTip(){
  totalTip = tipArr;
  if(this.tagName === 'DIV'){
    totalTip = parseInt(this.innerHTML)/100;
  }
  if(this.tagName === 'INPUT'){
    totalTip = this.value/100;
  }
}

function getTotalPeople(){
  totalPeople = parseInt(this.value);
  tipAmountPerPerson()
}

function tipAmountPerPerson(){
  totalTipPerPerson = (starterValue * totalTip)/totalPeople;
  tipPerPerson.innerHTML = '$' + totalTipPerPerson;

  totaPerPerson = ((starterValue * totalTip) + starterValue) / totalPeople;
  PerPerson.innerHTML = '$' + totaPerPerson;
}

function resetEverything(){
  tipPerPerson.innerHTML = 0;
  PerPerson.innerHTML = 0;
  starterValue = 0;
  totalTip = 0;
  totalPeople = 0;
}



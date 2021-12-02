let totalBill = document.querySelector(".totalBill");
totalBill.addEventListener('change', saveTotalBill);

function saveTotalBill(){
  console.log(totalBill.value)
}

let tipAmount = document.querySelectorAll(".tip-amount");
let tipAmountArr = Array.from(tipAmount);

tipAmountArr.forEach(arr => arr.addEventListener('click', savedTotalTipAmount));

// addEventListener('click', savedTotalTipAmount);

function savedTotalTipAmount(){
  console.log("I am getting clicked")
}



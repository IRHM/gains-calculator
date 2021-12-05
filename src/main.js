const iBoughtAtPrice = document.getElementById("boughtAtPrice");
const iAmountPurchased = document.getElementById("amountPurchased");
const iSellAtPrice = document.getElementById("sellAtPrice");

const iAmountRecieved = document.getElementById("amountRecieved");
const iGainsRecieved = document.getElementById("gainsRecieved");

iBoughtAtPrice.addEventListener("keyup", () => calculate());
iAmountPurchased.addEventListener("keyup", () => calculate());
iSellAtPrice.addEventListener("keyup", () => calculate());

calculate();

function calculate() {
  let boughtAtPrice = iBoughtAtPrice.value;
  let amountPurchased = iAmountPurchased.value;
  let sellAtPrice = iSellAtPrice.value;

  // iError("boughtAtPrice");

  if (boughtAtPrice && amountPurchased && sellAtPrice) {
    console.log(boughtAtPrice, amountPurchased, sellAtPrice);

    let amountRecieved = amountPurchased / boughtAtPrice;
    let gainsRecieved = sellAtPrice * amountRecieved - amountPurchased;

    iAmountRecieved.innerHTML = `£${amountRecieved}`;
    iGainsRecieved.innerHTML = `£${gainsRecieved}`;
  }
}

function iError(inputName) {
  if (inputName == "boughtAtPrice") {
    iBoughtAtPrice.style.borderColor = "#EC255A";
    // add error msg in placeholder
  }
}

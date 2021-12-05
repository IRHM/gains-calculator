/**
 * Prefixes:
 *  - i: Is an Input
 *  - e: Is a label's error text element
 */
const els = {
  iBoughtAtPrice: document.getElementById("boughtAtPrice"),
  lBoughtAtPrice: document.getElementById("eBoughtAtPrice"),
  iAmountPurchased: document.getElementById("amountPurchased"),
  lAmountPurchased: document.getElementById("eAmountPurchased"),
  iSellAtPrice: document.getElementById("sellAtPrice"),
  lSellAtPrice: document.getElementById("eSellAtPrice"),
  iAmountRecieved: document.getElementById("amountRecieved"),
  iGainsRecieved: document.getElementById("gainsRecieved")
};

els.iBoughtAtPrice.addEventListener("keyup", calculate);
els.iAmountPurchased.addEventListener("keyup", calculate);
els.iSellAtPrice.addEventListener("keyup", calculate);

calculate();

function calculate(ev) {
  let boughtAtPrice = els.iBoughtAtPrice.value;
  let amountPurchased = els.iAmountPurchased.value;
  let sellAtPrice = els.iSellAtPrice.value;

  if (ev && ev.target) checkForErrors(ev.target);

  if (boughtAtPrice && amountPurchased && sellAtPrice) {
    console.log(boughtAtPrice, amountPurchased, sellAtPrice);

    let amountRecieved = amountPurchased / boughtAtPrice;
    let gainsRecieved = sellAtPrice * amountRecieved - amountPurchased;

    els.iAmountRecieved.innerHTML = `£${amountRecieved}`;
    els.iGainsRecieved.innerHTML = `£${gainsRecieved}`;
  } else {
    els.iAmountRecieved.innerHTML = `£0`;
    els.iGainsRecieved.innerHTML = `£0`;
  }
}

/**
 * Check for errors in the input elements.
 * Currently only checks for if strings are entered and shows only numbers allowed error.
 */
function checkForErrors(el) {
  // Regex to test if string is only numbers
  let nReg = new RegExp(/^\d+$/g);
  let elId = el.id;

  if (elId && el.value) nReg.test(el.value) ? iError(elId, false) : iError(elId, true);
  else iError(elId, false);
}

function iError(inputName, isError = true) {
  let iel;
  let lel;

  console.log(inputName);

  if (inputName == "boughtAtPrice") {
    iel = els.iBoughtAtPrice;
    lel = els.lBoughtAtPrice;
  } else if (inputName == "amountPurchased") {
    iel = els.iAmountPurchased;
    lel = els.lAmountPurchased;
  } else if (inputName == "sellAtPrice") {
    iel = els.iSellAtPrice;
    lel = els.lSellAtPrice;
  }

  if (iel && lel) {
    if (isError) {
      iel.classList.add("error");
      lel.innerHTML = "&nbsp- Only numbers are allowed";
    } else {
      iel.classList.remove("error");
      lel.innerHTML = "";
    }
  }
}

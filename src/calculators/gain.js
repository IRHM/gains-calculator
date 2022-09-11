import { checkForErrors } from "../help.js";

export const vars = [
  "Bought At Price",
  "Amount Purchased (in £)",
  "Sell At Price",
];

export function calc(ev, els) {
  let boughtAtPrice = Number(els.inputs[0].value);
  let amountPurchased = Number(els.inputs[1].value);
  let sellAtPrice = Number(els.inputs[2].value);

  if (ev && ev.target) checkForErrors(ev.target);

  if (boughtAtPrice && amountPurchased && sellAtPrice) {
    let sharesBought = amountPurchased / boughtAtPrice;
    let gainsRecieved = sellAtPrice * sharesBought - amountPurchased;

    els.results.innerHTML = `
      <span>Shares bought: ${sharesBought}</span>
      <span>Gains recieved: £${gainsRecieved}</span>
    `;
  } else {
    els.results.innerHTML = `
      <span>Shares bought: 0</span>
      <span>Gains recieved: £0</span>
    `;
  }
}

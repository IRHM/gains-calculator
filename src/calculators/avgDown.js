import { checkForErrors, formatNum } from "../help.js";

export const vars = [
  "Shares Owned",
  "Shares Owned Avg Price",
  "Shares To Buy",
  "Buy Price (in £)",
];

export function calc(ev, els) {
  const sharesOwned = Number(els.inputs[0].value);
  const sharesOwnedAvgPrice = Number(els.inputs[1].value);
  const sharesToBuy = Number(els.inputs[2].value);
  const buyPrice = Number(els.inputs[3].value);

  if (ev && ev.target) checkForErrors(ev.target);

  if (sharesOwned && sharesOwnedAvgPrice && sharesToBuy && buyPrice) {
    let totalShares = sharesOwned + sharesToBuy;
    let totalSpent = sharesOwnedAvgPrice * sharesOwned + buyPrice * sharesToBuy;
    let avg = totalSpent / totalShares;

    els.results.innerHTML = `
      <span>Average Price: £${formatNum(avg)}</span>
      <span>Total Shares: ${formatNum(totalShares)}</span>
      <span>Total Spent: £${formatNum(totalSpent)}</span>
    `;
  } else {
    els.results.innerHTML = `
      <span>Average Price: £0</span>
      <span>Total Shares: 0</span>
      <span>Total Spent: £0</span>
    `;
  }
}

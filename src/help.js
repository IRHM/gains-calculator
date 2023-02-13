/**
 * Check for errors in the input elements.
 * Currently only checks for if strings are entered and shows only numbers allowed error.
 */
export function checkForErrors(el) {
  if (el && el.value) !isNaN(el.value) ? iError(el, false) : iError(el, true);
  else iError(el, false);
}

function iError(input, isError = true) {
  let iel = input;
  let lel = input.offsetParent.querySelector("#err");

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

export function formatNum(num) {
  return num.toLocaleString(undefined, { minimumFractionDigits: 5 });
}

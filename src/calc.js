import { vars as gainVars, calc as gainCalc } from "./calculators/gain.js";
import {
  vars as avgDownVars,
  calc as avgDownCalc,
} from "./calculators/avgDown.js";

const calcsNav = document.getElementById("calcsNav");
const calcForm = document.getElementById("calcForm");

const calculators = [
  {
    name: "gain",
    func: gainCalc,
    vars: gainVars,
    els: {},
  },
  {
    name: "avgdown",
    func: avgDownCalc,
    vars: avgDownVars,
    els: {},
  },
];

function addCalcNavItem(name) {
  calcsNav.insertAdjacentHTML("beforeend", `<a href="#${name}">${name}</a>`);
}

function loadCalculator() {
  console.log(JSON.stringify(calculators));

  calculators.forEach((calc) => {
    addCalcNavItem(calc.name);
    calc.els.inputs = [];
    calcForm.insertAdjacentHTML(
      "beforeend",
      `<h1 id="${calc.name}">${calc.name}</h1>`
    );
    calc.vars.forEach((v) => {
      const label = document.createElement("label");
      label.setAttribute("for", v);
      const input = document.createElement("input");
      input.addEventListener("keyup", (ev) => calc.func(ev, calc.els));
      input.placeholder = "";
      label.insertAdjacentElement("beforeend", input);
      label.insertAdjacentHTML(
        "beforeend",
        `<span>
            <p>${v}</p>
            <p id="err"></p>
          </span>`
      );
      calcForm.insertAdjacentElement("beforeend", label);
      calc.els.inputs.push(input);
    });
    const resultsDiv = document.createElement("div");
    resultsDiv.classList.add("resultsDiv");
    calcForm.insertAdjacentElement("beforeend", resultsDiv);
    calc.els.results = resultsDiv;
  });
}

loadCalculator();

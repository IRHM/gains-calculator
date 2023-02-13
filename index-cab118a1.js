(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function f(e){e&&e.value&&isNaN(e.value)?u(e,!0):u(e,!1)}function u(e,n=!0){let a=e,s=e.offsetParent.querySelector("#err");a&&s&&(n?(a.classList.add("error"),s.innerHTML="&nbsp- Only numbers are allowed"):(a.classList.remove("error"),s.innerHTML=""))}function i(e){return e.toLocaleString(void 0,{minimumFractionDigits:5})}const m=["Bought At Price","Amount Purchased (in £)","Sell At Price"];function h(e,n){let a=Number(n.inputs[0].value),s=Number(n.inputs[1].value),t=Number(n.inputs[2].value);if(e&&e.target&&f(e.target),a&&s&&t){let r=s/a,o=t*r-s;n.results.innerHTML=`
      <span>Shares bought: ${i(r)}</span>
      <span>Gains recieved: £${i(o)}</span>
    `}else n.results.innerHTML=`
      <span>Shares bought: 0</span>
      <span>Gains recieved: £0</span>
    `}const g=["Shares Owned","Shares Owned Avg Price","Shares To Buy","Buy Price (in £)"];function v(e,n){const a=Number(n.inputs[0].value),s=Number(n.inputs[1].value),t=Number(n.inputs[2].value),r=Number(n.inputs[3].value);if(e&&e.target&&f(e.target),a&&s&&t&&r){let o=a+t,c=s*a+r*t,p=c/o;n.results.innerHTML=`
      <span>Average Price: £${i(p)}</span>
      <span>Total Shares: ${i(o)}</span>
      <span>Total Spent: £${i(c)}</span>
    `}else n.results.innerHTML=`
      <span>Average Price: £0</span>
      <span>Total Shares: 0</span>
      <span>Total Spent: £0</span>
    `}const b=document.getElementById("calcsNav"),l=document.getElementById("calcForm"),d=[{name:"gain",func:h,vars:m,els:{}},{name:"avgdown",func:v,vars:g,els:{}}];function y(e){b.insertAdjacentHTML("beforeend",`<a href="#${e}">${e}</a>`)}function L(){console.log(JSON.stringify(d)),d.forEach(e=>{y(e.name),e.els.inputs=[],l.insertAdjacentHTML("beforeend",`<h1 id="${e.name}">${e.name}</h1>`),e.vars.forEach(a=>{const s=document.createElement("label");s.setAttribute("for",a);const t=document.createElement("input");t.addEventListener("keyup",r=>e.func(r,e.els)),t.placeholder="",s.insertAdjacentElement("beforeend",t),s.insertAdjacentHTML("beforeend",`<span>
            <p>${a}</p>
            <p id="err"></p>
          </span>`),l.insertAdjacentElement("beforeend",s),e.els.inputs.push(t)});const n=document.createElement("div");n.classList.add("resultsDiv"),l.insertAdjacentElement("beforeend",n),e.els.results=n})}L();

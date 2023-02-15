(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function f(e){e&&e.value&&isNaN(e.value)?u(e,!0):u(e,!1)}function u(e,t=!0){let a=e,s=e.offsetParent.querySelector("#err");a&&s&&(t?(a.classList.add("error"),s.innerHTML="&nbsp- Only numbers are allowed"):(a.classList.remove("error"),s.innerHTML=""))}function i(e){return e.toLocaleString(void 0,{minimumFractionDigits:5})}const h=["Bought At Price","Amount Purchased (in £)","Sell At Price"];function g(e,t){let a=Number(t.inputs[0].value),s=Number(t.inputs[1].value),n=Number(t.inputs[2].value);if(e&&e.target&&f(e.target),a&&s&&n){let r=s/a,o=n*r-s;t.results.innerHTML=`
      <span>Shares bought: ${i(r)}</span>
      <span>Gains recieved: £${i(o)}</span>
    `}else t.results.innerHTML=`
      <span>Shares bought: 0</span>
      <span>Gains recieved: £0</span>
    `}const v=["Shares Owned","Shares Owned Avg Price","Shares To Buy","Buy Price (in £)"];function b(e,t){const a=Number(t.inputs[0].value),s=Number(t.inputs[1].value),n=Number(t.inputs[2].value),r=Number(t.inputs[3].value);if(e&&e.target&&f(e.target),a&&s&&n&&r){const o=a+n,p=n*r,l=s*a+r*n,m=l/o;t.results.innerHTML=`
      <span>Average Price: £${i(m)}</span>
      <span>Acquisition Cost: £${i(p)}</span>
      <span>Total Shares: ${i(o)}</span>
      <span>Total Spent: £${i(l)}</span>
    `}else t.results.innerHTML=`
      <span>Average Price: £0</span>
      <span>Acquisition Cost: £0</span>
      <span>Total Shares: 0</span>
      <span>Total Spent: £0</span>
    `}const y=document.getElementById("calcsNav"),c=document.getElementById("calcForm"),d=[{name:"gain",func:g,vars:h,els:{}},{name:"avgdown",func:b,vars:v,els:{}}];function A(e){y.insertAdjacentHTML("beforeend",`<a href="#${e}">${e}</a>`)}function L(){console.log(JSON.stringify(d)),d.forEach(e=>{A(e.name),e.els.inputs=[],c.insertAdjacentHTML("beforeend",`<h1 id="${e.name}">${e.name}</h1>`),e.vars.forEach(a=>{const s=document.createElement("label");s.setAttribute("for",a);const n=document.createElement("input");n.addEventListener("keyup",r=>e.func(r,e.els)),n.placeholder="",s.insertAdjacentElement("beforeend",n),s.insertAdjacentHTML("beforeend",`<span>
            <p>${a}</p>
            <p id="err"></p>
          </span>`),c.insertAdjacentElement("beforeend",s),e.els.inputs.push(n)});const t=document.createElement("div");t.classList.add("resultsDiv"),c.insertAdjacentElement("beforeend",t),e.els.results=t})}L();

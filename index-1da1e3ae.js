(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function d(e){e&&e.value&&isNaN(e.value)?i(e,!0):i(e,!1)}function i(e,n=!0){let a=e,s=e.offsetParent.querySelector("#err");a&&s&&(n?(a.classList.add("error"),s.innerHTML="&nbsp- Only numbers are allowed"):(a.classList.remove("error"),s.innerHTML=""))}const p=["Bought At Price","Amount Purchased (in £)","Sell At Price"];function m(e,n){let a=Number(n.inputs[0].value),s=Number(n.inputs[1].value),t=Number(n.inputs[2].value);if(e&&e.target&&d(e.target),a&&s&&t){let r=s/a,o=t*r-s;n.results.innerHTML=`
      <span>Shares bought: ${r}</span>
      <span>Gains recieved: £${o}</span>
    `}else n.results.innerHTML=`
      <span>Shares bought: 0</span>
      <span>Gains recieved: £0</span>
    `}const h=["Shares Owned","Shares Owned Avg Price","Shares To Buy","Buy Price (in £)"];function g(e,n){const a=Number(n.inputs[0].value),s=Number(n.inputs[1].value),t=Number(n.inputs[2].value),r=Number(n.inputs[3].value);if(e&&e.target&&d(e.target),a&&s&&t&&r){let o=a+t,l=s*a+r*t,f=l/o;n.results.innerHTML=`
      <span>Average Price: £${f}</span>
      <span>Total Shares: ${o}</span>
      <span>Total Spent: £${l}</span>
    `}else n.results.innerHTML=`
      <span>Average Price: £0</span>
      <span>Total Shares: 0</span>
      <span>Total Spent: £0</span>
    `}const v=document.getElementById("calcsNav"),u=document.getElementById("calcForm"),c=[{name:"gain",func:m,vars:p,els:{}},{name:"avgdown",func:g,vars:h,els:{}}];function b(e){v.insertAdjacentHTML("beforeend",`<a href="#${e}">${e}</a>`)}function y(){console.log(JSON.stringify(c)),c.forEach(e=>{b(e.name),e.els.inputs=[],u.insertAdjacentHTML("beforeend",`<h1 id="${e.name}">${e.name}</h1>`),e.vars.forEach(a=>{const s=document.createElement("label");s.setAttribute("for",a);const t=document.createElement("input");t.addEventListener("keyup",r=>e.func(r,e.els)),t.placeholder="",s.insertAdjacentElement("beforeend",t),s.insertAdjacentHTML("beforeend",`<span>
            <p>${a}</p>
            <p id="err"></p>
          </span>`),u.insertAdjacentElement("beforeend",s),e.els.inputs.push(t)});const n=document.createElement("div");n.classList.add("resultsDiv"),u.insertAdjacentElement("beforeend",n),e.els.results=n})}y();

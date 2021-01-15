"use strict";const e={url:"/"};class t extends class{constructor(e,t){this.request_interval=t,this.listenUserActions=()=>Promise.resolve(""),this.update=t=>e(t).then(this.updateContent)}show(e){return new Promise(((t,n)=>{const[s]=this.listenPopupCloseEvents(t,n);this.overlay=this.createOverlayElement(),this.popup=this.createPopupElement(this.getContent(e)),this.popup.addEventListener("keyup",s),this.overlay.appendChild(this.popup),document.body.appendChild(this.overlay),this.listenUserActions().then(t,n)}))}close(){this.overlay?.remove()}listenPopupCloseEvents(e,t){const n=()=>{document.removeEventListener("click",s),this.close(),t(new Error("No value"))},s=e=>{this.popup&&e.composedPath().includes(this.popup)||n()};document.addEventListener("click",s);const r=e=>{"Escape"===e.code&&(e.stopPropagation(),n())};return document.addEventListener("keyup",r),[r]}createOverlayElement(){const e=document.createElement("div");return e.setAttribute("style","justify-content: center;\n         align-items: center;\n         position: fixed;\n         z-index: 99999;\n         display: flex;\n         bottom: 0;\n         right: 0;\n         left: 0;\n         top: 0;\n         "),e}createPopupElement(e){const t=document.createElement("div");return t.setAttribute("style","\n         border: 1px solid #ccc;\n         border-radius: 5px;\n         position: absolute;\n         line-height: 1 !important;\n         background: #eee;\n         padding: 10px;\n         margin: auto;\n         width: 500px;\n         "),e.forEach((e=>{t.appendChild(e)})),t}}{constructor(){super(...arguments),this.updateContent=e=>{this.search_results&&(this.search_results.innerHTML=e.map(r).join("\n"))},this.listenUserActions=()=>new Promise((e=>{if(!this.search_field)return e("");let t="";this.search_field.addEventListener("keyup",(n=>{this.search_field.value!==t&&(t=this.search_field.value,clearTimeout(this.timeoutID),this.timeoutID=setTimeout((()=>{this.update(this.search_field.value).then((()=>{this.initHotKeys(e)}))}),this.request_interval))})),this.search_field?.focus()})).then((e=>(this.close(),e)))}getContent(){return this.search_field=document.createElement("input"),this.search_field.classList.add("QuickLink__SearchPopup__search_field"),this.search_field.setAttribute("data-replace","disable"),this.search_field.setAttribute("autofocus","true"),this.search_field.setAttribute("placeholder","Search links"),this.search_field.setAttribute("style","\n         margin: 0 !important;\n         height: 25px;\n         width: 100%;\n         box-shadow: inset 0 1px 3px #ddd;\n         letter-spacing: .01em;\n         border: 1px solid #ccc;\n         box-sizing: border-box;\n         border-radius: 3px;\n         text-transform: none;\n         padding: 4px; "),this.search_results=document.createElement("div"),this.search_results.classList.add("QuickLink__SearchPopup__results_list"),this.search_results.setAttribute("style","flex-direction: column;\n         cursor: pointer;\n         display:flex;\n      "),[this.search_field,this.search_results]}initHotKeys(e){this.search_results.addEventListener("click",(t=>{t.target.hasAttribute("data")&&(document.removeEventListener("keyup",o),e(t.target.getAttribute("data")||""))}));const t=Array.from(this.search_results.querySelectorAll("span"));if(0===t.length)return;let r=0;const i=()=>{t[r].parentElement?.setAttribute("style",s)};function o(s){if("Enter"===s.code)return document.removeEventListener("keyup",o),void e(t[r].getAttribute("data")||"");"ArrowDown"===s.code||"ArrowUp"===s.code?(s.preventDefault(),t[r].parentElement?.setAttribute("style",n),"ArrowDown"===s.code&&(r+=1),"ArrowUp"===s.code&&(r-=1),r>t.length-1&&(r-=t.length),r<0&&(r+=t.length),i()):document.removeEventListener("keyup",o)}i(),document.addEventListener("keyup",o)}}const n="\njustify-content: space-between;\npadding: 3px;\ndisplay: flex;\ncolor: #111;",s=`\n${n}\nfont-weight: 700;\nbackground: #ddd;`,r=({title:e,url:t})=>`<div style="${n}">\n      <span style="font-size: 16px; padding: 0 4px; flex-grow: 1;"\n            data="<a href='${t}'>${e}</a>">${e}</span>\n      <a href="${t}" target="blank">\n         <img\n            draggable="false"\n            role="img"\n            style="display: inline !important;\n               border: none !important;\n               box-shadow: none !important;\n               height: 18px !important;\n               width: 18px !important;\n               margin: 0 2px !important;\n               vertical-align: -0.1em !important;\n               background: none !important;\n               padding: 0 !important;"\n            alt="↗️"\n            src="https://s.w.org/images/core/emoji/13.0.1/svg/2197.svg">\n      </a>\n   </div>`;var i;!function(e){e.WordPress="WordPress"}(i||(i={}));i.WordPress;class o extends class{constructor(e){this.default_data=e,this.onerror=this.onerror.bind(this),this.onload=this.onload.bind(this),this.data=e}async load(t,n){return this.request_options={...e,...n},new Promise((e=>{chrome.runtime.sendMessage({url:this.request_options.url,options:this.request_options},e)})).then((e=>this.onload(t,e))).catch(this.onerror)}has(e){return e in this.data}onerror(e){this.data=this.default_data,console.error(e)}}{constructor(e,t){super(Object.fromEntries(e.map((({shortcut:e})=>[e,[]])))),this.request_interval=t,this.settings=Object.fromEntries(e.map((e=>[e.shortcut,e])))}get(e){return new t((t=>this.update(e,t).then((()=>this.data[e]))),this.request_interval).show("")}async update(e,t){return t?this.load(e,{url:a(this.settings[e],t)}):Promise.resolve()}onload(e,t){this.data[e]=t.map((({title:e,url:t})=>({title:e,url:t})))}static from(e,t){const n=e.filter((({sourceType:e})=>e===i.WordPress));return 0===n.length?null:new o(n,t)}}function a({url:e,per_page:t,pages:n},s){return`${e}/wp-json/wp/v2/search?search=${s}&per_page=${t}&page=${n}`}const l={sourceType:i.WordPress,url:"https://wordpress.org/support/",shortcut:"wpsupport:",per_page:5,pages:1};i.WordPress;class c{constructor(e){this.sources=e.filter((e=>null!==e))}async get(e){return this.sources.find((t=>t.has(e)))?.get(e)||Promise.reject(new Error("key is not found"))}}class u extends class{}{constructor(e){super(),this.el=null,e===document.querySelector("div.redactor_redactor.redactor_editor")&&(this.el=document.querySelector("textarea.redactor"))}apply(e){null!==this.el&&(this.el.value=e)}}const d={NB_SPACE:"&nbsp;",NEW_LINE:"<br>"},h={NB_SPACE:" ",NEW_LINE:"\n"},p=[" ",d.NB_SPACE,h.NB_SPACE],g=[...p,h.NEW_LINE,d.NEW_LINE,"("];function m(e){return p.reduce(((e,t)=>e.replace(new RegExp(t,"g")," ")),e).trimEnd()}function f(e){return v(h,d,e)}function v(e,t,n){return Object.entries(e).reduce(((e,[n,s])=>e.replace(new RegExp(s,"g"),t[n])),n)}function y(e){if(!e)return"";const t=m(function(e){return v(d,h,e).replace(/\u200b/g,"").replace(/<([a-z,\/]+)>/gi,"")}(e));return g.reduce(((e,t)=>e?.split(t).reverse().find((e=>""!==e))||""),t)}function E(e,t){const n=y(e);return t.get(n).then((t=>e.slice(0,e.lastIndexOf(n))+t+e.slice(e.lastIndexOf(n)+n.length))).catch((()=>e))}class _{constructor(e){this.el=e,this.value=""}applyHacks(e){e.forEach((e=>{e.apply(this.value)}))}}class w extends _{static from(e){return w.is(e)?new w(e):null}static is(e){return e?.isContentEditable}async replace(e){const t=window.getSelection()?.getRangeAt(0),n=await this.replaceNodeContent(e,t);this.el.innerHTML="string"==typeof n?n||this.el.innerHTML:await this.replaceSelectedContent(e,t),this.setCaret(),this.value=this.el.innerHTML}async replaceNodeContent(e,t){const n=t?.endContainer;if(n===this.el)return Promise.resolve(null);const s=n?.innerHTML||n?.nodeValue||n?.previousElementSibling?.innerHTML||n?.previousSibling?.nodeValue;if(!s||!m(s))return Promise.resolve("");const r=await E(s,e);if(r===s)return this.setCursorMarket(n,t),Promise.resolve(this.el.innerHTML);const i=!r.includes("{CURSOR}");return this.el.innerHTML.replace(f(s).trimEnd(),`${f(r).trimEnd()}${i?"{CURSOR}":""}`)}async replaceSelectedContent(e,t){t&&t.setStart(this.el,0);const n=await E(this.getSelection(t).innerHTML,e),s=!n.includes("{CURSOR}");return t&&t.deleteContents(),`${f(n.trimEnd())}${s?"{CURSOR}":""}${this.el.innerHTML}`}setCaret(){const e=x(this.el,"{CURSOR}"),t=e?.textContent?.indexOf("{CURSOR}")||0;e&&(e.textContent=e.textContent?.replace(new RegExp("{CURSOR}","gi"),"")||"");const n=document.createRange();e&&n.setStart(e,t),n.collapse(!0);const s=window.getSelection();s?.removeAllRanges(),s?.addRange(n)}setCursorMarket(e,t){if(e?.innerText){const n=this.getSelection(t).innerText.length||this.getSelection(t).innerHTML.length;e.innerText=e.innerText.substring(0,n+1)+"{CURSOR}"+e.innerText.substring(n+1)}else if(e?.nodeValue){const n=t?.endOffset||this.getSelection(t).innerText.length;e.nodeValue=e.nodeValue?.substring(0,n)+"{CURSOR}"+e.nodeValue?.substring(n)}}getSelection(e){e&&e.setStart(this.el,0);const t=e&&e.cloneContents(),n=document.createElement("div");return t&&n.appendChild(t),n}}function x(e,t){if(e.nodeValue?.includes(t))return e;const n=Array.from(e.childNodes);if(0===n.length)return null;for(const e of n){const n=x(e,t);if(n)return n}return null}class b extends _{static from(e){return b.is(e)?new b(e):null}async replace(e){const t=this.el.value.slice(0,this.el.selectionEnd||void 0),n=await E(t,e),s=this.el.value.slice(this.el.selectionEnd||void 0),r=!n.includes("{CURSOR}");this.el.value=`${n}${r?"{CURSOR}":""}${s}`,this.setCaret(),this.value=this.el.value}setCaret(){const e=this.el.value.indexOf("{CURSOR}");this.el.value=this.el.value.replace(new RegExp("{CURSOR}","g"),""),this.el.setSelectionRange(e,e)}static is(e){return null!=e&&1===e.nodeType&&(/textarea/i.test(e.nodeName)||/input/i.test(e.nodeName)&&/^(?:text|email|number|search|tel|url|password)$/i.test(e.type))}}const S={origins:[],request_interval:500};class C{constructor({onUpdate:e}={onUpdate:()=>{}}){this.applySettings=this.applySettings.bind(this),this.onUpdate=e}getSettings(){return new Promise(((e,t)=>{chrome.storage.sync.get("settings",(t=>{e(t&&t.settings)}))})).then((e=>e?JSON.parse(e):R))}async applySettings(e){if(!e)throw new Error("Settings formatted incorrectly");await this.saveSettings(e),this.onUpdate(e)}saveSettings(e){return new Promise(((t,n)=>{chrome.storage.sync.set({settings:e},t)}))}}const R={application:S,shortcuts:[l]};!async function(){const e=new C,t=await e.getSettings();if(!function({origins:e}=S){return 0===e.length||e.some((e=>location.href.includes(e)))}(t.application))return;const n=new c([o.from(t.shortcuts,t.application.request_interval)]);async function s(e){if("Space"!==e.code&&"Enter"!==e.key||"disable"===e.target.getAttribute("datas-replace"))return;const t=w.from(e.target)||b.from(e.target);null!==t&&(await t.replace(n),t.applyHacks([new u(t.el)]))}document.querySelectorAll("div.frame-content").forEach((e=>{e.addEventListener("keyup",s)})),document.addEventListener("keyup",s)}();

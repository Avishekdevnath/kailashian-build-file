!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),l=null,d=0,c=[],u=n(6);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function m(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertAt.before,n);n.insertBefore(e,r)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return y(e,t.attrs),m(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=d++;n=l||(l=b(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),m(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}t&&f(p(t,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var w,g=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports='<div class="nolt-modal">\n  <div class="nolt-overlay"></div>\n\n  <div class="nolt-loader-wrapper">\n    <div class="nolt-loader"></div>\n  </div>\n\n  <div class="nolt-dialog"></div>\n\n  <div class="nolt-close">\n    <div class="nolt-close-icon"></div>\n  </div>\n</div>\n'},function(t,e,n){(()=>{window.Nolt={initialized:!1},function(t){"loading"!==document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&t()})}(async()=>{if(!window.Nolt.initialized){window.Nolt.initialized=!0;try{(await Promise.resolve().then(n.bind(null,9))).default(window)}catch(t){console.error(`[nolt] ${t.message}`)}}})})()},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,'.nolt-feedback-button{--shadow-color:rgba(0,0,0,0.25);display:inline-flex;background:#fd6a65;border-radius:4px;color:#fff;font:normal normal 500 13px/1.2 Helvetica Neue,Arial,sans-serif;padding:6px 10px;white-space:nowrap;outline:0;text-decoration:none;text-shadow:.05em 0 var(--shadow-color),0 .05em var(--shadow-color),-.05em 0 var(--shadow-color),0 -.05em var(--shadow-color)}.nolt-feedback-button:active,.nolt-feedback-button:focus,.nolt-feedback-button:hover{background:#fc4e49}.nolt-feedback-button:active{box-shadow:inset 0 3px 7px rgba(0,0,0,.1)}.nolt-feedback-button:before{content:" ";display:inline-block;position:relative;top:1px;margin-right:6px;background:transparent 0 0 no-repeat;background-image:url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDEydjEySDB6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuOCIgZD0iTTEyIDBoMTJ2MTJIMTJ6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNiIgZD0iTTEyIDEyaDEydjEySDEyeiIvPjwvZz48L3N2Zz4=);background-size:13px 13px;height:13px;width:13px}',""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var o=n(8);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,'body.nolt-modal-open{overflow:hidden}.nolt-modal{z-index:2147483647;position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;padding:32px;visibility:hidden}@media (max-width:690px){.nolt-modal{padding:0}}.nolt-modal-open .nolt-modal{visibility:visible}.nolt-overlay{position:absolute;top:0;bottom:0;left:0;right:0;cursor:pointer;background-color:rgba(50,50,50,.9);opacity:0;visibility:hidden;transition:opacity .25s}.nolt-modal-open .nolt-overlay{opacity:1;visibility:visible}.nolt-dialog{position:relative;border-radius:8px;width:100%;height:100%;max-width:690px;max-height:800px;overflow:hidden;opacity:0;-webkit-transform:translateY(2rem);transform:translateY(2rem);transition:opacity .25s ease,-webkit-transform .25s ease;transition:opacity .25s ease,transform .25s ease;transition:opacity .25s ease,transform .25s ease,-webkit-transform .25s ease}@media (max-width:690px){.nolt-dialog{top:16px;bottom:0;left:0;right:0;border-radius:0;max-height:calc(100% - 32px);max-width:100%}}.nolt-dialog iframe{background:#fff;position:absolute;top:0;bottom:0;left:0;right:0}.nolt-modal-frame-loaded .nolt-dialog{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.nolt-loader-wrapper{position:absolute;top:0;bottom:0;left:0;right:0;z-index:0;display:flex;align-items:center;justify-content:center;pointer-events:none}.nolt-loader{width:6rem;height:2px;text-align:center;margin:0 auto;border-radius:2px;background-color:rgba(0,0,0,.4);box-shadow:0 0 1px 0 rgba(0,0,0,.2);position:relative;overflow:hidden;-webkit-transform:rotateY(90deg);transform:rotateY(90deg);transition:-webkit-transform .7s ease;transition:transform .7s ease;transition:transform .7s ease,-webkit-transform .7s ease;transition-delay:.25s}.nolt-loader:after{content:"";height:100%;width:5rem;position:absolute;-webkit-transform:translate(-7.5rem);transform:translate(-7.5rem);background-color:#f9f586;border-radius:2px;-webkit-animation:nolt-modal-loader .7s ease infinite;animation:nolt-modal-loader .7s ease infinite;-webkit-animation-delay:1.05s;animation-delay:1.05s}.nolt-modal-open .nolt-loader{-webkit-transform:rotateY(0);transform:rotateY(0)}@-webkit-keyframes nolt-modal-loader{0%,to{-webkit-transform:translate(-7.5rem);transform:translate(-7.5rem)}50%{-webkit-transform:translate(2.5rem);transform:translate(2.5rem)}}@keyframes nolt-modal-loader{0%,to{-webkit-transform:translate(-7.5rem);transform:translate(-7.5rem)}50%{-webkit-transform:translate(2.5rem);transform:translate(2.5rem)}}.nolt-close{position:fixed;right:32px;top:24px;opacity:.5;cursor:pointer;transition:opacity .1s ease;pointer-events:none;z-index:1}@media (max-width:850px){.nolt-close{right:4px;top:0;-webkit-transform:scale(.6);transform:scale(.6)}}@media (max-width:690px){.nolt-close{right:14px}}.nolt-close-icon{position:relative;width:32px;height:32px}.nolt-close-icon:after,.nolt-close-icon:before{position:absolute;left:15px;content:" ";height:33px;width:3px;background-color:#fff}.nolt-close-icon:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nolt-close-icon:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}',""])},function(t,e,n){"use strict";n.r(e);n(0);var o=n(3),r=n.n(o);n(7);let i,a,s,l,d=null;function c({target:t,url:e,skipTests:n=!1,newWindowOnCookieError:o=!1}={}){!function(){if(i=document.getElementsByTagName("body")[0],document.getElementsByClassName("nolt-modal").length)a=document.getElementsByClassName("nolt-modal")[0],s=document.getElementsByClassName("nolt-overlay")[0],l=document.getElementsByClassName("nolt-dialog")[0];else{const t=document.createElement("div");t.innerHTML=r.a,a=t.getElementsByClassName("nolt-modal")[0],s=t.getElementsByClassName("nolt-overlay")[0],l=t.getElementsByClassName("nolt-dialog")[0],i.appendChild(a),s.addEventListener("click",f,!0)}}(),t&&t.addEventListener("click",t=>{t.preventDefault(),i.classList.add("nolt-modal-open"),!0===n?u(e):function(t){if(null!==d)return d?Promise.resolve():Promise.reject();const e=`${new URL(t).origin}/cookiecheck/start`,n=document.createElement("iframe");return n.setAttribute("src",e),n.setAttribute("style","display:none;"),i.appendChild(n),new Promise((t,e)=>{const o=o=>(n.remove(),d=o,o?t():e()),r=setTimeout(()=>{o(!1)},5e3);window.addEventListener("message",t=>{clearTimeout(r),"nolt:cookies-supported"===t.data&&o(!0),"nolt:cookies-unsupported"===t.data&&o(!1)},!1)})}(e).then(()=>{u(e)}).catch(()=>{!0===o?(console.log("newWindowOnCookieError",o),window.open(e,"_blank")):function(t){u(`data:text/html;charset=utf-8,\n    <html> \n      <head>\n        <style type="text/css">  \n          * { font: 16px/1.2 sans-serif; } \n          div { padding: 20px; }\n        </style>\n      </head>\n      <body>\n        <div>\n          Your browser restricts third-party cookies.\n          <a href="${t.replace("/widget/","/")}" target="_blank">Open in new tab</a>\n        </div>\n      </body>\n    </html>\n  `)}(e)})})}function u(t){const e=document.createElement("iframe");e.setAttribute("src",t),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e.setAttribute("frameborder","0"),l.innerHTML="",l.appendChild(e),e.addEventListener("load",()=>{i.classList.add("nolt-modal-frame-loaded")},!0)}function f(){i.classList.remove("nolt-modal-open"),i.classList.remove("nolt-modal-frame-loaded"),l.innerHTML=""}const p={};function m(t,e){t||(p.DEFAULT=e),p[t]=e}function h(t){return function(t){try{return new URL(t),!0}catch(t){return!1}}(t)&&t.startsWith("http")}function b({name:t,url:e}){const n=p[t]||p.DEFAULT;const o=new URL(e),r=o.origin,i=`${r}/widget/${o.pathname.replace(/^\/+/,"")}`;return n?`${r}/sso/${n}?returnUrl=${i}`:i}const y={identify({jwt:t,widgets:e}){if(!t)throw new Error('[identify] "jwt" not provided');if(e&&!Array.isArray(e))throw new Error('[identify] "widgets" should be an array of strings');e?e.forEach(e=>m(e,t)):m(null,t)},init({name:t,url:e,selector:n,type:o="modal",target:r,skipTests:i=!1,newWindowOnCookieError:a=!1}){if(!e)throw new Error('[init] "url" not provided');if(!r&&!n)throw new Error('[init] "selector" not provided');if(!o)throw new Error('[init] "type" not provided');if(!h(e))throw new Error('[init] "url" is not a valid board URL');const s={target:r||document.querySelector(n),url:b({name:t,url:e}),skipTests:i,newWindowOnCookieError:a};if(!s.target)throw new Error(`[init] Element not found: "${n}". Please check your selector.`);if("plain"===o)return function({target:t,url:e,skipTests:n=!1,newWindowOnCookieError:o=!1}){t.setAttribute("href",e.replace("/widget/","/"))}(s);if("modal"===o)return c(s);throw new Error(`Type "${o}" not supported`)},openModal({name:t,url:e}){if(!e)throw new Error('[openModal] "url" not provided');if(!h(e))throw new Error('[openModal] "url" is not a valid board URL');!function({url:t}){u(t)}({url:b({name:t,url:e})})}};function v(t){const e=[...t];e.sort((t,e)=>"identify"===t.method&&"identify"===e.method?0:"identify"===t.method?-1:"identify"===e.method?1:0),e.forEach(w)}function w(t){try{const e=y[t.method];if(!e)throw new Error(`Method "${t.method}" not supported`);e(t.payload)}catch(t){console.error(`[nolt] ${t.message}`)}}const g=["","true","button","modal"];function x(t){const e=t.href;if(!e)throw new Error(`"data-nolt" found but "href" is missing: ${t.innerText}`);if(!h(e))throw new Error(`href contains an invalid board URL: "${t.href}".`+' Please provide your board URL in the following format: "https://your-board.nolt.io"')}function k(t){c();const e=function(t,e,n){let o;return(...r)=>{const i=this;clearTimeout(o),o=setTimeout(()=>{o=null,n||t.apply(i,r)},e),n&&!o&&t.apply(i,r)}}(v,50),n=(t.noltQueue||[]).map(t=>({method:t[0],payload:t[1]})).concat(function(t){const e=[];return t.document.querySelectorAll("a[data-nolt]").forEach(t=>{const e=t.dataset.nolt;if(!g.includes(e))throw new Error(`Invalid "data-nolt" value: "${e}"`)}),t.document.querySelectorAll("a[data-nolt=''], a[data-nolt='true']").forEach(t=>{x(t);const n={type:"plain",url:t.href,target:t};e.push({method:"init",payload:n})}),t.document.querySelectorAll("a[data-nolt='button']").forEach(t=>{x(t);const n={type:"modal",url:t.href,target:t};t.classList.add("nolt-feedback-button"),e.push({method:"init",payload:n})}),t.document.querySelectorAll("a[data-nolt='modal']").forEach(t=>{x(t);const n={type:"modal",url:t.href,target:t};e.push({method:"init",payload:n})}),e}(t));e(n),t.nolt=((t,o)=>{n.push({method:t,payload:o}),e(n)})}n.d(e,"default",function(){return k})}]);
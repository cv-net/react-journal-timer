!function(A){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return A[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},t.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var o in A)t.d(n,o,function(e){return A[e]}.bind(null,o));return n},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=4)}([,function(A,e,t){var n,o,i;!function(t,s){"use strict";o=[],void 0===(i="function"==typeof(n=function(){return function(A){function e(A){A.icon=A.hasOwnProperty("icon")?A.icon:"",A.visible=A.hasOwnProperty("visible")?A.visible:"hover",A.placement=A.hasOwnProperty("placement")?A.placement:"right",A.ariaLabel=A.hasOwnProperty("ariaLabel")?A.ariaLabel:"Anchor",A.class=A.hasOwnProperty("class")?A.class:"",A.base=A.hasOwnProperty("base")?A.base:"",A.truncate=A.hasOwnProperty("truncate")?Math.floor(A.truncate):64,A.titleText=A.hasOwnProperty("titleText")?A.titleText:""}function t(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}this.options=A||{},this.elements=[],e(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var n,o,i,s,r,c,a,l,u,h,d,p,f=[];if(e(this.options),"touch"===(d=this.options.visible)&&(d=this.isTouchDevice()?"always":"hover"),A||(A="h2, h3, h4, h5, h6"),0===(n=t(A)).length)return this;for(function(){if(null!==document.head.querySelector("style.anchorjs"))return;var A,e=document.createElement("style");e.className="anchorjs",e.appendChild(document.createTextNode("")),void 0===(A=document.head.querySelector('[rel="stylesheet"], style'))?document.head.appendChild(e):document.head.insertBefore(e,A);e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",e.sheet.cssRules.length),e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",e.sheet.cssRules.length),e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",e.sheet.cssRules.length),e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }',e.sheet.cssRules.length)}(),o=document.querySelectorAll("[id]"),i=[].map.call(o,(function(A){return A.id})),r=0;r<n.length;r++)if(this.hasAnchorJSLink(n[r]))f.push(r);else{if(n[r].hasAttribute("id"))s=n[r].getAttribute("id");else if(n[r].hasAttribute("data-anchor-id"))s=n[r].getAttribute("data-anchor-id");else{u=l=this.urlify(n[r].textContent),a=0;do{void 0!==c&&(u=l+"-"+a),c=i.indexOf(u),a+=1}while(-1!==c);c=void 0,i.push(u),n[r].setAttribute("id",u),s=u}(h=document.createElement("a")).className="anchorjs-link "+this.options.class,h.setAttribute("aria-label",this.options.ariaLabel),h.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(h.title=this.options.titleText),p=document.querySelector("base")?window.location.pathname+window.location.search:"",p=this.options.base||p,h.href=p+"#"+s,"always"===d&&(h.style.opacity="1"),""===this.options.icon&&(h.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(h.style.lineHeight="inherit")),"left"===this.options.placement?(h.style.position="absolute",h.style.marginLeft="-1em",h.style.paddingRight="0.5em",n[r].insertBefore(h,n[r].firstChild)):(h.style.paddingLeft="0.375em",n[r].appendChild(h))}for(r=0;r<f.length;r++)n.splice(f[r]-r,1);return this.elements=this.elements.concat(n),this},this.remove=function(A){for(var e,n,o=t(A),i=0;i<o.length;i++)(n=o[i].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(o[i]))&&this.elements.splice(e,1),o[i].removeChild(n));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){return this.options.truncate||e(this.options),A.trim().replace(/\'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&(" "+A.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,t=A.lastChild&&(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return e||t||!1}}})?n.apply(e,o):n)||(A.exports=i)}()},,,function(A,e,t){"use strict";t.r(e);var n=t(1),o=t.n(n);var i=()=>{const A=document.querySelector(".js-share-options");let e=document.location.href;const t=document.querySelector("link[rel=canonical]");e=null==t?void 0:t.href,navigator.share?navigator.share({title:document.title,url:e}):null==A||A.classList.toggle("is-visible"),document.addEventListener("click",e=>{(null==e?void 0:e.target).matches(".sharing *")||null==A||A.classList.remove("is-visible")})};var s=()=>{if(window.IntersectionObserver){const A=new IntersectionObserver(A=>{A.forEach(A=>{const e=document.querySelector(".js-related");A.isIntersecting?null==e||e.classList.add("is-visible"):null==e||e.classList.remove("is-visible")})},{rootMargin:"0px 0px 500px",threshold:0}),e=document.querySelector(".js-after-section");e&&A.observe(e)}};var r=()=>{document.addEventListener("click",A=>{A.target.classList.contains("js-track-click")&&function(A){const e=A.target,{track:t}=e.dataset;window.plausible&&window.plausible(t)}(A)})};var c=function(){if(navigator&&navigator.clipboard){[...document.querySelectorAll("pre.chroma")].forEach(A=>{const e=A.parentElement,{nextElementSibling:t}=A;t&&t.matches(".js-copy")||e&&e.insertAdjacentHTML("beforeend",'<button class="copy-code js-copy">Copy</button>')});[...document.querySelectorAll(".js-copy")].forEach(A=>{const e=A;e.addEventListener("click",()=>{e.blur();const A=e.previousElementSibling;A&&navigator.clipboard.writeText(A.innerText).then(()=>{e.innerText="Copied!",setTimeout(()=>{e.innerText="Copy"},3e3)}).catch(()=>{e.innerText="Error",setTimeout(()=>{e.innerText="Copy"},3e3)})})})}};document.addEventListener("turbolinks:load",()=>{r(),c();const A=new o.a;A.options={placement:"right"},A.add("article h2"),A.add("article h3"),s();const e=document.querySelector(".js-load-comments");null==e||e.addEventListener("click",()=>{!function(){const A=document.querySelector(".js-comments-section"),e=document.querySelector(".js-disqus");null==A||A.classList.remove("hidden");const t=document,n=t.createElement("script");n.src="//freshman-tech.disqus.com/embed.js",n.setAttribute("data-timestamp","".concat(+new Date)),(t.head||t.body).appendChild(n),null==e||e.insertAdjacentHTML("beforeend",'\n    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>\n    <script id="dsq-count-scr" src="//freshman-tech.disqus.com/count.js"><\/script>\n  ')}(),e.classList.add("hidden")}),function(){const A=document.getElementsByTagName("iframe");Array.from(A).forEach(A=>{const{src:e}=A.dataset;e&&A.setAttribute("src",e)})}();const t=document.querySelector(".js-share-button");null==t||t.addEventListener("click",A=>{A.preventDefault(),i()});Array.from(document.querySelectorAll(".js-play-overlay")).forEach(A=>{A.addEventListener("click",A=>{const e=null==A?void 0:A.target,t=e.previousElementSibling;if(t.paused){const A=e.parentElement;null==A||A.classList.add("playing"),t.play()}})});Array.from(document.querySelectorAll(".js-gif-video")).forEach(A=>{A.addEventListener("click",e=>{if(!A.paused){A.pause();const t=(null==e?void 0:e.target).parentElement;null==t||t.classList.remove("playing")}})})})}]);
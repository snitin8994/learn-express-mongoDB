parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZX4Z":[function(require,module,exports) {
"use strict";var e=1;function t(){return(e=(9301*e+49297)%233280)/233280}function n(t){e=t}module.exports={nextValue:t,seed:n};
},{}],"BhiS":[function(require,module,exports) {
"use strict";var e,t,r,n=require("./random/random-from-seed"),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function o(){r=!1}function i(t){if(t){if(t!==e){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var r=t.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(r.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+r.join(", "));e=t,o()}}else e!==u&&(e=u,o())}function s(t){return i(t),e}function a(e){n.seed(e),t!==e&&(o(),t=e)}function h(){e||i(u);for(var t,r=e.split(""),o=[],s=n.nextValue();r.length>0;)s=n.nextValue(),t=Math.floor(s*r.length),o.push(r.splice(t,1)[0]);return o.join("")}function f(){return r||(r=h())}function l(e){return f()[e]}function c(){return e||u}module.exports={get:c,characters:s,seed:a,lookup:l,shuffled:f};
},{"./random/random-from-seed":"ZX4Z"}],"6l1L":[function(require,module,exports) {
"use strict";var o,t="object"==typeof window&&(window.crypto||window.msCrypto);o=t&&t.getRandomValues?function(o){return t.getRandomValues(new Uint8Array(o))}:function(o){for(var t=[],r=0;r<o;r++)t.push(Math.floor(256*Math.random()));return t},module.exports=o;
},{}],"pjkr":[function(require,module,exports) {
module.exports=function(t,r,e){for(var a=(2<<Math.log(r.length-1)/Math.LN2)-1,h=Math.ceil(1.6*a*e/r.length),l="";;)for(var n=t(h),o=0;o<h;o++){var f=n[o]&a;if(r[f]&&(l+=r[f]).length===e)return l}};
},{}],"9ZVM":[function(require,module,exports) {
"use strict";var r=require("./alphabet"),e=require("./random/random-byte"),t=require("nanoid/format");function a(a){for(var o,n=0,u="";!o;)u+=t(e,r.get(),1),o=a<Math.pow(16,n+1),n++;return u}module.exports=a;
},{"./alphabet":"BhiS","./random/random-byte":"6l1L","nanoid/format":"pjkr"}],"HW8S":[function(require,module,exports) {
"use strict";var e,r,t=require("./generate"),a=require("./alphabet"),o=1459707606518,u=6;function n(a){var n="",i=Math.floor(.001*(Date.now()-o));return i===r?e++:(e=0,r=i),n+=t(u),n+=t(a),e>0&&(n+=t(e)),n+=t(i)}module.exports=n;
},{"./generate":"9ZVM","./alphabet":"BhiS"}],"DKYU":[function(require,module,exports) {
"use strict";var e=require("./alphabet");function t(t){return!(!t||"string"!=typeof t||t.length<6)&&!new RegExp("[^"+e.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}module.exports=t;
},{"./alphabet":"BhiS"}],"AzWI":[function(require,module,exports) {
"use strict";module.exports=0;
},{}],"XQNt":[function(require,module,exports) {
"use strict";var e=require("./alphabet"),r=require("./build"),u=require("./is-valid"),t=require("./util/cluster-worker-id")||0;function o(r){return e.seed(r),module.exports}function s(e){return t=e,module.exports}function i(r){return void 0!==r&&e.characters(r),e.shuffled()}function d(){return r(t)}module.exports=d,module.exports.generate=d,module.exports.seed=o,module.exports.worker=s,module.exports.characters=i,module.exports.isValid=u;
},{"./alphabet":"BhiS","./build":"HW8S","./is-valid":"DKYU","./util/cluster-worker-id":"AzWI"}],"JEO+":[function(require,module,exports) {
"use strict";module.exports=require("./lib/index");
},{"./lib/index":"XQNt"}],"Focm":[function(require,module,exports) {
var e,t,a=require("shortid"),i=document.querySelector(".additem-input"),r=document.querySelector(".list-container"),n=document.querySelector(".filter"),s=document.querySelector(".overlay"),c="",d=0,o=function(e){return document.createElement(e)},l=function(e,t){return Object.keys(t).forEach(function(a){e.setAttribute(a,t[a])}),e},u=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t.shift();t.forEach(function(e){i.appendChild(e)})},v=function(e){var t=e.currentTarget,a=t.parentNode,i=t.nextElementSibling,r=t.querySelector(".list__tick");"true"===t.dataset.checked?(t.dataset.checked="false",B(a.id,"checked","false"),"Completed"===c&&h(null,"Completed",!0)):(t.dataset.checked="true",B(a.id,"checked","true"),"Active"===c&&h(null,"Active",!0)),i.classList.toggle("taskdone"),r.classList.toggle("hide")},h=function(t,a){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=a||t.target.textContent;if(a||t.target.classList.contains("filter__item")){c=n;var s=Array.from(r.children);switch(i||(e&&e.classList.remove("tabstyle"),t.target.classList.add("tabstyle"),e=t.target),n){case"All":for(var d=0,o=s;d<o.length;d++){var l=o[d];l.classList.contains("hide")&&l.classList.remove("hide")}break;case"Active":for(var u=0,v=s;u<v.length;u++){var h=v[u];"true"===h.querySelector(".list__checkbox").dataset.checked?h.classList.add("hide"):h.classList.remove("hide")}break;case"Completed":for(var f=0,_=s;f<_.length;f++){var m=_[f];"false"===m.querySelector(".list__checkbox").dataset.checked?m.classList.add("hide"):m.classList.remove("hide")}}}},f=function(e,t){var a=o("div");a.innerHTML="&#10003","true"===t?a.setAttribute("class","list__tick"):a.setAttribute("class","list__tick hide"),e.appendChild(a)},_=function(e,t,a,i){var r=a.querySelector(".list__checkbox"),n=a.querySelector(".list__deleteButton"),s=a.querySelector(".list__task"),c=a.querySelector(".note");s.innerText=e.value,1===i&&(s.innerText=t),B(a.id,"text",s.innerText),s.classList.toggle("hide"),n.classList.toggle("hide"),r.classList.toggle("hide"),c.classList.toggle("hide"),a.removeChild(e)},m=function(e,t,a){var i=0;if(!e.target.closest(".list__edit")){""===a.value.trim()&&(i=1);var r=a.parentNode;r&&_(a,t,r,i)}},g=function(e,t){var a=0;if("Enter"===e.key){var i=e.target;""===i.value.trim()&&(a=1);var r=i.parentNode;_(i,t,r,a)}},L=function(e){if("P"===e.target.tagName){var t=e.target.parentNode,a=e.target,i=t.querySelector(".list__checkbox"),r=t.querySelector(".list__deleteButton"),n=t.querySelector(".note");a.classList.toggle("hide"),r.classList.toggle("hide"),i.classList.toggle("hide"),n.classList.toggle("hide");var s=o("input");l(s,{class:"list__edit",value:a.innerText,type:"text"}),t.appendChild(s),s.focus();var c=s.value;s.value="",s.value=c,s.addEventListener("keydown",function(e){return g(e,c)}),document.addEventListener("click",function(e){return m(e,c,s)})}},k=function(e){var t=e.target.parentNode,a=e.target,i=t.querySelector(".modal__saveButton"),r=t.querySelector(".modal__textarea"),n=t.querySelector(".modal__text");r.classList.remove("hide"),r.focus(),r.value="",r.value=n.textContent,i.classList.remove("hide"),n.classList.add("hide"),a.classList.add("hide")},y=function(e){var t=e.target.parentNode,a=t.parentNode.parentNode,i=e.target,r=t.querySelector(".modal__editButton"),n=t.querySelector(".modal__textarea"),s=t.querySelector(".modal__text");""!==n.value.trim()&&(s.textContent=n.value,B(a.id,"note",s.textContent),n.classList.add("hide"),i.classList.add("hide"),s.classList.remove("hide"),r.classList.remove("hide"))},p=function(e){var a=e.target;if(e.target.classList.contains("note")){var i=a.querySelector(".modal");t=i.id,i.classList.remove("hide");var r=i.querySelector(".modal__textarea");r.classList.contains("hide")||r.focus(),s.classList.remove("hide")}},x=function(e,t){var a="",i="",r="",n="";""===t?(r="hide",n="hide"):(a="hide",i="hide");var s=o("textarea");s.setAttribute("class","modal__textarea ".concat(a));var c=o("button");c.setAttribute("class","modal__button modal__saveButton ".concat(i)),c.textContent="SAVE",c.addEventListener("click",y);var d=o("button");d.setAttribute("class","modal__button modal__editButton ".concat(n)),d.textContent="EDIT",d.addEventListener("click",k);var l=o("p");""!==t&&(l.textContent=t),l.setAttribute("class","modal__text ".concat(r)),u(e,s,l,c,d)},b=function(e){var t=o("div");return t.setAttribute("class","modal hide"),t.setAttribute("id",a.generate()),x(t,e),t},S=function(e){var t=o("div");t.setAttribute("class","note"),t.innerText="+",t.addEventListener("click",p);var a=b(e);return t.appendChild(a),t},q=function(e){var t=o("div");return t.dataset.checked=e.checked,l(t,{class:"list__checkbox"}),f(t,e.checked),t.addEventListener("click",v),t},C=function(e){var t=o("p");t.innerText=e.text;var a="list__task";return"true"===e.checked&&(a+=" taskdone"),l(t,{class:a}),t},E=function(e){var t=o("div");return t.innerHTML="&#9747",l(t,{class:"list__deleteButton"}),t.addEventListener("click",function(){j(e.id),r.removeChild(e),0===--d&&n.classList.add("hide")}),t},A=function(e){var t=o("li");l(t,{class:"list",id:e.id});var a=q(e),i=C(e),s=E(t),c=S(e.note);t.addEventListener("dblclick",L),u(t,a,i,c,s),r.appendChild(t),d++,n.classList.contains("hide")&&n.classList.remove("hide")},T=function(e){if("Enter"===e.key){var t=i.value;if(""!==t.trim()){i.value="";var r={text:t,checked:"false",id:a.generate(),note:""};A(r),O(r),"Completed"===c&&h(null,"Completed",!0)}}},N=function(e){var a=document.getElementById(t),i=e.target;a.classList.add("hide"),i.classList.add("hide")},B=function(e,t,a){},O=function(e){fetch("/data/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},j=function(e){fetch("/data/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})})},w=function(){fetch("/data").then(function(e){return e.json()}).then(function(e){var t=e.data;console.log(t),t.forEach(function(e){return T(e)})})};w(),s.addEventListener("click",N),n.addEventListener("click",h),i.addEventListener("keydown",T);
},{"shortid":"JEO+"}]},{},["Focm"], null)
//# sourceMappingURL=todo-json.1c052fb6.js.map
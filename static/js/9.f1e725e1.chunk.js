(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[9],{192:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(10),a=n(0),c=n(9),o=(n(60),n(67)),i=n(62),u=n(77);n(192);function l(){var e=a.useState(""),t=Object(r.a)(e,2),n=t[0],l=t[1],s=a.useState(u.a.directors),f=Object(r.a)(s,2),m=f[0],d=f[1];return a.useEffect((function(){d(u.a.directors.filter((function(e){var t=Object(o.f)(e),r=Object(o.f)(n);return t.includes(r)})))}),[n]),document.title="".concat(u.a.directors.length," Directors - MediaSheetViewer"),m?a.createElement(a.Fragment,null,a.createElement("div",{className:"directors"},a.createElement("div",{className:"directors-head"},a.createElement(i.a,{value:n,setValue:l,placeholder:"examples: kubrick | ridley scott | melies"})),a.createElement("div",{className:"directors-body"},a.createElement("div",{className:"list-items"},a.createElement("ul",null,m.map((function(e){return a.createElement("li",{key:e},a.createElement(c.b,{to:"/creators/".concat(e)},e))}))))))):null}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(11);var a=n(15);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(10),a=n(0);n(61);function c(e){var t=e.value,n=e.setValue,c=e.placeholder,o=a.useState(t),i=Object(r.a)(o,2),u=i[0],l=i[1];a.useEffect((function(){l(t)}),[t]),function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(u)}),500,[u]);return a.createElement(a.Fragment,null,a.createElement("div",{className:"searchform"},a.createElement("label",{className:"input-label",htmlFor:"searchFormInput"},"Filter:"),a.createElement("input",{type:"text",id:"searchFormInput",placeholder:c,value:u,onChange:function(e){return l(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){l("")}},"Clear")))}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(15);function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c,o=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){i=!0,c=e},f:function(){try{o||null==a.return||a.return()}finally{if(i)throw c}}}}}}]);
//# sourceMappingURL=9.f1e725e1.chunk.js.map
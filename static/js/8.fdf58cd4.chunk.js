(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[8],{56:function(t,e,r){t.exports=r(57)},57:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof u?e:u,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l={};function u(){}function f(){}function h(){}var m={};m[a]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(L([])));d&&d!==e&&r.call(d,a)&&(m=d);var v=h.prototype=u.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new g(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;b(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},58:function(t,e,r){},61:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var n=r(0),a=r(2),o=r(9),i=r(56),c=r.n(i);function s(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){s(o,n,a,i,c,"next",t)}function c(t){s(o,n,a,i,c,"throw",t)}i(void 0)}))}}var u=r(15);var f=r(43),h=r(11),m=r(47),p=(r(58),{films:"director",tv:"creator",games:"developer"});function d(){var t=Object(a.f)().pathname.split("/")[1],e=Object(a.g)().id,r="creators"===t?m.a.creators.find((function(t){return t.name===e})):m.a[t].find((function(t){return t.id===Number(e)})),i=r?r.title?r.title:r.name:null,s=Object(f.b)(r);document.title="".concat(i," ").concat(Object(f.d)(r)?s:""," - ").concat(Object(f.a)(t)," - MediaSheetViewer");var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(n.useState)(null),a=Object(u.a)(r,2),o=a[0],i=a[1],s=Object(n.useState)(null),f=Object(u.a)(s,2),h=f[0],m=f[1],p=Object(n.useState)(!1),d=Object(u.a)(p,2),v=d[0],y=d[1];return Object(n.useEffect)((function(){(function(){var r=l(c.a.mark((function r(){var n,a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return y(!0),r.prev=1,r.next=4,fetch(t,e);case 4:return n=r.sent,r.next=7,n.json();case 7:a=r.sent,i(a),y(!1),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(1),console.error("useFetch error:",r.t0),m(r.t0);case 16:case"end":return r.stop()}}),r,null,[[1,12]])})));return function(){return r.apply(this,arguments)}})()()}),[t,e]),{response:o,error:h,isLoading:v}}("https://en.wikipedia.org/api/rest_v1/page/summary/".concat(i));if(!r)return"".concat(t," not found with ").concat("creators"===t?"name":"id"," ").concat(e);if(!d||!d.response||d.isLoading)return n.createElement(h.a,null);if(d.error)return"Error: ".concat(d.error.message);var v=d.response&&"disambiguation"!==d.response.type?d.response:{},y=v.originalimage?v.originalimage.source:v.thumbnail?v.thumbnail.source:null,g=Object(f.c)(r.name,m.a);return n.createElement(n.Fragment,null,n.createElement("div",{className:"media"},n.createElement("div",{className:"details-left"},n.createElement("div",{className:"media-header"},n.createElement("h3",{className:"media-title"},i),r.translatedTitle?n.createElement("div",{className:"media-translation"},r.translatedTitle):null,s?n.createElement("span",{className:"media-year"},s):null),Object(f.d)(t)?n.createElement("div",{className:"media-creators"},r[p[t]].map((function(t,e){return n.createElement("span",{key:t},n.createElement("span",null,e>0?" & ":null),n.createElement("span",null,n.createElement(o.b,{to:"/creators/".concat(t)},t)))}))):null,Object(f.d)(t)?n.createElement("div",{className:"media-genre"},r.genre.map((function(t,e){return n.createElement("span",{key:t},n.createElement("span",null,e>0?" / ":null),n.createElement("span",null,t))}))):null,g?n.createElement("div",{className:"media-works"},g.map((function(t){return n.createElement("span",{key:t.id},n.createElement("span",{className:"work-name"},n.createElement(o.b,{to:"/".concat(t.type).concat("tv"===t.type?"":"s","/").concat(t.id)},t.title)),n.createElement("span",{className:"work-year"},Object(f.b)(t)))}))):null,r.system?n.createElement("div",{className:"media-system"},r.system):null,r.franchise?n.createElement("div",{className:"media-franchise"},r.franchise):null,v?n.createElement("div",{className:"media-summary"},v.extract):null),n.createElement("div",{className:"details-right"},n.createElement("div",{className:"media-poster"},y?n.createElement("img",{className:"media-poster-image",src:y,alt:"poster"}):null))))}}}]);
//# sourceMappingURL=8.fdf58cd4.chunk.js.map
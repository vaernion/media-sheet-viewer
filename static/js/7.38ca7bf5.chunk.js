(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[7],{45:function(t,e,r){t.exports=r(46)},46:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var p={};p[o]=function(){return this};var m=Object.getPrototypeOf,d=m&&m(m(L([])));d&&d!==e&&r.call(d,o)&&(p=d);var v=h.prototype=s.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},48:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(45),o=r.n(n);function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c=r(19),u=r(0);function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(u.useState)(null),n=Object(c.a)(r,2),i=n[0],l=n[1],s=Object(u.useState)(null),f=Object(c.a)(s,2),h=f[0],p=f[1],m=Object(u.useState)(!1),d=Object(c.a)(m,2),v=d[0],y=d[1];return Object(u.useEffect)((function(){(function(){var r=a(o.a.mark((function r(){var n,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return y(!0),r.prev=1,r.next=4,fetch(t,e);case 4:return n=r.sent,r.next=7,n.json();case 7:i=r.sent,l(i),y(!1),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(1),console.error("useFetch error:",r.t0),p(r.t0);case 16:case"end":return r.stop()}}),r,null,[[1,12]])})));return function(){return r.apply(this,arguments)}})()()}),[t,e]),{response:i,error:h,isLoading:v}}},53:function(t,e,r){},58:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r(0),o=r(1),i=r(14),a=r(48),c=r(15),u=r(20);r(53);function l(){var t=n.useContext(u.a).films,e=Object(o.g)().filmId,r=t.find((function(t){return t.id===Number(e)})),l=r?r.title:null,s=Object(a.a)("https://api.themoviedb.org/3/search/movie?api_key=".concat("15d2ea6d0dc1d476efbca3eba2b9bbfb","&query=").concat(l));if(!r)return"Film not found with id ".concat(e);if(!s||!s.response||s.isLoading)return n.createElement(c.a,null);if(s.error)return"Error: ".concat(s.error.message);var f=s.response.results[0]?s.response.results[0]:null,h=f&&f.poster_path?"http://image.tmdb.org/t/p/w500/".concat(f.poster_path):null;return document.title="".concat(r.title," (").concat(r.year,") - Film - MediaSheetViewer"),n.createElement(n.Fragment,null,n.createElement("div",{className:"film"},n.createElement("div",{className:"left"},n.createElement("div",{className:"film-header"},n.createElement("h3",{className:"film-title"},r.title),r.translatedTitle?n.createElement("div",{className:"film-translation"},r.translatedTitle):null,n.createElement("span",{className:"film-year"},"(",r.year,")")),n.createElement("div",{className:"film-director"},"Director:"," ",r.director.map((function(t,e){return n.createElement("span",{key:t},n.createElement("span",null,e>0?" & ":null),n.createElement("span",null,n.createElement(i.b,{to:"/directors/".concat(t)},t)))}))),n.createElement("div",{className:"film-genre"},r.genre.map((function(t,e){return n.createElement("span",{key:t},n.createElement("span",null,e>0?" / ":null),n.createElement("span",null,t))}))),n.createElement("div",{className:"film-franchise"},r.franchise),f?n.createElement("div",{className:"film-summary"},f.overview):null),n.createElement("div",{className:"right"},n.createElement("div",{className:"film-poster"},h?n.createElement("img",{className:"film-poster-image",src:h,alt:"poster"}):null))))}}}]);
//# sourceMappingURL=7.38ca7bf5.chunk.js.map
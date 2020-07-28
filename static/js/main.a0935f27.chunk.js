(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[2],{17:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var a=n(10),r=n(2),c=n(0),l={count:0,filterFilms:"",filterTv:"",filterGames:"",sortFilms:"sortTitle",sortTv:"sortTitle",sortGames:"sortTitle",sortReverseFilms:!1,sortReverseTv:!1,sortReverseGames:!1},m=function(e,t){switch(t.type){case"resetCount":return 0;case"increment":return e+1;case"decrement":return e-1;default:return e}},s=function(e,t){switch(t.type){case"reset":return l;case"resetCount":case"increment":case"decrement":return Object(r.a)(Object(r.a)({},e),{},{count:m(e.count,t)});case"FILTER_FILMS":return Object(r.a)(Object(r.a)({},e),{},{filterFilms:t.payload});case"FILTER_TV":return Object(r.a)(Object(r.a)({},e),{},{filterTv:t.payload});case"FILTER_GAMES":return Object(r.a)(Object(r.a)({},e),{},{filterGames:t.payload});case"SORT_FILMS":return Object(r.a)(Object(r.a)({},e),{},{sortFilms:t.payload});case"SORT_TV":return Object(r.a)(Object(r.a)({},e),{},{sortTv:t.payload});case"SORT_GAMES":return Object(r.a)(Object(r.a)({},e),{},{sortGames:t.payload});case"SORT_REVERSE_FILMS":return Object(r.a)(Object(r.a)({},e),{},{sortReverseFilms:!e.sortReverseFilms});case"SORT_REVERSE_TV":return Object(r.a)(Object(r.a)({},e),{},{sortReverseTv:!e.sortReverseTv});case"SORT_REVERSE_GAMES":return Object(r.a)(Object(r.a)({},e),{},{sortReverseGames:!e.sortReverseGames})}},o=c.createContext((function(){})),i=c.createContext(l);function u(e){var t=c.useReducer(s,l),n=Object(a.a)(t,2),r=n[0],m=n[1];return c.createElement(c.Fragment,null,c.createElement(o.Provider,{value:m},c.createElement(i.Provider,{value:r},e.children)))}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);n(38);function r(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"spinner"}))}},27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(18),c=n.n(r),l=n(8),m=n(1),s=(n(32),n(16)),o=n(19),i=n(25),u=n(24),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.Component),h=(n(33),n(10));function E(e){var t=e.item,n=a.useState(!1),r=Object(h.a)(n,2),c=r[0],m=r[1],s=R.filter((function(e){return e.parent===t.name}));return t.parent?null:a.createElement(a.Fragment,null,a.createElement("span",{key:t.name,className:"".concat(t.name," ").concat(t.parent?"hover-"+t.parent:""),onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)}},a.createElement("span",{className:"menu-parent"},a.createElement(l.c,{className:"menu-link",activeClassName:"menu-link-active",to:t.path,exact:t.exact},t.name)),c&&s.length>0?a.createElement("span",{className:"menu-children"},s.map((function(e){return a.createElement("span",{key:e.parent+e.path,className:"menu-child ".concat(c?"menu-child-active":"")},a.createElement(l.c,{className:"menu-link",activeClassName:"menu-link-active",to:e.path,exact:e.exact},e.name))}))):null))}function f(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"menu"},R.map((function(e){return a.createElement(E,{key:e.parent+e.path,item:e})}))))}function d(){var e=Object(m.f)();return document.title="404 error: ".concat(e.pathname," - MediaSheetViewer"),a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("h1",{style:{textAlign:"center"}},"404"),e.pathname," not found"))}var v=n(22),b=n(17),O=(n(39),a.lazy((function(){return n.e(10).then(n.bind(null,199))}))),T=a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,202))})),j=a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,203))})),g=a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(7)]).then(n.bind(null,204))})),y=a.lazy((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,200))})),F=a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,201))})),R=[{path:"/",name:"Home",exact:!0},{path:"/films",name:"Films"},{path:"/tv",name:"TV"},{path:"/games",name:"Games"},{path:"/directors",name:"Directors",parent:"Films"},{path:"/stats",name:"Stats"},{path:"/stats/graphs",name:"Graphs",parent:"Stats"},{path:"/stats/something",name:"Something",parent:"Stats"},{path:"/abcdef/:12345",name:"404",parent:"Home"},{path:"/films",name:"Films",parent:"Home"},{path:"/tv",name:"TV",parent:"Home"},{path:"/games",name:"Games",parent:"Home"},{path:"/films",name:"Films",parent:"TV"},{path:"/tv",name:"TV",parent:"TV"},{path:"/games",name:"Games",parent:"TV"},{path:"/films",name:"Films",parent:"Games"},{path:"/tv",name:"TV",parent:"Games"},{path:"/games",name:"Games",parent:"Games"}],S=[{path:"/",exact:!0,component:a.createElement(O,null)},{path:"/films",exact:!0,component:a.createElement(T,null)},{path:"/films/:id",component:a.createElement(F,null)},{path:"/tv",exact:!0,component:a.createElement(j,null)},{path:"/tv/:id",component:a.createElement(F,null)},{path:"/games",exact:!0,component:a.createElement(g,null)},{path:"/games/:id",component:a.createElement(F,null)},{path:"/directors",exact:!0,component:a.createElement(y,null)},{path:"/creators/:id",component:a.createElement(F,null)},{path:"*",component:a.createElement(d,null)}];function G(){return a.createElement(a.Fragment,null,a.createElement(p,null,a.createElement(l.a,{basename:"media-sheet-viewer"},a.createElement("div",{className:"headerContainer"},a.createElement(f,null)),a.createElement("div",{className:"bodyContainer"},a.createElement(a.Suspense,{fallback:a.createElement(v.a,null)},a.createElement(b.c,null,a.createElement(m.c,null,S.map((function(e){return a.createElement(m.a,{key:e.path,path:e.path,exact:e.exact},e.component)})))))))))}n(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.createElement(a.StrictMode,null,a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,3,4]]]);
//# sourceMappingURL=main.a0935f27.chunk.js.map
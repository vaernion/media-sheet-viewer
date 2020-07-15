(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[5],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(20),a=n(0);n(47);function c(e){var t=e.value,n=e.setValue,c=e.placeholder,s=a.useState(t),l=Object(r.a)(s,2),i=l[0],o=l[1];a.useEffect((function(){o(t)}),[t]),function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(i)}),500,[i]);return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("input",{type:"text",placeholder:c,value:i,onChange:function(e){return o(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){o("")}},"Clear")))}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);n(50);function a(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer",style:{width:e.width}},r.createElement("span",{className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",n)))}},50:function(e,t,n){},52:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(20),a=n(0),c=(n(46),n(15)),s=n(49),l=n(48),i=n(21),o=(n(52),n(14)),u=a.memo((function(e){var t=e.tv;return a.createElement(a.Fragment,null,a.createElement("div",{className:"list-items"},a.createElement("span",{className:"tv-title"},a.createElement(o.b,{to:"/tv/".concat(t.id)},t.title)," (",a.createElement("span",{className:"tv-year on-click",onClick:function(){return e.setSearchField("ys:"+t.seasons[0].yearStart)}},t.seasons[0].yearStart),"-",a.createElement("span",{className:"tv-year on-click",onClick:function(){return e.setSearchField("ye:"+t.seasons[t.seasons.length-1].yearEnd)}},t.seasons[t.seasons.length-1].yearEnd),")"),a.createElement("span",{className:"tv-creator"},t.creator.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" & ":null),a.createElement(o.b,{to:"/creators/".concat(e)},e))}))),a.createElement("span",{className:"tv-genre"},t.genre.map((function(t,n){return a.createElement("span",{key:t},a.createElement("span",null,n>0?" / ":null),a.createElement("span",{key:t,className:"genre-name on-click",onClick:function(){return e.setSearchField("g:"+t)}},t))})))))}));function f(){var e=a.useContext(i.a),t=a.useState("sortTitle"),n=Object(r.a)(t,2),o=n[0],f=n[1],m=a.useState(!1),d=Object(r.a)(m,2),v=d[0],E=d[1],y=a.useState(""),h=Object(r.a)(y,2),p=h[0],S=h[1],b=a.useState(null),k=Object(r.a)(b,2),g=k[0],w=k[1],N=a.useState(null),j=Object(r.a)(N,2),O=j[0],C=j[1];document.title="".concat(e.tv.length," TV series - MediaSheetViewer"),a.useEffect((function(){w(function(){var t=e.tvSorted;switch(o){case"sortTitle":return v?t.titleDesc:t.titleAsc;case"yearStart":return v?t.yearStartDesc:t.yearStartAsc;case"yearEnd":return v?t.yearEndDesc:t.yearEndAsc;case"creator":return v?t.creatorDesc:t.creatorAsc;default:return e.tv}}())}),[o,v,e.tv,e.tvSorted]),a.useEffect((function(){g&&C(T(g,p))}),[g,p]);var F=function(e){e===o?E(!v):(E(!1),f(e))},T=function(e,t){var n=Object(c.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(c.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){var t=Number(n.replace("y:",""));return e.seasons[0].yearStart<=t&&e.seasons[e.seasons.length-1].yearEnd>=t})):n.startsWith("ys:")?e.filter((function(e){return e.seasons[0].yearStart.toString()===n.replace("ys:","")})):n.startsWith("ye:")?e.filter((function(e){return e.seasons[e.seasons.length-1].yearEnd.toString()===n.replace("ye:","")})):e.filter((function(e){return Object(c.e)(e.title).includes(n)||-1!==e.creator.findIndex((function(e){return Object(c.e)(e).includes(n)}))}))};return O?a.createElement(a.Fragment,null,a.createElement("div",{className:"tvs"},a.createElement("div",{className:"tvs-head"},a.createElement(l.a,{value:p,setValue:S,placeholder:"examples: wire | david simon | g:sci-fi | (y|ys|ye):2005"}),a.createElement("div",{className:"headers"},a.createElement(s.a,{field:"sortTitle",label:"Title",width:"10%",sort:{sortBy:o,isSortReverse:v},onclick:F}),a.createElement(s.a,{field:"yearStart",label:"Start",width:"10%",sort:{sortBy:o,isSortReverse:v},onclick:F}),a.createElement(s.a,{field:"yearEnd",label:"End",width:"10%",sort:{sortBy:o,isSortReverse:v},onclick:F}),a.createElement(s.a,{field:"creator",label:"Creator",width:"35%",sort:{sortBy:o,isSortReverse:v},onclick:F}),a.createElement(s.a,{field:"genre",label:"Genre",width:"35%",sort:{sortBy:o,isSortReverse:v}}))),a.createElement("div",{className:"tvs-body"},O.map((function(e){return a.createElement(u,{key:e.id,tv:e,setSearchField:S})}))))):null}}}]);
//# sourceMappingURL=5.ce94fd84.chunk.js.map
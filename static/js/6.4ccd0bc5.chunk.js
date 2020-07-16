(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[6],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(15),a=n(0);n(41);function c(e){var t=e.value,n=e.setValue,c=e.placeholder,s=a.useState(t),i=Object(r.a)(s,2),l=i[0],o=i[1];a.useEffect((function(){o(t)}),[t]),function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(l)}),500,[l]);return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("input",{type:"text",placeholder:c,value:l,onChange:function(e){return o(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){o("")}},"Clear")))}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(43),a=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.director.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.franchise).includes(n)}))},c=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){var t=Number(n.replace("y:",""));return e.seasons[0].yearStart<=t&&e.seasons[e.seasons.length-1].yearEnd>=t})):n.startsWith("ys:")?e.filter((function(e){return e.seasons[0].yearStart.toString()===n.replace("ys:","")})):n.startsWith("ye:")?e.filter((function(e){return e.seasons[e.seasons.length-1].yearEnd.toString()===n.replace("ye:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.creator.findIndex((function(e){return Object(r.e)(e).includes(n)}))}))},s=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.developer.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.completed).includes(n)||Object(r.e)(e.system).includes(n)}))}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);n(46);function a(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer",style:{width:e.width}},r.createElement("span",{className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",n)))}},46:function(e,t,n){},50:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(15),a=n(0),c=(n(40),n(44)),s=n(45),i=n(42),l=n(17),o=n(47),u=(n(50),n(9)),f=a.memo((function(e){var t=e.tv;return a.createElement(a.Fragment,null,a.createElement("div",{className:"list-items"},a.createElement("span",{className:"tv-title"},a.createElement(u.b,{to:"/tv/".concat(t.id)},t.title)," (",a.createElement("span",{className:"tv-year on-click",onClick:function(){return e.setSearchField("ys:"+t.seasons[0].yearStart)}},t.seasons[0].yearStart),"-",a.createElement("span",{className:"tv-year on-click",onClick:function(){return e.setSearchField("ye:"+t.seasons[t.seasons.length-1].yearEnd)}},t.seasons[t.seasons.length-1].yearEnd),")"),a.createElement("span",{className:"tv-creator"},t.creator.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" & ":null),a.createElement(u.b,{to:"/creators/".concat(e)},e))}))),a.createElement("span",{className:"tv-genre"},t.genre.map((function(t,n){return a.createElement("span",{key:t},a.createElement("span",null,n>0?" / ":null),a.createElement("span",{key:t,className:"genre-name on-click",onClick:function(){return e.setSearchField("g:"+t)}},t))})))))}));function d(){var e=a.useContext(l.a),t=a.useContext(l.b),n=a.useState(t.filterTv),u=Object(r.a)(n,2),d=u[0],v=u[1];document.title="".concat(o.a.tv.length," TV series - MediaSheetViewer"),a.useEffect((function(){e({type:"FILTER_TV",payload:d})}),[d,e]);var m=function(n){n===t.sortTv?e({type:"SORT_REVERSE_TV"}):e({type:"SORT_TV",payload:n})},y=o.a.tvSorted[t.sortTv+(t.sortReverseTv?"Desc":"Asc")],E=Object(c.c)(y,d);return a.createElement(a.Fragment,null,a.createElement("div",{className:"tvs"},a.createElement("div",{className:"tvs-head"},a.createElement(i.a,{value:d,setValue:v,placeholder:"examples: wire | david simon | g:sci-fi | (y|ys|ye):2005"}),a.createElement("div",{className:"headers"},a.createElement(s.a,{field:"sortTitle",label:"Title",width:"10%",sort:{sortBy:t.sortTv,isSortReverse:t.sortReverseTv},onclick:m}),a.createElement(s.a,{field:"yearStart",label:"Start",width:"10%",sort:{sortBy:t.sortTv,isSortReverse:t.sortReverseTv},onclick:m}),a.createElement(s.a,{field:"yearEnd",label:"End",width:"10%",sort:{sortBy:t.sortTv,isSortReverse:t.sortReverseTv},onclick:m}),a.createElement(s.a,{field:"creator",label:"Creator",width:"35%",sort:{sortBy:t.sortTv,isSortReverse:t.sortReverseTv},onclick:m}),a.createElement(s.a,{field:"genre",label:"Genre",width:"35%",sort:{sortBy:t.sortTv,isSortReverse:t.sortReverseTv}}))),a.createElement("div",{className:"tvs-body"},E.map((function(e){return a.createElement(f,{key:e.id,tv:e,setSearchField:v})})))))}}}]);
//# sourceMappingURL=6.4ccd0bc5.chunk.js.map
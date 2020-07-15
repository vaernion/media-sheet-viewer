(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[5],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(15),a=n(0);n(41);function c(e){var t=e.value,n=e.setValue,c=e.placeholder,s=a.useState(t),l=Object(r.a)(s,2),i=l[0],o=l[1];a.useEffect((function(){o(t)}),[t]),function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(i)}),500,[i]);return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("input",{type:"text",placeholder:c,value:i,onChange:function(e){return o(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){o("")}},"Clear")))}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(43),a=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.director.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.franchise).includes(n)}))},c=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){var t=Number(n.replace("y:",""));return e.seasons[0].yearStart<=t&&e.seasons[e.seasons.length-1].yearEnd>=t})):n.startsWith("ys:")?e.filter((function(e){return e.seasons[0].yearStart.toString()===n.replace("ys:","")})):n.startsWith("ye:")?e.filter((function(e){return e.seasons[e.seasons.length-1].yearEnd.toString()===n.replace("ye:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.creator.findIndex((function(e){return Object(r.e)(e).includes(n)}))}))},s=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.developer.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.completed).includes(n)||Object(r.e)(e.system).includes(n)}))}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);n(46);function a(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer",style:{width:e.width}},r.createElement("span",{className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",n)))}},46:function(e,t,n){},51:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(15),a=n(0),c=(n(40),n(44)),s=n(45),l=n(42),i=n(17),o=n(47),u=(n(51),n(9)),m=a.memo((function(e){var t=e.game;return a.createElement(a.Fragment,null,a.createElement("div",{className:"list-items"},a.createElement("span",{className:"game-title"},a.createElement(u.b,{to:"/games/".concat(t.id)},t.title)," (",a.createElement("span",{className:"game-year on-click",onClick:function(){return e.setSearchField("y:"+t.year)}},t.year),")"),a.createElement("span",{className:"game-developer"},t.developer.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" & ":null),a.createElement(u.b,{to:"/creators/".concat(e)},e))}))),a.createElement("span",{className:"game-genre"},t.genre.map((function(t,n){return a.createElement("span",{key:t},a.createElement("span",null,n>0?" / ":null),a.createElement("span",{key:t,className:"genre-name on-click",onClick:function(){return e.setSearchField("g:"+t)}},t))}))),a.createElement("span",{className:"game-completed on-click",onClick:function(){return e.setSearchField(t.completed)}},t.completed),a.createElement("span",{className:"game-system on-click",onClick:function(){return e.setSearchField(t.system)}},t.system)))}));function f(){var e=a.useContext(i.a),t=a.useContext(i.b),n=a.useState(t.filterGames),u=Object(r.a)(n,2),f=u[0],d=u[1];document.title="".concat(o.a.games.length," Games - MediaSheetViewer"),a.useEffect((function(){e({type:"FILTER_GAMES",payload:f})}),[f,e]);var p=function(n){n===t.sortGames?e({type:"SORT_REVERSE_GAMES"}):e({type:"SORT_GAMES",payload:n})},v=o.a.gamesSorted[t.sortGames+(t.sortReverseGames?"Desc":"Asc")],y=Object(c.b)(v,f);return a.createElement(a.Fragment,null,a.createElement("div",{className:"games"},a.createElement("div",{className:"games-head"},a.createElement(l.a,{value:f,setValue:d,placeholder:"examples: deus ex | g:stealth | arkane | y:1998"}),a.createElement("div",{className:"headers"},a.createElement(s.a,{field:"sortTitle",label:"Title",width:"20%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:p}),a.createElement(s.a,{field:"year",label:"Year",width:"10%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:p}),a.createElement(s.a,{field:"developer",label:"Developer",width:"25%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:p}),a.createElement(s.a,{field:"genre",label:"Genre",width:"30%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames}}),a.createElement(s.a,{field:"completed",label:"Completed",width:"10%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:p}),a.createElement(s.a,{field:"system",label:"System",width:"10%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:p}))),a.createElement("div",{className:"games-body"},y.map((function(e){return a.createElement(m,{key:e.id,game:e,setSearchField:d})})))))}}}]);
//# sourceMappingURL=5.12c832ec.chunk.js.map
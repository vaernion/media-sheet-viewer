(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[7],{122:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(15),a=n(0),c=n(123),s=(n(58),n(72)),l=n(73),i=n(60),o=n(18),u=n(75),m=n(9);n(122);function d(e){var t=e.data,n=e.setSearchField;return a.createElement(a.Fragment,null,a.createElement("div",{className:"list-items ".concat(e.index%2?"":"odd-index"),style:e.style},a.createElement("span",{className:"game-title"},a.createElement(m.b,{to:"/games/".concat(t.id)},t.title)," (",a.createElement("span",{className:"game-year on-click",onClick:function(){return n("y:"+t.year)}},t.year),")"),a.createElement("span",{className:"game-developer"},t.developer.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" & ":null),a.createElement(m.b,{to:"/creators/".concat(e)},e))}))),a.createElement("span",{className:"game-genre"},t.genre.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" / ":null),a.createElement("span",{key:e,className:"genre-name on-click",onClick:function(){return n("g:"+e)}},e))}))),a.createElement("span",{className:"game-completed on-click",onClick:function(){return n(t.completed)}},t.completed),a.createElement("span",{className:"game-system on-click",onClick:function(){return n(t.system)}},t.system)))}function f(){var e=a.useContext(o.a),t=a.useContext(o.b),n=a.useState(t.filterGames),m=Object(r.a)(n,2),f=m[0],p=m[1];document.title="".concat(u.a.games.length," Games - MediaSheetViewer"),a.useEffect((function(){e({type:"FILTER_GAMES",payload:f})}),[f,e]);var h=function(n){n===t.sortGames?e({type:"SORT_REVERSE_GAMES"}):e({type:"SORT_GAMES",payload:n})},v=u.a.gamesSorted[t.sortGames+(t.sortReverseGames?"Desc":"Asc")],y=Object(s.b)(v,f),E=function(e){var t=e.index,n=e.key,r=e.style,c=y[t];return a.createElement(d,{key:n,index:t,data:c,setSearchField:p,style:r})};return a.createElement(a.Fragment,null,a.createElement("div",{className:"games"},a.createElement("div",{className:"games-head"},a.createElement(i.a,{value:f,setValue:p,placeholder:"examples: deus ex | g:stealth | arkane | y:1998"}),a.createElement("div",{className:"headers"},a.createElement(l.a,{field:"sortTitle",label:"Title",width:"20%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:h}),a.createElement(l.a,{field:"year",label:"Year",width:"10%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:h}),a.createElement(l.a,{field:"developer",label:"Developer",width:"25%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:h}),a.createElement(l.a,{field:"genre",label:"Genre",width:"30%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames}}),a.createElement(l.a,{field:"completed",label:"Completed",width:"10%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:h}),a.createElement(l.a,{field:"system",label:"System",width:"10%",sort:{sortBy:t.sortGames,isSortReverse:t.sortReverseGames},onclick:h}))),a.createElement("div",{className:"games-body"},a.createElement(c.e,null,(function(e){var t=e.height,n=e.scrollTop,r=e.registerChild,s=e.onChildScroll;return a.createElement(c.a,{disableHeight:!0},(function(e){var l=e.width;return a.createElement("div",{ref:r},a.createElement(c.d,{autoHeight:!0,height:t,width:l,scrollTop:n,onScroll:s,overscanRowCount:50,rowCount:y.length,rowHeight:22,rowRenderer:E}))}))})))))}},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(15),a=n(0);n(59);function c(e){var t=e.value,n=e.setValue,c=e.placeholder,s=a.useState(t),l=Object(r.a)(s,2),i=l[0],o=l[1];a.useEffect((function(){o(t)}),[t]),function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(i)}),500,[i]);return a.createElement(a.Fragment,null,a.createElement("div",{className:"searchform"},a.createElement("label",{className:"input-label",htmlFor:"searchFormInput"},"Filter:"),a.createElement("input",{type:"text",id:"searchFormInput",placeholder:c,value:i,onChange:function(e){return o(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){o("")}},"Clear")))}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(65),a=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.director.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.franchise).includes(n)}))},c=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){var t=Number(n.replace("y:",""));return e.seasons[0].yearStart<=t&&e.seasons[e.seasons.length-1].yearEnd>=t})):n.startsWith("ys:")?e.filter((function(e){return e.seasons[0].yearStart.toString()===n.replace("ys:","")})):n.startsWith("ye:")?e.filter((function(e){return e.seasons[e.seasons.length-1].yearEnd.toString()===n.replace("ye:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.creator.findIndex((function(e){return Object(r.e)(e).includes(n)}))}))},s=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.developer.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.completed).includes(n)||Object(r.e)(e.system).includes(n)}))}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);n(74);function a(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer",style:{width:e.width}},r.createElement("span",{tabIndex:0,className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",n)))}},74:function(e,t,n){}}]);
//# sourceMappingURL=7.d605b6f4.chunk.js.map
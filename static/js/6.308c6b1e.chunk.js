(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[6],{120:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(15),c=n(0),a=n(123),i=(n(58),n(72)),l=n(73),s=n(60),o=n(18),u=n(75),f=n(9),d=(n(120),function(e){return c.createElement("div",{className:"list-items ".concat(e.index%2?"":"odd-index"),style:e.style},c.createElement(m,{data:e.data,setSearchField:e.setSearchField}))}),m=c.memo((function(e){var t=e.data,n=e.setSearchField;return c.createElement(c.Fragment,null,c.createElement("span",{className:"film-title"},c.createElement(f.b,{to:"/films/".concat(t.id)},t.title)," (",c.createElement("span",{className:"film-year on-click",onClick:function(){return n("y:"+t.year)}},t.year),")"),c.createElement("span",{className:"film-director"},t.director.map((function(e,t){return c.createElement("span",{key:e},c.createElement("span",null,t>0?" & ":null),c.createElement(f.b,{to:"/creators/".concat(e)},e))}))),c.createElement("span",{className:"film-genre"},t.genre.map((function(e,t){return c.createElement("span",{key:e},c.createElement("span",null,t>0?" / ":null),c.createElement("span",{key:e,className:"genre-name on-click",onClick:function(){return n("g:"+e)}},e))}))),c.createElement("span",{className:"film-franchise on-click",onClick:function(){return n(t.franchise)}},t.franchise))}));var h=new a.c({fixedWidth:!0,defaultHeight:50});function p(){var e=c.useContext(o.a),t=c.useContext(o.b),n=c.useState(t.filterFilms),f=Object(r.a)(n,2),m=f[0],p=f[1];document.title="".concat(u.a.films.length," Films - MediaSheetViewer"),c.useEffect((function(){e({type:"FILTER_FILMS",payload:m})}),[m,e]);var E=function(n){n===t.sortFilms?e({type:"SORT_REVERSE_FILMS"}):e({type:"SORT_FILMS",payload:n})},v=u.a.filmsSorted[t.sortFilms+(t.sortReverseFilms?"Desc":"Asc")],y=Object(i.a)(v,m),b=function(e){var t=e.index,n=(e.key,e.style),r=e.parent,i=y[t];return c.createElement(a.b,{key:i.id,cache:h,parent:r,columnIndex:0,rowIndex:t},c.createElement(d,{index:t,data:i,setSearchField:p,style:n}))};return c.createElement(c.Fragment,null,c.createElement("div",{className:"films"},c.createElement("div",{className:"films-head"},c.createElement(s.a,{value:m,setValue:p,placeholder:"examples: star wars | g:drama | hitchcock | y:2010"}),c.createElement("div",{className:"headers"},c.createElement(l.a,{field:"sortTitle",label:"Title",width:"20%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}),c.createElement(l.a,{field:"year",label:"Year",width:"10%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}),c.createElement(l.a,{field:"director",label:"Director",width:"25%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}),c.createElement(l.a,{field:"genre",label:"Genre",width:"30%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms}}),c.createElement(l.a,{field:"franchise",label:"Franchise",width:"15%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}))),c.createElement("div",{className:"films-body"},c.createElement(a.e,null,(function(e){var t=e.height,n=e.scrollTop,r=e.registerChild,i=e.onChildScroll;return c.createElement(a.a,{disableHeight:!0},(function(e){var l=e.width;return c.createElement("div",{ref:r},c.createElement(a.d,{autoHeight:!0,height:t,width:l,deferredMeasurementCache:h,scrollTop:n,onScroll:i,overscanRowCount:50,rowCount:y.length,rowHeight:h.rowHeight,rowRenderer:b}))}))})))))}},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(15),c=n(0);n(59);function a(e){var t=e.value,n=e.setValue,a=e.placeholder,i=c.useState(t),l=Object(r.a)(i,2),s=l[0],o=l[1];c.useEffect((function(){o(t)}),[t]),function(e,t,n){var r=Object(c.useCallback)(e,n);Object(c.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(s)}),500,[s]);return c.createElement(c.Fragment,null,c.createElement("div",{className:"searchform"},c.createElement("label",{className:"input-label",htmlFor:"searchFormInput"},"Filter:"),c.createElement("input",{type:"text",id:"searchFormInput",placeholder:a,value:s,onChange:function(e){return o(e.currentTarget.value)}}),c.createElement("button",{onClick:function(){o("")}},"Clear")))}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(65),c=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.director.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.franchise).includes(n)}))},a=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){var t=Number(n.replace("y:",""));return e.seasons[0].yearStart<=t&&e.seasons[e.seasons.length-1].yearEnd>=t})):n.startsWith("ys:")?e.filter((function(e){return e.seasons[0].yearStart.toString()===n.replace("ys:","")})):n.startsWith("ye:")?e.filter((function(e){return e.seasons[e.seasons.length-1].yearEnd.toString()===n.replace("ye:","")})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.creator.findIndex((function(e){return Object(r.e)(e).includes(n)}))}))},i=function(e,t){var n=Object(r.e)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.e)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):n.startsWith("c:")?e.filter((function(e){return Object(r.e)(e.completed).includes(n.replace("c:",""))})):e.filter((function(e){return Object(r.e)(e.title).includes(n)||-1!==e.developer.findIndex((function(e){return Object(r.e)(e).includes(n)}))||Object(r.e)(e.completed).includes(n)||Object(r.e)(e.system).includes(n)}))}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);n(74);function c(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer",style:{width:e.width}},r.createElement("span",{tabIndex:0,className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",n)))}},74:function(e,t,n){}}]);
//# sourceMappingURL=6.308c6b1e.chunk.js.map
(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[8],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(8),a=n(0),c=n(128),l=(n(63),n(77)),i=n(78),s=n(66),o=n(11),u=n(58),f=n(10),m=function(e){return a.createElement("div",{className:"list-items ".concat(e.index%2?"":"odd-index"),style:e.style},a.createElement(d,{data:e.data,setSearchField:e.setSearchField}))},d=a.memo((function(e){var t=e.data,n=e.setSearchField;return a.createElement(a.Fragment,null,a.createElement("span",{className:"film-title"},a.createElement(f.b,{to:"/films/".concat(t.id)},t.name),t.translatedTitle?a.createElement("span",{className:"film-translation"}," - ",t.translatedTitle," "):null,"(",a.createElement("span",{className:"film-year on-click",onClick:function(){return n("y:"+t.year)}},t.year),")"),a.createElement("span",{className:"film-director"},t.creator.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" & ":null),a.createElement(f.b,{to:"/creators/".concat(e)},e))}))),a.createElement("span",{className:"film-genre"},t.genre.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" / ":null),a.createElement("span",{key:e,className:"genre-name on-click",onClick:function(){return n("g:"+e)}},e))}))),a.createElement("span",{className:"film-franchise on-click",onClick:function(){return n(t.franchise)}},t.franchise))}));var h=new c.c({fixedWidth:!0,defaultHeight:50});function p(){var e=a.useContext(o.a),t=a.useContext(o.b),n=a.useState(t.filterFilms),f=Object(r.a)(n,2),d=f[0],p=f[1];document.title="".concat(u.a.films.length," Films - MediaSheetViewer"),a.useEffect((function(){e({type:"FILTER_FILMS",payload:d})}),[d,e]);var E=function(n){n===t.sortFilms?e({type:"SORT_REVERSE_FILMS"}):e({type:"SORT_FILMS",payload:n})},y=u.a.filmsSorted[t.sortFilms+(t.sortReverseFilms?"Desc":"Asc")],v=Object(l.a)(y,d),b=function(e){var t=e.index,n=e.style,r=e.parent,l=v[t];return a.createElement(c.b,{key:l.id,cache:h,parent:r,columnIndex:0,rowIndex:t},a.createElement(m,{index:t,data:l,setSearchField:p,style:n}))};return a.createElement(a.Fragment,null,a.createElement("div",{className:"films"},a.createElement("div",{className:"films-head"},a.createElement(s.a,{value:d,setValue:p,placeholder:"star wars | g:drama | hitchcock | y:2010"}),a.createElement("div",{className:"headers"},a.createElement(i.a,{field:"sortTitle",label:"Title",width:"20%",primary:!0,sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}),a.createElement(i.a,{field:"year",label:"Year",width:"15%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}),a.createElement(i.a,{field:"director",label:"Director",width:"25%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}),a.createElement(i.a,{field:"genre",label:"Genre",width:"35%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms}}),a.createElement(i.a,{field:"franchise",label:"Franchise",width:"15%",sort:{sortBy:t.sortFilms,isSortReverse:t.sortReverseFilms},onclick:E}))),a.createElement("div",{className:"films-body"},a.createElement(c.e,null,(function(e){var t=e.height,n=e.scrollTop,r=e.registerChild,l=e.onChildScroll;return a.createElement(c.a,{disableHeight:!0},(function(e){var i=e.width;return a.createElement("div",{ref:r},a.createElement(c.d,{autoHeight:!0,height:t,width:i,deferredMeasurementCache:h,scrollTop:n,onScroll:l,overscanRowCount:50,rowCount:v.length,rowHeight:h.rowHeight,rowRenderer:b}))}))})))))}},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8),a=n(0);n(64);function c(e){var t=e.value,n=e.setValue,c=e.placeholder,l=a.useState(t),i=Object(r.a)(l,2),s=i[0],o=i[1];a.useEffect((function(){o(t)}),[t]),function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(s)}),500,[s]);return a.createElement(a.Fragment,null,a.createElement("div",{className:"searchform"},a.createElement("label",{className:"input-label",htmlFor:"searchFormInput"},"Filter:"),a.createElement("input",{type:"text",id:"searchFormInput",placeholder:c,value:s,onChange:function(e){o(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){o("")}},"Clear")))}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(71),a=function(e,t){var n=Object(r.f)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.f)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(r.f)(e.name).includes(n)||-1!==e.creator.findIndex((function(e){return Object(r.f)(e).includes(n)}))||Object(r.f)(e.franchise).includes(n)||Object(r.f)(e.translatedTitle).includes(n)}))},c=function(e,t){var n=Object(r.f)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.f)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){var t=Number(n.replace("y:",""));return e.seasons[0].yearStart<=t&&e.seasons[e.seasons.length-1].yearEnd>=t})):n.startsWith("ys:")?e.filter((function(e){return e.seasons[0].yearStart.toString()===n.replace("ys:","")})):n.startsWith("ye:")?e.filter((function(e){return e.seasons[e.seasons.length-1].yearEnd.toString()===n.replace("ye:","")})):e.filter((function(e){return Object(r.f)(e.name).includes(n)||-1!==e.creator.findIndex((function(e){return Object(r.f)(e).includes(n)}))}))},l=function(e,t){var n=Object(r.f)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(r.f)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):n.startsWith("c:")?e.filter((function(e){return Object(r.f)(e.completed).includes(n.replace("c:",""))})):e.filter((function(e){return Object(r.f)(e.name).includes(n)||-1!==e.creator.findIndex((function(e){return Object(r.f)(e).includes(n)}))||Object(r.f)(e.completed).includes(n)||Object(r.f)(e.system).includes(n)}))}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);n(79);function a(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer"+(e.primary?" primary":""),style:{width:e.width}},r.createElement("span",{tabIndex:0,className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:function(){e.onclick&&e.onclick(e.field)}},e.label," ",n)))}},79:function(e,t,n){}}]);
//# sourceMappingURL=8.242ad7bd.chunk.js.map
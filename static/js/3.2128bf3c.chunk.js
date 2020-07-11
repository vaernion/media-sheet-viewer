(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[3],{41:function(e,t,r){},42:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var n=r(19),a=r(0);r(42);function c(e){var t=e.value,r=e.setValue,c=e.placeholder,l=a.useState(t),i=Object(n.a)(l,2),s=i[0],o=i[1];a.useEffect((function(){o(t)}),[t]),function(e,t,r){var n=Object(a.useCallback)(e,r);Object(a.useEffect)((function(){var e=setTimeout((function(){return n()}),t);return function(){return clearTimeout(e)}}),[n,t])}((function(){r(s)}),500,[s]);return a.createElement(a.Fragment,null,a.createElement("input",{type:"text",placeholder:c,value:s,onChange:function(e){return o(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){o("")}},"Clear"))}var l=r(18);function i(e){var t=e.sort.sortBy===e.field,r=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return a.createElement(a.Fragment,null,a.createElement("div",{className:"fieldHeader film-"+e.field},a.createElement("span",{className:"fieldHeaderName"+(t?" active":""),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",r)))}var s=r(10);r(41);function o(e){var t=e.film;return a.createElement(a.Fragment,null,a.createElement("div",{className:"filmListItem"},a.createElement("span",{className:"filmTitle"},a.createElement(s.b,{to:"/films/".concat(t.id)},t.title)),a.createElement("span",{className:"filmYear",onClick:function(){return e.setSearchField("y:"+t.year)}},t.year),a.createElement("span",{className:"filmDirector"},t.director.map((function(e){return a.createElement(s.b,{key:e,className:"filmDirectorName",to:"/directors/".concat(e)},e)}))),a.createElement("span",{className:"filmGenre"},t.genre.map((function(t){return a.createElement("span",{key:t,className:"filmGenreName",onClick:function(){return e.setSearchField("g:"+t)}},t)}))),a.createElement("span",{className:"filmFranchise"},t.franchise)))}function u(){var e=a.useContext(l.a),t=a.useState("sortTitle"),r=Object(n.a)(t,2),s=r[0],u=r[1],f=a.useState(!1),m=Object(n.a)(f,2),d=m[0],E=m[1],v=a.useState(""),h=Object(n.a)(v,2),p=h[0],y=h[1],b=a.useState(null),C=Object(n.a)(b,2),S=C[0],k=C[1],N=a.useState(null),g=Object(n.a)(N,2),w=g[0],F=g[1];document.title="".concat(e.films.length," Films - MediaSheetViewer"),a.useEffect((function(){k(function(){var t=e.filmsSorted;switch(s){case"sortTitle":return d?t.titleDesc:t.titleAsc;case"year":return d?t.yearDesc:t.yearAsc;case"director":return d?t.directorDesc:t.directorAsc;case"franchise":return d?t.franchiseDesc:t.franchiseAsc;default:return e.films}}())}),[s,d,e.films,e.filmsSorted]),a.useEffect((function(){S&&F(j(S,p))}),[S,p]);var L=function(e){e===s?E(!d):(E(!1),u(e))},j=function(e,t){return t.toLowerCase().startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return e.toLowerCase().includes(t.toLowerCase().replace("g:",""))}))})):t.toLowerCase().startsWith("y:")?e.filter((function(e){return e.year.toString()===t.replace("y:","")})):e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||-1!==e.director.findIndex((function(e){return e.toLowerCase().includes(t.toLowerCase())}))}))};return w?a.createElement(a.Fragment,null,a.createElement("div",{className:"filmHeaderContainer"},a.createElement("div",{className:"searchWrapper"},a.createElement(c,{value:p,setValue:y,placeholder:"examples: star wars | g:drama | hitchcock | y:2010"})),a.createElement("div",{className:"fieldHeadersContainer"},a.createElement(i,{field:"sortTitle",label:"Title",onclick:L,sort:{sortBy:s,isSortReverse:d}}),a.createElement(i,{field:"year",label:"Year",onclick:L,sort:{sortBy:s,isSortReverse:d}}),a.createElement(i,{field:"director",label:"Director",onclick:L,sort:{sortBy:s,isSortReverse:d}}),a.createElement(i,{field:"genre",label:"Genre",sort:{sortBy:s,isSortReverse:d}}),a.createElement(i,{field:"franchise",label:"Franchise",onclick:L,sort:{sortBy:s,isSortReverse:d}}))),a.createElement("div",{className:"filmBodyContainer"},w.map((function(e){return a.createElement(o,{key:e.id,film:e,setSearchField:y})})))):null}}}]);
//# sourceMappingURL=3.2128bf3c.chunk.js.map
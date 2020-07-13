(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[3],{43:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e.normalize("NFD").replace(/[^\w\s.-_/]/g,"").toLowerCase()}},44:function(e,t,n){},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(19),a=n(0);n(44);function c(e){var t=e.value,n=e.setValue,c=e.placeholder,l=a.useState(t),i=Object(r.a)(l,2),s=i[0],u=i[1];a.useEffect((function(){u(t)}),[t]),function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(s)}),500,[s]);return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("input",{type:"text",placeholder:c,value:s,onChange:function(e){return u(e.currentTarget.value)}}),a.createElement("button",{onClick:function(){u("")}},"Clear")))}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);n(50);function a(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer",style:{width:e.width}},r.createElement("span",{className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",n)))}},50:function(e,t,n){},51:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(19),a=n(0),c=n(43),l=n(49),i=n(47),s=n(20),u=n(14),o=(n(51),a.memo((function(e){var t=e.film;return a.createElement(a.Fragment,null,a.createElement("div",{className:"list-items"},a.createElement("span",{className:"film-title"},a.createElement(u.b,{to:"/films/".concat(t.id)},t.title)," (",a.createElement("span",{className:"film-year",onClick:function(){return e.setSearchField("y:"+t.year)}},t.year),")"),a.createElement("span",{className:"film-director"},t.director.map((function(e,t){return a.createElement("span",{key:e},a.createElement("span",null,t>0?" & ":null),a.createElement(u.b,{to:"/directors/".concat(e)},e))}))),a.createElement("span",{className:"film-genre"},t.genre.map((function(t,n){return a.createElement("span",{key:t},a.createElement("span",null,n>0?" / ":null),a.createElement("span",{key:t,className:"genre-name",onClick:function(){return e.setSearchField("g:"+t)}},t))}))),a.createElement("span",{className:"film-franchise"},t.franchise)))})));function f(){var e=a.useContext(s.a),t=a.useState("sortTitle"),n=Object(r.a)(t,2),u=n[0],f=n[1],m=a.useState(!1),d=Object(r.a)(m,2),h=d[0],E=d[1],v=a.useState(""),p=Object(r.a)(v,2),b=p[0],y=p[1],k=a.useState(null),S=Object(r.a)(k,2),g=S[0],w=S[1],N=a.useState(null),j=Object(r.a)(N,2),O=j[0],F=j[1];document.title="".concat(e.films.length," Films - MediaSheetViewer"),a.useEffect((function(){w(function(){var t=e.filmsSorted;switch(u){case"sortTitle":return h?t.titleDesc:t.titleAsc;case"year":return h?t.yearDesc:t.yearAsc;case"director":return h?t.directorDesc:t.directorAsc;case"franchise":return h?t.franchiseDesc:t.franchiseAsc;default:return e.films}}())}),[u,h,e.films,e.filmsSorted]),a.useEffect((function(){g&&F(T(g,b))}),[g,b]);var C=function(e){e===u?E(!h):(E(!1),f(e))},T=function(e,t){var n=Object(c.a)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(c.a)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(c.a)(e.title).includes(n)||-1!==e.director.findIndex((function(e){return Object(c.a)(e).includes(n)}))}))};return O?a.createElement(a.Fragment,null,a.createElement("div",{className:"films"},a.createElement("div",{className:"films-head"},a.createElement(i.a,{value:b,setValue:y,placeholder:"examples: star wars | g:drama | hitchcock | y:2010"}),a.createElement("div",{className:"headers"},a.createElement(l.a,{field:"sortTitle",label:"Title",width:"20%",sort:{sortBy:u,isSortReverse:h},onclick:C}),a.createElement(l.a,{field:"year",label:"Year",width:"10%",sort:{sortBy:u,isSortReverse:h},onclick:C}),a.createElement(l.a,{field:"director",label:"Director",width:"25%",sort:{sortBy:u,isSortReverse:h},onclick:C}),a.createElement(l.a,{field:"genre",label:"Genre",width:"30%",sort:{sortBy:u,isSortReverse:h}}),a.createElement(l.a,{field:"franchise",label:"Franchise",width:"15%",sort:{sortBy:u,isSortReverse:h},onclick:C}))),a.createElement("div",{className:"films-body"},O.map((function(e){return a.createElement(o,{key:e.id,film:e,setSearchField:y})}))))):null}}}]);
//# sourceMappingURL=3.73ce616c.chunk.js.map
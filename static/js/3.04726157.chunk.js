(this["webpackJsonpmedia-sheet-viewer"]=this["webpackJsonpmedia-sheet-viewer"]||[]).push([[3],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e.normalize("NFD").replace(/[^\w\s.-_/]/g,"").toLowerCase()}},47:function(e,t,n){},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(19),c=n(0);n(47);function a(e){var t=e.value,n=e.setValue,a=e.placeholder,l=c.useState(t),i=Object(r.a)(l,2),s=i[0],u=i[1];c.useEffect((function(){u(t)}),[t]),function(e,t,n){var r=Object(c.useCallback)(e,n);Object(c.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[r,t])}((function(){n(s)}),500,[s]);return c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement("input",{type:"text",placeholder:a,value:s,onChange:function(e){return u(e.currentTarget.value)}}),c.createElement("button",{onClick:function(){u("")}},"Clear")))}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);n(54);function c(e){var t=e.sort.sortBy===e.field,n=t?e.sort.isSortReverse?"\u2191":"\u2193":null;return r.createElement(r.Fragment,null,r.createElement("span",{className:"fheader-outer",style:{width:e.width}},r.createElement("span",{className:"fheader"+(t?" active":"")+(e.onclick?"":" no-click"),onClick:e.onclick?function(){return e.onclick(e.field)}:void 0},e.label," ",n)))}},54:function(e,t,n){},55:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(19),c=n(0),a=(n(45),n(46)),l=n(53),i=n(51),s=n(20),u=n(14),o=(n(55),c.memo((function(e){var t=e.film;return c.createElement(c.Fragment,null,c.createElement("div",{className:"list-items"},c.createElement("span",{className:"film-title"},c.createElement(u.b,{to:"/films/".concat(t.id)},t.title)," (",c.createElement("span",{className:"film-year on-click",onClick:function(){return e.setSearchField("y:"+t.year)}},t.year),")"),c.createElement("span",{className:"film-director"},t.director.map((function(e,t){return c.createElement("span",{key:e},c.createElement("span",null,t>0?" & ":null),c.createElement(u.b,{to:"/directors/".concat(e)},e))}))),c.createElement("span",{className:"film-genre"},t.genre.map((function(t,n){return c.createElement("span",{key:t},c.createElement("span",null,n>0?" / ":null),c.createElement("span",{key:t,className:"genre-name on-click",onClick:function(){return e.setSearchField("g:"+t)}},t))}))),c.createElement("span",{className:"film-franchise on-click",onClick:function(){return e.setSearchField(t.franchise)}},t.franchise)))})));function f(){var e=c.useContext(s.a),t=c.useState("sortTitle"),n=Object(r.a)(t,2),u=n[0],f=n[1],m=c.useState(!1),d=Object(r.a)(m,2),h=d[0],E=d[1],v=c.useState(""),p=Object(r.a)(v,2),b=p[0],y=p[1],k=c.useState(null),S=Object(r.a)(k,2),g=S[0],w=S[1],N=c.useState(null),j=Object(r.a)(N,2),O=j[0],F=j[1];document.title="".concat(e.films.length," Films - MediaSheetViewer"),c.useEffect((function(){w(function(){var t=e.filmsSorted;switch(u){case"sortTitle":return h?t.titleDesc:t.titleAsc;case"year":return h?t.yearDesc:t.yearAsc;case"director":return h?t.directorDesc:t.directorAsc;case"franchise":return h?t.franchiseDesc:t.franchiseAsc;default:return e.films}}())}),[u,h,e.films,e.filmsSorted]),c.useEffect((function(){g&&F(T(g,b))}),[g,b]);var C=function(e){e===u?E(!h):(E(!1),f(e))},T=function(e,t){var n=Object(a.a)(t);return n.startsWith("g:")?e.filter((function(e){return-1!==e.genre.findIndex((function(e){return Object(a.a)(e).includes(n.replace("g:",""))}))})):n.startsWith("y:")?e.filter((function(e){return e.year.toString()===n.replace("y:","")})):e.filter((function(e){return Object(a.a)(e.title).includes(n)||-1!==e.director.findIndex((function(e){return Object(a.a)(e).includes(n)}))||Object(a.a)(e.franchise).includes(n)}))};return O?c.createElement(c.Fragment,null,c.createElement("div",{className:"films"},c.createElement("div",{className:"films-head"},c.createElement(i.a,{value:b,setValue:y,placeholder:"examples: star wars | g:drama | hitchcock | y:2010"}),c.createElement("div",{className:"headers"},c.createElement(l.a,{field:"sortTitle",label:"Title",width:"20%",sort:{sortBy:u,isSortReverse:h},onclick:C}),c.createElement(l.a,{field:"year",label:"Year",width:"10%",sort:{sortBy:u,isSortReverse:h},onclick:C}),c.createElement(l.a,{field:"director",label:"Director",width:"25%",sort:{sortBy:u,isSortReverse:h},onclick:C}),c.createElement(l.a,{field:"genre",label:"Genre",width:"30%",sort:{sortBy:u,isSortReverse:h}}),c.createElement(l.a,{field:"franchise",label:"Franchise",width:"15%",sort:{sortBy:u,isSortReverse:h},onclick:C}))),c.createElement("div",{className:"films-body"},O.map((function(e){return c.createElement(o,{key:e.id,film:e,setSearchField:y})}))))):null}}}]);
//# sourceMappingURL=3.04726157.chunk.js.map
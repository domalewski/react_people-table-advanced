(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(9),r=(c(36),c(37),c(3)),s=c(15),l=c(5),i=c(0),o=c(8),j=c(10),d=c.n(j);function u(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var b=c(27),h=c(1),m=["children","params"],O=function(e){var t=e.children,c=e.params,n=Object(b.a)(e,m),r=Object(a.d)(),i=Object(l.a)(r,1)[0];return Object(h.jsx)(a.b,Object(s.a)(Object(s.a)({to:{search:u(i,c)}},n),{},{children:t}))},x=["16","17","18","19","20"],p=function(){var e=Object(a.d)(),t=Object(l.a)(e,2),c=t[0],n=t[1],r=c.get("query")||"",s=c.get("sex")||"",i=c.getAll("centuries")||[];return Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(h.jsx)(O,{params:{sex:null},className:d()({"is-active":""===s}),children:"All"}),Object(h.jsx)(O,{params:{sex:"m"},className:d()({"is-active":"m"===s}),children:"Male"}),Object(h.jsx)(O,{params:{sex:"f"},className:d()({"is-active":"f"===s}),children:"Female"})]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){var t=u(c,{query:e.target.value.trim()||null});n(t)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(h.jsx)("div",{className:"level-left",children:x.map((function(e){return Object(h.jsx)(O,{"data-cy":"century",className:d()("button mr-1",{"is-info":i.includes(e)}),params:{centuries:i.includes(e)?i.filter((function(t){return t!==e})):[].concat(Object(o.a)(i),[e])},children:e},e)}))}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(O,{"data-cy":"centuryALL",className:d()("button is-success",{"is-outlined":0!==i.length}),params:{centuries:null},children:"All"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(O,{className:"button is-link is-outlined is-fullwidth",params:{centuries:null,sex:null,query:null},children:"Reset all filters"})})]})},f=(c(39),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),v=["name","sex","born","died"],N=function(e){var t=e.allPeople,c=Object(r.q)().slug,n=Object(a.d)(),s=Object(l.a)(n,1)[0],j=s.get("query")||"",u=s.get("sex")||"",b=s.getAll("centuries")||[],m=s.get("sort")||"",x=s.get("order")||"",p=Object(i.useMemo)((function(){return function(e,t){var c=t.query,n=t.sex,a=t.centuries,r=t.sort,s=t.order,l=Object(o.a)(e);if(c){var i=c.trim().toLowerCase();l=l.filter((function(e){return e.name.toLowerCase().includes(i)||(e.motherName||"").toLowerCase().includes(i)||(e.fatherName||"").toLowerCase().includes(i)}))}return n&&(l=l.filter((function(e){return e.sex===n}))),a.length>0&&(l=l.filter((function(e){return a.includes(Math.ceil(e.born/100).toString())}))),r&&l.sort((function(e,t){switch(r){case"name":case"sex":return e[r].localeCompare(t[r]);case"born":case"died":return e[r]-t[r];default:return 0}})),s&&l.reverse(),l}(t,{query:j,sex:u,centuries:b,sort:m,order:x})}),[t,j,u,b,m,x]);return 0===p.length?Object(h.jsx)("p",{children:"No results for your search"}):Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[v.map((function(e){return Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e[0].toUpperCase()+e.slice(1),Object(h.jsx)(O,{params:(t="".concat(e),m!==t||x?m===t&&x?{sort:null,order:null}:{sort:t,order:null}:{sort:t,order:"desc"}),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:d()("fas fa-sort",{"fa-sort-up":m===e&&"desc"!==x,"fa-sort-down":m===e&&"desc"===x})})})})]})},e);var t})),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:p.map((function(e){var t,n,r,s,l;return Object(h.jsxs)("tr",{className:d()({"has-background-warning":e.slug===c}),"data-cy":"person",children:[Object(h.jsx)("td",{children:Object(h.jsx)(a.b,{to:"/people/".concat(e.slug),onClick:function(){return e.slug===c},className:d()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.born}),Object(h.jsx)("td",{children:e.died}),Object(h.jsx)("td",{children:null!==(t=e.mother)&&void 0!==t&&t.slug?Object(h.jsx)(a.b,{to:"/people/".concat(null===(n=e.mother)||void 0===n?void 0:n.slug),className:"has-text-danger",onClick:function(){var t;return c===(null===(t=e.mother)||void 0===t?void 0:t.slug)},children:null===(r=e.mother)||void 0===r?void 0:r.name}):Object(h.jsx)("p",{children:e.motherName?e.motherName:"-"})}),Object(h.jsx)("td",{children:null!==(s=e.father)&&void 0!==s&&s.slug?Object(h.jsx)(a.b,{to:"/people/".concat(null===(l=e.father)||void 0===l?void 0:l.slug),onClick:function(){var t;return c===(null===(t=e.father)||void 0===t?void 0:t.slug)},children:e.fatherName?e.fatherName:"-"}):Object(h.jsx)("p",{children:e.fatherName?e.fatherName:"-"})})]},e.slug)}))})]})},g=c(4),y=c(7),w="https://mate-academy.github.io/react_people-table/api/people.json";function k(e){return new Promise((function(t){return setTimeout(t,e)}))}function C(){return(C=Object(y.a)(Object(g.a)().mark((function e(){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(500).then((function(){return fetch(w)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(){return Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},P=function(){return Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},S=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(l.a)(a,2),o=r[0],j=r[1],d=Object(i.useState)(!1),u=Object(l.a)(d,2),b=u[0],m=u[1];Object(i.useEffect)((function(){m(!0),function(){return C.apply(this,arguments)}().then(n).catch((function(e){throw j(!0),e})).finally((function(){return m(!1)}))}),[]);var O=Object(i.useMemo)((function(){return c.map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName}));return Object(s.a)(Object(s.a)({},e),{},{mother:t,father:n})}))}),[c]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(h.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(h.jsx)(p,{})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("div",{className:"box table-container",children:[b&&Object(h.jsx)(f,{}),o&&Object(h.jsx)(L,{}),!o&&!b&&0===c.length&&Object(h.jsx)(P,{}),0!==c.length&&!o&&Object(h.jsx)(N,{allPeople:O})]})})]})})]})},A=function(){var e=function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})};return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(a.c,{to:"/",className:e,children:"Home"}),Object(h.jsx)(a.c,{to:"/people",className:e,children:"People"})]})})})},q=function(){return Object(h.jsx)("h1",{className:"title",children:"Home Page"})},F=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})},M=(c(40),function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(A,{}),Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/",element:Object(h.jsx)(q,{})}),Object(h.jsx)(r.b,{path:"/home",element:Object(h.jsx)(r.a,{to:"/",replace:!0})}),Object(h.jsxs)(r.b,{path:"people",children:[Object(h.jsx)(r.b,{index:!0,element:Object(h.jsx)(S,{})}),Object(h.jsx)(r.b,{path:":slug",element:Object(h.jsx)(S,{})})]}),Object(h.jsx)(r.b,{path:"*",element:Object(h.jsx)(F,{})})]})})})]})});Object(n.createRoot)(document.getElementById("root")).render(Object(h.jsx)(a.a,{children:Object(h.jsx)(M,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.3a47b2a3.chunk.js.map
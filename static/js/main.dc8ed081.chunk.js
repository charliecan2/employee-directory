(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(16),a=c.n(s),i=(c(22),c(4)),o=c(7),l=(c(23),c(24),c(0));var j=function(){return Object(l.jsxs)("div",{className:"directoryHeader",children:[Object(l.jsx)("header",{className:"directoryTitle",children:"Employee Directory"}),Object(l.jsx)("p",{className:"directoryParagraph",children:"Click on First or Last Name to sort employee's by their names in alphabetical order."}),Object(l.jsx)("p",{className:"directoryParagraph",children:"You can even search for an employee by typing their name onto the search bar."})]})};var h=function(e){return Object(l.jsx)("form",{className:"search",children:Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{value:e.search,onChange:e.handleInputChange,type:"text",className:"form-control",placeholder:"Type employee's first or last name to search for them",id:"term"})})})};var d=function(e){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(h,{handleInputChange:e.handleInputChange}),Object(l.jsx)("br",{}),Object(l.jsxs)("table",{className:"table table-striped table-responsive",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Image"}),Object(l.jsx)("th",{scope:"col",children:Object(l.jsx)("a",{href:"#",onClick:e.sortFirstAsc,children:"First Name"})}),Object(l.jsx)("th",{scope:"col",children:Object(l.jsx)("a",{href:"#",onClick:e.sortLastAsc,children:"Last Name"})}),Object(l.jsx)("th",{scope:"col",children:"Email"}),Object(l.jsx)("th",{scope:"col",children:"Phone"}),Object(l.jsx)("th",{scope:"col",children:"DOB (yyyy/mm/dd)"})]})}),Object(l.jsx)("tbody",{children:e.children})]})]})};var b=function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:e.picture,alt:"employee-pic"})}),Object(l.jsx)("td",{children:e.firstname}),Object(l.jsx)("td",{children:e.lastname}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"mailto:".concat(e.email),type:"mail",children:e.email})}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.dob})]})},u=c(17),m=c.n(u),p=function(){return m.a.get("https://randomuser.me/api/?nat=us&exc=login&noinfo&results=25")};var O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(o.a)(s,2),h=a[0],u=a[1];return Object(n.useEffect)((function(){p().then((function(e){console.log(e.data.results),r(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{sortFirstAsc:function(e){e.preventDefault();var t=Object(i.a)(c).sort((function(e,t){var c=e.name.first,n=t.name.first;return c<n?-1:c>n?1:0}));r(t)},sortLastAsc:function(e){e.preventDefault();var t=Object(i.a)(c).sort((function(e,t){var c=e.name.last,n=t.name.last;return c<n?-1:c>n?1:0}));r(t)},handleInputChange:function(e){u(e.target.value),console.log(h)},children:c.filter((function(e){return""===h.trim()||e.name.first.toLowerCase().includes(h.trim().toLowerCase())||e.name.last.toLowerCase().includes(h.trim().toLowerCase())?e:void 0})).map((function(e){return Object(l.jsx)(b,{picture:e.picture.large,firstname:e.name.first,lastname:e.name.last,email:e.email,phone:e.phone,dob:e.dob.date.slice(0,10).replace("-","/").replace("-","/")})}))})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};c(44);a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.dc8ed081.chunk.js.map
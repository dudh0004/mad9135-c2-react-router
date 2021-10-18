(this["webpackJsonpmy-react-router-app"]=this["webpackJsonpmy-react-router-app"]||[]).push([[0],{16:function(e,s,t){},26:function(e,s,t){},28:function(e,s,t){},37:function(e,s,t){},38:function(e,s,t){},39:function(e,s,t){},40:function(e,s,t){},41:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),r=t(17),n=t.n(r),i=(t(26),t(12)),l=t.n(i),d=t(18),j=t(21),o=t(5),h=(t(28),t(0));function m(e){return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)(o.b,{activeClassName:"active",to:"/",exact:!0,children:"Home"}),Object(h.jsx)(o.b,{activeClassName:"active",to:"/users",children:"User List"}),Object(h.jsx)(o.b,{activeClassName:"active",to:"/addresses",children:"Address List"})]})}t(37);function u(e){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("p",{className:"para",children:"This is the home page."}),Object(h.jsx)("p",{className:"para",children:"Click on user list for list of users . For more details of user please click on the More Details button."}),Object(h.jsx)("p",{className:"para",children:"Go to Address List page to see detailed User profile by clicking on the first name of each user."})]})}t(9),t(10),t(11),t(16);function b(e){var s=e.result;return Object(h.jsxs)("div",{className:"users",children:[0===s.length&&Object(h.jsx)("p",{children:"Loading..."}),s.map((function(e,s){return Object(h.jsx)("div",{className:"users-list",children:Object(h.jsxs)("div",{className:"main-card",children:[Object(h.jsx)("div",{className:"card-photo"}),Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:e.picture.medium,alt:"image1"})}),Object(h.jsxs)("div",{className:"userDetails",children:[Object(h.jsxs)("h2",{className:"name",children:[e.name.first,"    ",e.name.last]}),Object(h.jsx)("h3",{className:"email",children:e.email}),Object(h.jsx)("h3",{className:"cell",children:e.cell})]}),Object(h.jsx)("div",{className:"moreDetails",children:Object(h.jsx)(o.b,{to:{pathname:"/users/".concat(s)},children:"More Details"})})]})},e.email)}))]})}t(38);function x(e){var s=e.result.sort((function(e,s){return e.name.last>s.name.last?1:e.name.last<s.name.last?-1:0}));return Object(h.jsxs)("div",{className:"addresses",children:[0===s.length&&Object(h.jsx)("p",{children:"Loading..."}),Object(h.jsxs)("table",{className:"address",children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"First Name"}),Object(h.jsx)("th",{children:"Last Name"}),Object(h.jsx)("th",{children:"Address"})]}),s.map((function(e,s){return Object(h.jsxs)("tr",{children:[Object(h.jsx)(o.b,{to:{pathname:"/users/".concat(s)},children:Object(h.jsxs)("td",{className:"firstName",children:[" ",e.name.first]})}),Object(h.jsx)("td",{children:e.name.last}),Object(h.jsxs)("td",{children:[e.location.street.number,"  ",e.location.street.name,", ",e.location.city,", ",e.location.state,", ",e.location.postcode]})]})}))]})]})}var O=t(2);t(39);function p(e){var s=e.result,t=Object(O.g)().id;return console.log(s),Object(h.jsx)("div",{className:"usersDetails",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col s12 m7",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("img",{src:s[t].picture.large,alt:"myImage"})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("p",{className:"userName teal-text text-darken-4",children:[s[t].name.first,"  ",s[t].name.last]}),Object(h.jsxs)("p",{className:"addressDetail teal-text text-darken-2",children:["Address: ",s[t].location.street.number,"  ",s[t].location.street.name,", ",s[t].location.city,", ",s[t].location.state,", ",s[t].location.postcode]}),Object(h.jsxs)("p",{className:"details teal-text text-darken-2",children:["uuid:      ",s[t].login.uuid]}),Object(h.jsxs)("p",{className:"details teal-text text-darken-2",children:["Username:  ",s[t].login.username]}),Object(h.jsxs)("p",{className:"details teal-text text-darken-2",children:["Password:  ",s[t].login.password]})]})]})})})})}t(40);var f=function(){var e=Object(a.useState)([]),s=Object(j.a)(e,2),t=s[0],c=s[1];function r(){return(r=Object(d.a)(l.a.mark((function e(){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?seed=dudh0004&format=json&nat=au,ca,nz,gb,us&results=32",e.next=3,fetch("https://randomuser.me/api/?seed=dudh0004&format=json&nat=au,ca,nz,gb,us&results=32");case 3:return s=e.sent,e.next=6,s.json();case 6:return t=e.sent,e.abrupt("return",c(t.results));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){console.log("useEffect was called."),function(){r.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsx)(m,{})}),Object(h.jsx)("main",{children:Object(h.jsxs)(O.d,{children:[Object(h.jsx)(O.b,{path:"/users",exact:!0,children:Object(h.jsx)(b,{result:t})}),Object(h.jsx)(O.b,{path:"/users/:id",children:Object(h.jsx)(p,{result:t})}),Object(h.jsx)(O.b,{path:"/addresses",children:Object(h.jsx)(x,{result:t})}),Object(h.jsx)(O.b,{path:"/",exact:!0,children:Object(h.jsx)(u,{})}),Object(h.jsx)(O.a,{to:"/"})]})})]})};n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(o.a,{hashType:"hashbang",children:Object(h.jsx)(f,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5c0a1792.chunk.js.map
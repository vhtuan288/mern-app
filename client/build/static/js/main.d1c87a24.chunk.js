(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),i=t.n(r),s=t(18),a=t.n(s),d=t(4),j=t(6),o=t(3),u=t.n(o),p=t(7),b=t(9),l=t(8),h=t.n(l);t(42);var x=function(){var e=Object(r.useState)({name:"",description:"",brand:"",price:""}),n=Object(b.a)(e,2),t=n[0],i=n[1],s=Object(r.useState)([]),a=Object(b.a)(s,2),o=a[0],l=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/products");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,l(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}));var x=function(e){var n=e.target,t=n.name,c=n.value;i((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(d.a)({},t,c))}))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Product List"}),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.a.post("/products",{name:t.name,brand:t.brand,description:t.description,price:t.price}).then((function(e){i({name:"",description:"",brand:"",price:""})})).catch((function(e){return console.log(e)}))},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",name:"name",value:t.name,onChange:x}),Object(c.jsx)("span",{children:"Name"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",name:"brand",value:t.brand,onChange:x}),Object(c.jsx)("span",{children:"Brand"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"inputfield",name:"description",value:t.description,onChange:x}),Object(c.jsx)("span",{children:"Description"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"number",name:"price",value:t.price,onChange:x}),Object(c.jsx)("span",{children:"Price"})]}),Object(c.jsx)("button",{type:"submit",children:"Add"})]})})]}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:o.length>0&&o.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("div",{children:e.brand}),Object(c.jsx)("div",{children:e.description}),Object(c.jsx)("div",{children:e.price})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return n=e._id,void function(){var e=Object(p.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/products/".concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()();var n},children:"Delete"})})]},e._id)}))})})]})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d1c87a24.chunk.js.map
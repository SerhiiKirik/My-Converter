(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),a=n(9),u=n(4),o=n(3),s=n(2),i=n.n(s),f=n(1),p=(n(15),"http://data.fixer.io/api/"),l="6e759ac0db7ec2e8aab188810ff9cef0",b=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error: ".concat(n.status,": ").concat(n.statusText));case 5:return e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:"",e.abrupt("return",b("".concat(p).concat(t,"?access_key=").concat(l,"&").concat(n)));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=n(0),d=function(e){var t=e.currencyOptions,n=e.selectedCurrency,c=e.onChangeCurrency,r=e.amount,a=e.onChangeAmount,u=e.id;return Object(O.jsxs)("div",{className:"App__input",children:[Object(O.jsx)("input",{type:"text",className:"App__input",value:r,onChange:a,id:u,defaultValue:0}),Object(O.jsx)("select",{value:n,onChange:c,children:t.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))})]})},h=function(){var e=Object(f.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(f.useState)(""),p=Object(o.a)(s,2),l=p[0],b=p[1],h=Object(f.useState)(""),v=Object(o.a)(h,2),g=v[0],m=v[1],x=Object(f.useState)(0),y=Object(o.a)(x,2),C=y[0],w=y[1],k=Object(f.useState)(0),_=Object(o.a)(k,2),A=_[0],E=_[1],S=Object(f.useState)(0),N=Object(o.a)(S,2),J=N[0],B=N[1],I=n(17),M=function(e){console.log(e.target.value),"from"===e.target.id?B(+e.target.value):E(+e.target.value)},T=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("latest","format=1");case 3:t=e.sent,n=Object.keys(t.rates)[0],r(Object(a.a)(Object.keys(t.rates))),b(t.base),m(n),w(+t.rates[n]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn("Error has occurred when fetching latest rates.");case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(f.useEffect)((function(){T()}),[]);var V=Object(f.useMemo)((function(){return I.debounce((function(e,t){t(e)}),1e3)}),[]);return Object(f.useEffect)((function(){console.log(J,C),B(A?A/C:0),V(A?A/C:0,B)}),[A]),Object(f.useEffect)((function(){console.log(A,C),E(J*C),V(J*C,E)}),[J]),Object(O.jsxs)("div",{className:"App__wrapper",children:[Object(O.jsx)(d,{currencyOptions:c,selectedCurrency:l,onChangeCurrency:function(e){b(e.target.value)},amount:J,onChangeAmount:M,id:"from"}),Object(O.jsx)("div",{className:"App__title",children:"Convert"}),Object(O.jsx)(d,{currencyOptions:c,selectedCurrency:g,onChangeCurrency:function(e){m(e.target.value)},amount:A,onChangeAmount:M,id:"to"})]})};r.a.render(Object(O.jsx)(h,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.faf6a38a.chunk.js.map
(this["webpackJsonpspeed-reading-app"]=this["webpackJsonpspeed-reading-app"]||[]).push([[0],{30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(15),o=n.n(s),a=n(14),r=n(3);var c=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:e.data})})};var d=function(e){return Object(r.jsxs)("div",{children:[0===e.status?Object(r.jsx)("button",{className:"word-count-btn word-count-btn-gre",onClick:e.start,children:"Start"}):"",1===e.status?Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"word-count-btn word-count-btn-red",onClick:e.stop,children:"Stop"}),Object(r.jsx)("button",{className:"word-count-btn word-count-btn-yel",onClick:e.reset,children:"Reset"})]}):"",2===e.status?Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"word-count-btn word-count-btn-gre",onClick:e.resume,children:"Resume"}),Object(r.jsx)("button",{className:"word-count-btn word-count-btn-yel",onClick:e.reset,children:"Reset"})]}):""]})},l=(n(30),{data:"Convincing someone to change their mind is really the process of convincing them to change their tribe. If they abandon their beliefs, they run the risk of losing social ties. You can\u2019t expect someone to change their mind if you take away their community too. You have to give them somewhere to go. Nobody wants their worldview torn apart if loneliness is the outcome. The way to change people\u2019s minds is to become friends with them, to integrate them into your tribe, to bring them into your circle. Now, they can change their beliefs without the risk of being abandoned socially. The British philosopher Alain de Botton suggests that we simply share meals with those who disagree with us Sitting down at a table with a group of strangers has the incomparable and odd benefit of making it a little more difficult to hate them with impunity. Prejudice and ethnic strife feed off abstraction. However, the proximity required by a meal something about handing dishes around, unfurling napkins at the same moment, even asking a stranger to pass the salt disrupts our ability to cling to the belief that the outsiders who wear unusual clothes and speak in distinctive accents deserve to be sent home or assaulted. For all the large-scale political solutions which have been proposed to salve ethnic conflict, there are few more effective ways to promote tolerance between suspicious neighbours than to force them to eat supper together. Perhaps it is not difference, but distance that breeds tribalism and hostility. As proximity increases, so does understanding. I am reminded of Abraham Lincoln's quote, I don't like that man. I must get to know him better. Facts don't change our minds. Friendship does."}),h=n(54),u=n(52),b=n(56),m=n(55);var j=function(){var e=l.data.split(" "),t=0,n=Object(i.useState)({word:e[t]}),s=Object(a.a)(n,2),o=s[0],j=s[1],p=Object(i.useState)(),g=Object(a.a)(p,2),f=g[0],w=g[1],v=Object(i.useState)(0),O=Object(a.a)(v,2),x=O[0],y=O[1],k=Object(i.useState)(60),N=Object(a.a)(k,2),C=N[0],I=N[1],S=function(){B(),y(1),w(setInterval(B,60/C*1e3))},B=function(){t>=e.length&&(t=0),j({word:e[t++]})};return Object(r.jsx)("div",{className:"main-section",children:Object(r.jsxs)("div",{className:"clock-holder",children:[Object(r.jsx)("h1",{children:"Test your Speed Reading skill"}),Object(r.jsxs)("div",{className:"word-count",children:[Object(r.jsx)(c,{data:o.word}),Object(r.jsx)(d,{status:x,resume:function(){S()},reset:function(){clearInterval(f),y(0),I(60),j({word:e[0]})},stop:function(){clearInterval(f),y(2)},start:S})]}),Object(r.jsx)(u.a,{id:"input-slider",gutterBottom:!0,children:"Choose words per minute"}),Object(r.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",children:[Object(r.jsx)(h.a,{item:!0,xs:!0,children:Object(r.jsx)(b.a,{value:"number"===typeof C?C:0,onChange:function(e,t){I(t)},"aria-labelledby":"input-slider"})}),Object(r.jsx)(h.a,{item:!0,children:Object(r.jsx)(m.a,{value:C,margin:"dense",onChange:function(e){I(""===e.target.value?"":Number(e.target.value))},onBlur:function(){C<0?I(0):C>300&&I(300)},inputProps:{step:5,min:0,max:300,type:"number","aria-labelledby":"input-slider"}})})]})]})})};o.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fe4c07a7.chunk.js.map
(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{164:function(e,n,t){"use strict";(function(e){t(175);var r=t(21),a=t(4),c=t(53),o=t(20),i=t(1);n.a=function(){var n=e.env_PUBLIC_URL;return Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(r.a,{basename:n,children:Object(i.jsx)(o.a,{children:Object(i.jsxs)(a.c,{children:[Object(i.jsx)(a.a,{path:"todos",element:Object(i.jsx)(c.d,{})}),Object(i.jsx)(a.a,{path:"login",element:Object(i.jsx)(c.b,{})}),Object(i.jsx)(a.a,{path:"signup",element:Object(i.jsx)(c.c,{})}),Object(i.jsx)(a.a,{path:"*",element:Object(i.jsx)(c.a,{})})]})})})})}}).call(this,t(12))},174:function(e,n,t){},175:function(e,n,t){},197:function(e,n){},199:function(e,n){},20:function(e,n,t){"use strict";t.d(n,"b",(function(){return x})),t.d(n,"a",(function(){return m}));var r=t(3),a=t(7),c=t(6),o=t(16),i=t(39),s=t.n(i),u="https://todo-list.alphacamp.io/api/auth",l=function(){var e=Object(a.a)(Object(r.a)().mark((function e(n){var t,a,c,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,a=n.password,e.prev=1,e.next=4,s.a.post("".concat(u,"/login"),{username:t,password:a});case 4:if(c=e.sent,i=c.data,!i.authToken){e.next=10;break}return console.log(i),e.abrupt("return",Object(o.a)({success:!0},i));case 10:return e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(1),console.error("[Login Failed]:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(Object(r.a)().mark((function e(n){var t,a,c,i,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,a=n.email,c=n.password,e.prev=1,e.next=4,s.a.post("".concat(u,"/register"),{username:t,email:a,password:c});case 4:if(i=e.sent,l=i.data,!l.authToken){e.next=9;break}return e.abrupt("return",Object(o.a)({success:!0},l));case 9:return e.abrupt("return",l);case 12:e.prev=12,e.t0=e.catch(1),console.error("[Register Failed]:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(Object(r.a)().mark((function e(n){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat(u,"/test-token"),{headers:{Authorization:"Bearer "+n}});case 3:return t=e.sent,e.abrupt("return",t.data.success);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Check Permission Fail:]",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),b=t(0),f=t(66),j=t(4),h=t(1),v={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},O=Object(b.createContext)(v),x=function(){return Object(b.useContext)(O)},m=function(e){var n=e.children,t=Object(b.useState)(!1),o=Object(c.a)(t,2),i=o[0],s=o[1],u=Object(b.useState)(null),v=Object(c.a)(u,2),x=v[0],m=v[1],g=Object(j.i)().pathname;return Object(b.useEffect)((function(){var e=function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var n,t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("authToken")){e.next=5;break}return s(!1),m(null),e.abrupt("return");case 5:return e.next=7,p(n);case 7:e.sent?(s(!0),t=f.decode(n),m(t)):(s(!1),m(null));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[g]),Object(h.jsx)(O.Provider,{value:{isAuthenticated:i,currentMember:x&&{id:x.sub,name:x.name},register:function(){var e=Object(a.a)(Object(r.a)().mark((function e(n){var t,a,c,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({username:n.username,email:n.email,password:n.password});case 2:return t=e.sent,a=t.success,c=t.authToken,(o=f.decode(c))?(m(o),s(!0),localStorage.setItem("authToken",c)):(m(null),s(!1)),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),login:function(){var e=Object(a.a)(Object(r.a)().mark((function e(n){var t,a,c,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({username:n.username,password:n.password});case 2:return t=e.sent,a=t.success,c=t.authToken,(o=f.decode(c))?(m(o),s(!0),localStorage.setItem("authToken",c)):(m(null),s(!1)),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),logout:function(){localStorage.removeItem("authToken"),m(null),s(!1)}},children:n})}},208:function(e,n){},210:function(e,n){},238:function(e,n){},240:function(e,n){},241:function(e,n){},246:function(e,n){},248:function(e,n){},267:function(e,n){},279:function(e,n){},282:function(e,n){},314:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(163),o=t.n(c),i=(t(174),t(164)),s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,315)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))},u=t(1);o.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(i.a,{})})),s()},53:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return be})),t.d(n,"c",(function(){return fe})),t.d(n,"d",(function(){return ye}));var r,a,c,o,i,s,u,l,d=t(20),p=t(0),b=t(4),f=function(){var e=Object(d.b)().isAuthenticated,n=Object(b.l)();Object(p.useEffect)((function(){n(e?"/todos":"/login")}),[n,e])},j=t(3),h=t(7),v=t(6),O=t(10),x=t(11),m=x.a.div(r||(r=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),g=x.a.div(a||(a=Object(O.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),w=x.a.button(c||(c=Object(O.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),k=x.a.div(o||(o=Object(O.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"]))),y=["title","titleId"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C.apply(this,arguments)}function D(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function E(e,n){var t=e.title,r=e.titleId,a=D(e,y);return p.createElement("svg",C({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),t?p.createElement("title",{id:r},t):null,i||(i=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),s||(s=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),u||(u=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),l||(l=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}var T,S,F,z,N,R,M,I,L,P,A,B,K=p.forwardRef(E),V=(t.p,t.p+"static/media/check-active.95ca055c.svg"),Z=t.p+"static/media/check-circle.30720b46.svg",U=t.p+"static/media/check-hover.5e00062b.svg",H=t(1),J=x.a.div(T||(T=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),_=x.a.label(S||(S=Object(O.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),q=x.a.input(F||(F=Object(O.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"]))),G=function(e){var n=e.type,t=e.label,r=e.placeholder,a=e.value,c=e.onChange;return Object(H.jsxs)(J,{children:[Object(H.jsx)(_,{children:t}),Object(H.jsx)(q,{type:n||"text",value:a,placeholder:r,onChange:function(e){return null===c||void 0===c?void 0:c(e.target.value)}})]})},$=x.a.header(z||(z=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),Q=x.a.div(N||(N=Object(O.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"]))),W=function(e){var n=e.username;return Object(H.jsxs)($,{children:[Object(H.jsx)("h3",{children:"Tasks"}),Object(H.jsxs)(Q,{children:["Hi ",Object(H.jsx)("span",{children:n})]})]})},X=t(51),Y=x.a.div(R||(R=Object(O.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),ee=x.a.label(M||(M=Object(O.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),ne=x.a.div(I||(I=Object(O.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),te=x.a.div(L||(L=Object(O.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"]))),re=function(e){var n=e.inputValue,t=e.onChange,r=e.onKeyDown,a=e.onAddTodo;return Object(H.jsxs)(Y,{className:Object(X.a)("",{active:n.length>0}),children:[Object(H.jsx)(ee,{className:"icon",htmlFor:"add-todo-input"}),Object(H.jsx)(ne,{children:Object(H.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:n,onChange:function(e){null===t||void 0===t||t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(null===r||void 0===r||r())}})}),Object(H.jsx)(te,{className:Object(X.a)("",{active:n.length>0}),children:Object(H.jsx)("button",{className:"btn-reset",onClick:function(){return null===a||void 0===a?void 0:a()},children:"\u65b0\u589e"})})]})},ae=x.a.div(P||(P=Object(O.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),V,Z,U),ce=function(e){var n=e.todo,t=e.onToggleDone,r=e.onSave,a=e.onDelete,c=e.onChangeMode,o=Object(p.useRef)(null);return Object(H.jsxs)(ae,{className:Object(X.a)("",{done:n.isDone,edit:n.isEdit}),children:[Object(H.jsx)("div",{className:"task-item-checked",children:Object(H.jsx)("span",{className:"icon icon-checked",onClick:function(){return null===t||void 0===t?void 0:t(n.id)}})}),Object(H.jsxs)("div",{className:"task-item-body",onDoubleClick:function(){return null===c||void 0===c?void 0:c({id:n.id,isEdit:!0})},onKeyDown:function(e){e.target.value.length>0&&"Enter"===e.key?null===r||void 0===r||r({id:n.id,title:e.target.value}):"Escape"===e.key&&(null===c||void 0===c||c({id:n.id,isEdit:!1}))},children:[Object(H.jsx)("span",{className:"task-item-body-text",children:n.title}),Object(H.jsx)("input",{className:"task-item-body-input",defaultValue:n.title,ref:o})]}),Object(H.jsx)("div",{className:"task-item-action ",children:Object(H.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:function(){return null===a||void 0===a?void 0:a(n.id)}})})]})},oe=function(e){var n=e.todos,t=e.onToggleDone,r=e.onSave,a=e.onDelete,c=e.onChangeMode;return Object(H.jsxs)("div",{children:["TodoCollection",n.map((function(e){return Object(H.jsx)(ce,{todo:e,onSave:function(e){var n=e.id,t=e.title;return null===r||void 0===r?void 0:r({id:n,title:t})},onToggleDone:function(e){return null===t||void 0===t?void 0:t(e)},onChangeMode:function(e){var n=e.id,t=e.isEdit;null===c||void 0===c||c({id:n,isEdit:t})},onDelete:function(e){return null===a||void 0===a?void 0:a(e)}},e.id)}))]})},ie=x.a.footer(A||(A=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),se=x.a.button(B||(B=Object(O.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),ue=function(e){var n=e.todoLength,t=Object(d.b)().logout;return Object(H.jsxs)(ie,{children:[Object(H.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a ",n]}),Object(H.jsx)(se,{onClick:function(){t()},children:"\u767b\u51fa"})]})},le=t(21),de=t(40),pe=t.n(de),be=function(){var e=Object(p.useState)(""),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(""),c=Object(v.a)(a,2),o=c[0],i=c[1],s=Object(b.l)(),u=Object(d.b)(),l=u.login,f=u.isAuthenticated,O=function(){var e=Object(h.a)(Object(j.a)().mark((function e(){return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length&&0!==o.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,l({username:t,password:o});case 4:if(!e.sent){e.next=8;break}return pe.a.fire({position:"top",icon:"success",title:"\u767b\u5165\u6210\u529f",showConfirmButton:!1,timer:1e3}),e.abrupt("return");case 8:pe.a.fire({position:"top",icon:"error",title:"\u767b\u5165\u5931\u6557",showConfirmButton:!1,timer:1e3});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){f&&s("/todos")}),[s,f]),Object(H.jsxs)(m,{children:[Object(H.jsx)("div",{children:Object(H.jsx)(K,{})}),Object(H.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(H.jsx)(g,{children:Object(H.jsx)(G,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:t,onChange:function(e){return r(e)}})}),Object(H.jsx)(g,{children:Object(H.jsx)(G,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:o,onChange:function(e){return i(e)}})}),Object(H.jsx)(w,{onClick:O,children:"\u767b\u5165"}),Object(H.jsx)(le.b,{to:"/signup",children:Object(H.jsx)(k,{children:"\u8a3b\u518a"})})]})},fe=function(){var e=Object(p.useState)(""),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(""),c=Object(v.a)(a,2),o=c[0],i=c[1],s=Object(p.useState)(""),u=Object(v.a)(s,2),l=u[0],f=u[1],O=Object(b.l)(),x=Object(d.b)(),y=x.register,C=x.isAuthenticated,D=function(){var e=Object(h.a)(Object(j.a)().mark((function e(){return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length&&0!==o.length&&0!==l.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y({username:t,password:o,email:l});case 4:if(!e.sent){e.next=8;break}return pe.a.fire({position:"top",icon:"success",title:"\u8a3b\u518a\u6210\u529f",showConfirmButton:!1,timer:1e3}),e.abrupt("return");case 8:pe.a.fire({position:"top",icon:"error",title:"\u8a3b\u518a\u5931\u6557",showConfirmButton:!1,timer:1e3});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){C&&O("/todos")}),[O,C]),Object(H.jsxs)(m,{children:[Object(H.jsx)("div",{children:Object(H.jsx)(K,{})}),Object(H.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(H.jsx)(g,{children:Object(H.jsx)(G,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u865f",value:t,onChange:function(e){return r(e)}})}),Object(H.jsx)(g,{children:Object(H.jsx)(G,{label:"email",placeholder:"\u8acb\u8f38\u5165 email",value:l,onChange:function(e){return f(e)}})}),Object(H.jsx)(g,{children:Object(H.jsx)(G,{label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:o,onChange:function(e){return i(e)}})}),Object(H.jsx)(w,{onClick:D,children:"\u8a3b\u518a"}),Object(H.jsx)(le.b,{to:"/login",children:Object(H.jsx)(k,{children:"\u53d6\u6d88"})})]})},je=t(16),he=t(15),ve=t(39),Oe="https://todo-list.alphacamp.io/api",xe=t.n(ve).a.create({baseURL:Oe});xe.interceptors.request.use((function(e){var n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(function(e){console.error(e)}));var me=function(){var e=Object(h.a)(Object(j.a)().mark((function e(){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.get("".concat(Oe,"/todos"));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Get Todo error fail] :",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(h.a)(Object(j.a)().mark((function e(n){var t,r,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.title,r=n.isDone,e.next=4,xe.post("".concat(Oe,"/todos"),{title:t,isDone:r});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.error("[Post Todo error fail] :",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),we=function(){var e=Object(h.a)(Object(j.a)().mark((function e(n){var t,r,a,c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.id,r=n.title,a=n.isDone,c=xe.patch("".concat(Oe,"/todos/").concat(t),{title:r,isDone:a}),e.abrupt("return",c.data);case 6:e.prev=6,e.t0=e.catch(0),console.error("[Patch Todo error fail] :",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),ke=function(){var e=Object(h.a)(Object(j.a)().mark((function e(n){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.delete("".concat(Oe,"/todos/").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Delete Todo error fail] :",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),ye=function(){var e=Object(p.useState)(""),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)([]),c=Object(v.a)(a,2),o=c[0],i=c[1],s=Object(b.l)(),u=Object(d.b)(),l=u.isAuthenticated,f=u.currentMember,O=function(){var e=Object(h.a)(Object(j.a)().mark((function e(){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,ge({title:t,isDone:!1});case 5:n=e.sent,i((function(e){return[].concat(Object(he.a)(e),[{id:n.id,title:n.title,isDone:n.isDone,isEdit:!1}])})),r(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(Object(j.a)().mark((function e(){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,ge({title:t,isDone:!1});case 5:n=e.sent,i((function(e){return[].concat(Object(he.a)(e),[{id:n.id,title:n.title,isDone:n.isDone,isEdit:!1}])})),r(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(Object(j.a)().mark((function e(n){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.find((function(e){return e.id===n})),e.prev=1,e.next=4,we({id:n,isDone:!t.isDone});case 4:i((function(e){return e.map((function(e){return e.id===n?Object(je.a)(Object(je.a)({},e),{},{isDone:!e.isDone}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(Object(j.a)().mark((function e(n){var t,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,r=n.title,e.prev=1,e.next=4,we({id:t,title:r});case 4:i((function(e){return e.map((function(e){return e.id===t?Object(je.a)(Object(je.a)({},e),{},{title:r,isEdit:!1}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(Object(j.a)().mark((function e(n){return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ke(n);case 3:i((function(e){return e.filter((function(e){return n!==e.id}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(j.a)().mark((function e(){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me();case 3:n=e.sent,i(n.map((function(e){return Object(je.a)(Object(je.a)({},e),{},{isEdit:!1})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(p.useEffect)((function(){l||s("/login")}),[s,l]),Object(H.jsxs)("div",{children:["TodoPage",Object(H.jsx)(W,{username:null===f||void 0===f?void 0:f.name}),Object(H.jsx)(re,{inputValue:t,onChange:function(e){r(e)},onAddTodo:O,onKeyDown:x}),Object(H.jsx)(oe,{todos:o,onToggleDone:m,onChangeMode:function(e){var n=e.id,t=e.isEdit;i((function(e){return e.map((function(e){return e.id===n?Object(je.a)(Object(je.a)({},e),{},{isEdit:t}):Object(je.a)(Object(je.a)({},e),{},{isEdit:!1})}))}))},onSave:g,onDelete:w}),Object(H.jsx)(ue,{todoLength:o.length})]})}}},[[314,1,2]]]);
//# sourceMappingURL=main.9dfc3632.chunk.js.map
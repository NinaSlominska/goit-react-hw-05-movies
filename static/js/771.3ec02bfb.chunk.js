"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{277:function(n,t,e){e.d(t,{Hx:function(){return m},Pv:function(){return p},Tg:function(){return u},Wg:function(){return l},uV:function(){return x}});var r=e(861),a=e(757),i=e.n(a),o=e(243),c="b4b59a799c6c994a741788cb06805fdc";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/3/trending/movie/day",{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/3/search/movie",{params:{api_key:c,query:t,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/3/movie/".concat(t),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/3/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/3/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/"},835:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,i=e(168),o=e(87),c=e(444),u=c.ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n"]))),s=(0,c.ZP)(o.OL)(a||(a=(0,i.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 18px;\n  text-decoration: underline;\n  &.active {\n    color: white;\n    background-color: teal;\n  }\n  &:hover {\n    color: tomato;\n  }\n"]))),p=e(689),f=e(184);function l(n){var t=n.films,e=(0,p.TH)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(u,{children:t.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})})}},771:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,i,o,c=e(861),u=e(439),s=e(757),p=e.n(s),f=e(277),l=e(835),d=e(791),x=e(168),h=e(444),m=h.ZP.input(r||(r=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;npm i styled-components\n  }\n"]))),v=h.ZP.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),b=h.ZP.form(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=h.ZP.header(o||(o=(0,x.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: tomato;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),y=e(87),Z=e(184),k=function(n){var t,e=n.onSubmit,r=(0,y.lr)(),a=null!==(t=(0,u.Z)(r,1)[0].get("query"))&&void 0!==t?t:"",i=(0,d.useState)(a),o=(0,u.Z)(i,2),c=o[0],s=o[1];return(0,Z.jsx)(g,{children:(0,Z.jsxs)(b,{onSubmit:function(n){n.preventDefault(),c&&e(c)},children:[(0,Z.jsx)(v,{type:"submit",children:"search"}),(0,Z.jsx)(m,{onChange:function(n){s(n.currentTarget.value)},type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})};function w(){var n,t=(0,d.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,y.lr)(),o=(0,u.Z)(i,2),s=o[0],x=o[1],h=null!==(n=s.get("query"))&&void 0!==n?n:"";(0,d.useEffect)((function(){if(h){var n=function(){var n=(0,c.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.Pv)(h);case 3:t=n.sent,a(t.results),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[h]);return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(k,{onSubmit:function(n){x({query:n})}}),r&&(0,Z.jsx)(l.Z,{films:r})]})}}}]);
//# sourceMappingURL=771.3ec02bfb.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[918],{277:function(n,r,t){t.d(r,{Hx:function(){return d},Tg:function(){return i},Wg:function(){return p},uV:function(){return l}});var e=t(861),a=t(757),u=t.n(a),c=t(243),s="b4b59a799c6c994a741788cb06805fdc";function i(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/3/trending/movie/day",{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/3/movie/".concat(r),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/3/movie/".concat(r,"/credits"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/3/movie/".concat(r,"/reviews"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/"},918:function(n,r,t){t.r(r),t.d(r,{default:function(){return l}});var e=t(861),a=t(439),u=t(757),c=t.n(u),s=t(277),i=t(87),o=t(184);function p(n){var r=n.films;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:r.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})})}var f=t(791);function l(){var n=(0,f.useState)([]),r=(0,a.Z)(n,2),t=r[0],u=r[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Tg)();case 3:r=n.sent,u(r.results),console.log(r.results),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending movies"}),t&&(0,o.jsx)(p,{films:t})]})}}}]);
//# sourceMappingURL=918.e3c1fe47.chunk.js.map
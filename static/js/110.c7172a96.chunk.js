"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[110],{277:function(r,t,n){n.d(t,{Hx:function(){return m},Pv:function(){return o},Tg:function(){return s},Wg:function(){return h},uV:function(){return d}});var e=n(861),a=n(757),u=n.n(a),c=n(243),i="b4b59a799c6c994a741788cb06805fdc";function s(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)("/3/trending/movie/day",{params:{api_key:i}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function o(r){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)("/3/search/movie",{params:{api_key:i,query:t,page:1}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function h(r){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)("/3/movie/".concat(t),{params:{api_key:i}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function d(r){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)("/3/movie/".concat(t,"/credits"),{params:{api_key:i}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function m(r){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)("/3/movie/".concat(t,"/reviews"),{params:{api_key:i}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/"},931:function(r,t,n){n.r(t),n.d(t,{default:function(){return f}});var e=n(861),a=n(439),u=n(757),c=n.n(u),i=n(277),s=n(791),p=n(689),o=n(184);function f(){var r=(0,p.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),u=n[0],f=n[1];return(0,s.useEffect)((function(){if(r){var t=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.uV)(r);case 3:n=t.sent,f(n.cast),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[r]),0===u.length?(0,o.jsx)("p",{children:"Sorry we don't have any cast for this movie"}):(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:null===u||void 0===u?void 0:u.map((function(r){var t=r.profile_path,n=r.name,e=r.character,a=r.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t),alt:n}),(0,o.jsx)("p",{children:n}),(0,o.jsx)("p",{children:e})]},a)}))})})}}}]);
//# sourceMappingURL=110.c7172a96.chunk.js.map
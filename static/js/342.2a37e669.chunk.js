"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{277:function(e,r,n){n.d(r,{Hx:function(){return x},Pv:function(){return p},Tg:function(){return u},Wg:function(){return d},uV:function(){return l}});var t=n(861),a=n(757),s=n.n(a),c=n(243),i="b4b59a799c6c994a741788cb06805fdc";function u(){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/3/trending/movie/day",{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/3/search/movie",{params:{api_key:i,query:r,page:1}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/3/movie/".concat(r),{params:{api_key:i}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/3/movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("/3/movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/"},342:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),u=n(689),o=n(277),p=n(87),f=n(184);function d(e){var r,n,t=e.currentFilm,a=t.title,s=t.release_date,c=t.vote_average,o=t.overview,d=t.genres,h=t.poster_path,l=(0,u.TH)(),v=(0,i.useRef)(null!==(r=null===(n=l.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.OL,{to:v.current,state:{from:l},children:"Go back"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(h),alt:a}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[a," ",(0,f.jsx)("span",{children:"(".concat(null===s||void 0===s?void 0:s.slice(0,4),")")})]}),"User Score: ",(0,f.jsxs)("span",{children:[Math.round(10*c),"%"]}),(0,f.jsx)("h3",{children:" Overview"}),(0,f.jsx)("p",{children:o}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:d&&d.map((function(e){return e.name})).join(" | ")})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsx)(p.OL,{to:"cast",children:"Cast"}),(0,f.jsx)(p.OL,{to:"reviews",children:"Reviews"})]}),(0,f.jsx)(i.Suspense,{children:(0,f.jsx)(u.j3,{})})]})}function h(){var e=(0,i.useState)(""),r=(0,a.Z)(e,2),n=r[0],s=r[1],p=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Wg)(p);case 3:r=e.sent,s(r),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,f.jsx)("div",{children:(0,f.jsx)(d,{currentFilm:n})})}}}]);
//# sourceMappingURL=342.2a37e669.chunk.js.map
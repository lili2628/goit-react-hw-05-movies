"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244],{244:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,u,i=e(439),o=e(228),s=e(791),p=e(689),f=e(168),l=e(686),d=l.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),v=(l.Z.li(a||(a=(0,f.Z)([""]))),l.Z.p(c||(c=(0,f.Z)(["\n  margin-bottom: 8px;\n  font-size: 22px;\n  color: var(--accent);\n"])))),h=l.Z.p(u||(u=(0,f.Z)(["\n  font-size: 16px;\n  color: var(--secondary);\n  line-height: 1.68;\n"]))),x=e(184),Z=function(){var n=(0,s.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId;if((0,s.useEffect)((function(){(0,o.tx)(a).then(r)}),[a]),e)return(0,x.jsxs)(d,{children:[0===e.length&&(0,x.jsx)("p",{children:"Nothing"}),e.map((function(n){var t=n.id,e=n.content,r=n.author;return(0,x.jsxs)("li",{children:[(0,x.jsx)(v,{children:r}),(0,x.jsx)(h,{children:e})]},t)}))]})}},228:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return s},tx:function(){return l},z1:function(){return p},zv:function(){return f}});var r=e(861),a=e(687),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="4c022d061e1dc709d01d1f05bf0b4752",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/week?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=244.1e086a0f.chunk.js.map
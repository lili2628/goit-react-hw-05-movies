"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[12],{146:function(n,t,e){e.d(t,{Z:function(){return g}});var r,a,o,c,i,s=e(689),u=e(168),p=e(686),d=e(87),l=p.Z.ul(r||(r=(0,u.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),f=p.Z.li(a||(a=(0,u.Z)(["\n  flex-basis: calc((100% - 100px) / 5);\n  max-height: 100%;\n  min-height: 390px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n"]))),x=(0,p.Z)(d.rU)(o||(o=(0,u.Z)(["\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  &:hover img {\n    filter: grayscale(0);\n  }\n\n  &:hover p {\n    color: var(--accent);\n  }\n"]))),h=p.Z.img(c||(c=(0,u.Z)(["\n  margin-bottom: 5px;\n  filter: grayscale(0.4);\n\n  transition: all 200ms ease-in-out;\n"]))),v=p.Z.p(i||(i=(0,u.Z)(["\n  height: 100%;\n  padding: 10px 8px;\n  font-weight: 500;\n  font-size: 18px;\n  transition: all 200ms ease-in-out;\n"]))),m=e(184);var g=function(n){var t=n.movies,e=(0,s.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title,a=n.original_name,o=n.poster_path;return o?(0,m.jsx)(f,{children:(0,m.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsx)(h,{src:"https://image.tmdb.org/t/p/w500/".concat(o),alt:""}),(0,m.jsx)(v,{children:null!==r&&void 0!==r?r:a})]})},t):(0,m.jsx)(f,{children:(0,m.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsx)(h,{src:"https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png",alt:""}),(0,m.jsx)(v,{children:null!==r&&void 0!==r?r:a})]})},t)}))})})}},12:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,o,c=e(439),i=e(791),s=e(87),u=e(228),p=e(168),d=e(686),l=d.Z.form(r||(r=(0,p.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  gap: 20px;\n"]))),f=d.Z.input(a||(a=(0,p.Z)(["\n  padding: 13px 20px;\n  width: 300px;\n  border-radius: 4px;\n\n  font-size: 18px;\n  color: #3d237f;\n\n  box-shadow: #674ea7;\n  border: 2px solid #250f5c;\n\n  :focus {\n    outline: 3px solid #674ea7;\n  }\n"]))),x=d.Z.button(o||(o=(0,p.Z)(["\n  padding: 8px 14px;\n\n  font-weight: 700;\n  font-size: 22px;\n\n  border-radius: 4px;\n  border: 2px solid #250f5c;\n\n  color: #3d237f;\n  background-color: #d9d2e9;\n  box-shadow: #b4a7d6;\n\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  :hover,\n  :focus-visible {\n    color: #d9d2e9;\n    background-color: #3d237f;\n  }\n\n  :focus {\n    outline: 3px solid var(--bg);\n    box-shadow: 0px 0px 0px 6px var(--accent);\n  }\n"]))),h=e(184);var v=function(n){var t=n.onChange,e=n.onSubmit;return(0,h.jsxs)(l,{onSubmit:e,children:[(0,h.jsx)(f,{type:"text",onChange:t}),(0,h.jsx)(x,{type:"submit",children:"Search"})]})},m=e(146);var g=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(""),o=(0,c.Z)(a,2),p=o[0],d=o[1],l=(0,s.lr)(),f=(0,c.Z)(l,2),x=f[0],g=f[1];return(0,i.useEffect)((function(){var n,t=null!==(n=x.get("query"))&&void 0!==n?n:"";t&&(0,u.z1)(t).then(r)}),[x]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{onSubmit:function(n){n.preventDefault(),g(""!==p?{query:p}:{})},onChange:function(n){d(n.target.value)}}),(0,h.jsx)(m.Z,{movies:e})]})}},228:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return u},tx:function(){return l},z1:function(){return p},zv:function(){return d}});var r=e(861),a=e(687),o=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="4c022d061e1dc709d01d1f05bf0b4752",s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/week?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=12.ce064da3.chunk.js.map
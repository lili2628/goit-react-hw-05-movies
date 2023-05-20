"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[610],{610:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t,s,a,c,i,o,u,d=r(439),l=r(791),p=r(689),h=r(87),f=r(228),v=r(168),x=r(686),m=x.Z.div(t||(t=(0,v.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),w=x.Z.img(s||(s=(0,v.Z)(["\n  border-radius: 4px;\n  box-shadow: var(--main-shadow);\n"]))),j=x.Z.div(a||(a=(0,v.Z)([""]))),Z=x.Z.h2(c||(c=(0,v.Z)(["\n  margin-bottom: 45px;\n  font-weight: 700;\n  font-size: 36px;\n  color: var(--accent);\n  text-shadow: var(--main-shadow);\n"]))),g=x.Z.span(i||(i=(0,v.Z)(["\n  font-weight: 200;\n  color: var(--secondary);\n"]))),k=x.Z.p(o||(o=(0,v.Z)(["\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n  color: var(--accent);\n"]))),b=x.Z.span(u||(u=(0,v.Z)(["\n  font-weight: 300;\n  letter-spacing: 0.05em;\n  color: var(--secondary);\n"]))),y=r(184);var _=function(e){var n=e.movie,r=n.poster_path,t=n.title,s=n.release_date,a=n.vote_average,c=n.overview,i=n.genres,o=s.slice(0,4),u=a.toFixed(1),d=i.map((function(e){return e.name})).join(", ");return r?(0,y.jsxs)(m,{children:[(0,y.jsx)(w,{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:"{title}",width:"350"}),(0,y.jsxs)(j,{children:[(0,y.jsxs)(Z,{children:[t," ",(0,y.jsxs)(g,{children:["(",o,")"]})]}),(0,y.jsxs)(k,{children:["User score: ",(0,y.jsx)(b,{children:u})]}),(0,y.jsxs)(k,{children:["Overview: ",(0,y.jsx)(b,{children:c})]}),(0,y.jsxs)(k,{children:["Genres: ",(0,y.jsx)(b,{children:d})]})]})]}):(0,y.jsxs)(m,{children:[(0,y.jsx)(w,{src:"https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png",alt:"{title}",width:"350"}),(0,y.jsxs)(j,{children:[(0,y.jsxs)(Z,{children:[t," ",(0,y.jsxs)(g,{children:["(",o,")"]})]}),(0,y.jsxs)(k,{children:["User score: ",(0,y.jsx)(b,{children:u})]}),(0,y.jsxs)(k,{children:["Overview: ",(0,y.jsx)(b,{children:c})]}),(0,y.jsxs)(k,{children:["Genres: ",(0,y.jsx)(b,{children:d})]})]})]})};var O=function(){var e,n,r=(0,l.useState)(null),t=(0,d.Z)(r,2),s=t[0],a=t[1],c=(0,p.UO)().movieId,i=(0,p.TH)();if((0,l.useEffect)((function(){(0,f.TP)(c).then(a)}),[c]),!s)return null;var o=null!==(e=null===(n=i.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.rU,{to:o,children:"\u2190 Go back"}),(0,y.jsx)(_,{movie:s}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.OL,{to:"cast",state:{from:o},children:"Cast"}),(0,y.jsx)(h.OL,{to:"reviews",state:{from:o},children:"Reviews"})]}),(0,y.jsx)(l.Suspense,{children:(0,y.jsx)(p.j3,{})})]})}},228:function(e,n,r){r.d(n,{Df:function(){return o},TP:function(){return u},tx:function(){return p},z1:function(){return d},zv:function(){return l}});var t=r(861),s=r(687),a=r.n(s),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="4c022d061e1dc709d01d1f05bf0b4752",o=function(){var e=(0,t.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/all/week?api_key=".concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=610.773294aa.chunk.js.map
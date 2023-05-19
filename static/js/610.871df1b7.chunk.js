"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[610],{610:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,c,s,o,i,u,p=t(439),f=t(791),d=t(689),l=t(87),v=t(228),h=t(168),x=t(686),m=x.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),w=x.Z.img(a||(a=(0,h.Z)(["\n  border-radius: 4px;\n  box-shadow: var(--main-shadow);\n"]))),Z=x.Z.div(c||(c=(0,h.Z)([""]))),g=x.Z.h2(s||(s=(0,h.Z)(["\n  margin-bottom: 45px;\n  font-weight: 700;\n  font-size: 36px;\n  color: var(--accent);\n  text-shadow: var(--main-shadow);\n"]))),j=x.Z.span(o||(o=(0,h.Z)(["\n  font-weight: 200;\n  color: var(--secondary);\n"]))),k=x.Z.p(i||(i=(0,h.Z)(["\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n  color: var(--accent);\n"]))),b=x.Z.span(u||(u=(0,h.Z)(["\n  font-weight: 300;\n  letter-spacing: 0.05em;\n  color: var(--secondary);\n"]))),y=t(184);var _=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.release_date,c=e.vote_average,s=e.overview,o=e.genres,i="https://image.tmdb.org/t/p/w500/".concat(t),u=a.slice(0,4),p=c.toFixed(1),f=o.map((function(n){return n.name})).join(", ");return(0,y.jsxs)(m,{children:[(0,y.jsx)(w,{src:i,alt:"{title}",width:"350"}),(0,y.jsxs)(Z,{children:[(0,y.jsxs)(g,{children:[r," ",(0,y.jsxs)(j,{children:["(",u,")"]})]}),(0,y.jsxs)(k,{children:["User score: ",(0,y.jsx)(b,{children:p})]}),(0,y.jsxs)(k,{children:["Overview: ",(0,y.jsx)(b,{children:s})]}),(0,y.jsxs)(k,{children:["Genres: ",(0,y.jsx)(b,{children:f})]})]})]})};var z=function(){var n,e,t=(0,f.useState)(null),r=(0,p.Z)(t,2),a=r[0],c=r[1],s=(0,d.UO)().movieId,o=(0,d.TH)();if((0,f.useEffect)((function(){(0,v.TP)(s).then(c)}),[s]),!a)return null;var i=null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.rU,{to:i,children:"\u2190 Go back"}),(0,y.jsx)(_,{movie:a}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.OL,{to:"cast",state:{from:i},children:"Cast"}),(0,y.jsx)(l.OL,{to:"reviews",state:{from:i},children:"Reviews"})]}),(0,y.jsx)(f.Suspense,{children:(0,y.jsx)(d.j3,{})})]})}},228:function(n,e,t){t.d(e,{Df:function(){return i},TP:function(){return u},tx:function(){return d},z1:function(){return p},zv:function(){return f}});var r=t(861),a=t(687),c=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="4c022d061e1dc709d01d1f05bf0b4752",i=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/all/week?api_key=".concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=610.871df1b7.chunk.js.map
(this["webpackJsonpmovie-app_2021"]=this["webpackJsonpmovie-app_2021"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(29),r=n.n(i),c=n(9),o=n(2),l=(n(37),n(38),n(1));var u=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};n(40);var m=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:{pathname:"/about",state:{fromNavigation:!0}},children:"About"})]})},j=n(19),d=n.n(j),h=n(31),v=n(11),b=n(12),p=n(14),O=n(13),x=n(32),f=n.n(x),g=n(5),y=n.n(g);n(65);function _(e){var t=e.id,n=e.year,s=e.title,a=e.summary,i=e.poster,r=e.genres;return Object(l.jsx)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:i,genres:r}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:i,alt:s,title:s}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__tile",children:s}),Object(l.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsx)("h5",{className:"movie__year",children:n}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})}_.prototype={id:y.a.number.isRequired,year:y.a.number.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var N=_,w=(n(66),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e._getMovies=Object(h.a)(d.a.mark((function t(){var n,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,console.log(s),e.setState({movies:s,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"getMovies",get:function(){return this._getMovies},set:function(e){this._getMovies=e}},{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(N,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component)),k=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(a.a.Component);var M=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/movie-detail",component:k})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.b9909253.chunk.js.map
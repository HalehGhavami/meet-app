(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),i=(n(13),n(2)),o=n(3),l=n(5),u=n(4),d=(n(14),n(6)),h=n(0),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={expanded:!1},a.toggleExpanded=a.toggleExpanded.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"toggleExpanded",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"event-title",children:this.props.title}),Object(h.jsxs)("div",{className:"basic-info",children:[Object(h.jsx)("span",{children:this.props.startdate}),Object(h.jsx)("span",{children:this.props.location})]}),Object(h.jsx)("button",{className:"show-details",onClick:this.toggleExpanded,children:"Show Details"}),Object(h.jsx)("div",{className:"row ".concat(this.state.expanded?"expanded":"normal")})]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(j,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(h.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={number:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({number:n})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"NumberOfEvents",children:Object(h.jsx)("input",{type:"number",className:"eventNumber",value:this.state.number,onChange:this.handleInputChanged})})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsx)(p,{}),Object(h.jsx)(O,{})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.79b2610f.chunk.js.map
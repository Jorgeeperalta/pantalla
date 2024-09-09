"use strict";(self["webpackChunkVisioNegocios"]=self["webpackChunkVisioNegocios"]||[]).push([[594],{2789:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var o=n(6278),r=function(){var t=this,e=t._self._c;return e(o.A,[e("br"),e("br"),e("br"),e("br"),e("Mapa")],1)},i=[],a=n(1689),s=n(8834),p=function(){var t=this,e=t._self._c;return e(o.A,[e(a.A,[e(s.OQ,[e("l-map",{staticStyle:{height:"400px"},attrs:{zoom:t.zoom,center:t.center},on:{click:t.agregaMarcador}},[e("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.marcadores,(function(n){return e("l-marker",{key:n.id,attrs:{"lat-lng":n.pos}},[e("l-popup",[e("div",{on:{click:t.innerClick}},[t._v(" "+t._s(n.desc)+" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.showParagraph,expression:"showParagraph"}]})])])],1)}))],2)],1)],1)],1)},c=[],u=(n(4114),n(715)),l=n(3544),h=n(5551),d=n(3481),f=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},m=function(t,e,n,o){var r=function(o){var r="set"+f(o),i=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[r]?t.$watch(o,(function(e,n){t[r](e,n)}),{deep:i}):"setOptions"===r?t.$watch(o,(function(t,n){(0,d.setOptions)(e,t)}),{deep:i}):e[r]&&t.$watch(o,(function(t,n){e[r](t)}),{deep:i})};for(var i in n)r(i)},v=function(t){var e={};for(var n in t){var o=t[n];null!==o&&void 0!==o&&(e[n]=o)}return e},g=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var o=v(n);t=v(t);var r=e.$options.props;for(var i in t){var a=r[i]?r[i].default&&"function"===typeof r[i].default?r[i].default.call():r[i].default:Symbol("unique"),s=!1;s=Array.isArray(a)?JSON.stringify(a)===JSON.stringify(t[i]):a===t[i],o[i]&&!s?(console.warn(i+" props is overriding the value passed in the options props"),o[i]=t[i]):o[i]||(o[i]=t[i])}return o},b=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},y={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(t){this.mapObject&&null!==t&&void 0!==t&&this.mapObject.setContent(t)}},render:function(t){return this.$slots.default?t("div",this.$slots.default):null}},O={props:{options:{type:Object,default:function(){return{}}}}},C={name:"LPopup",mixins:[y,O],props:{latLng:{type:[Object,Array],default:function(){return[]}}},mounted:function(){var t=this,e=g(this.popperOptions,this);this.mapObject=(0,d.popup)(e),void 0!==this.latLng&&this.mapObject.setLatLng(this.latLng),d.DomEvent.on(this.mapObject,this.$listeners),m(this,this.mapObject,this.$options.props),this.mapObject.setContent(this.content||this.$el),this.parentContainer=b(this.$parent),this.parentContainer.mapObject.bindPopup(this.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.unbindPopup?this.parentContainer.unbindPopup():this.parentContainer.mapObject&&this.parentContainer.mapObject.unbindPopup&&this.parentContainer.mapObject.unbindPopup())}};function _(t,e,n,o,r,i,a,s,p,c){"boolean"!==typeof a&&(p=s,s=a,a=!1);var u,l="function"===typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),o&&(l._scopeId=o),i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,p(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):e&&(u=a?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),u)if(l.functional){var h=l.render;l.render=function(t,e){return u.call(e),h(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return n}var j=C,$=void 0,L=void 0,w=void 0,A=void 0,k=_({},$,j,L,A,w,!1,void 0,void 0,void 0),P=k,x={components:{LMap:u.A,LTileLayer:l.A,LMarker:h.A,LPopup:P},data:()=>({showParagraph:!1,coordenadas:[],datos:[],saludo:"hola",marcadores:[],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:10,center:[-36.632060059770694,-56.70318603515626],markerLatLng:[-36.632060059770694,-56.70318603515626],imgIcon:n(7024)}),methods:{agregaMarcador(t){this.marcadores=[],this.marcadores.push({pos:t.latlng,desc:"Agregado!!"}),console.log(this.marcadores),this.datos.Latitud=this.marcadores[0].pos.lat,this.datos.Longitud=this.marcadores[0].pos.lng,console.log(this.datos.Longitud),console.log(this.datos.Latitud)},zoomUpdate(t){this.currentZoom=t},centerUpdate(t){this.currentCenter=t},showLongText(){this.showParagraph=!this.showParagraph},innerClick(){alert("Click!")}}},S=x,M=n(1656),N=(0,M.A)(S,p,c,!1,null,null,null),T=N.exports,R={components:{Mapa:T}},z=R,E=(0,M.A)(z,r,i,!1,null,null,null),U=E.exports}}]);
//# sourceMappingURL=about.78d286b0.js.map
(this["webpackJsonpmaps-socket"]=this["webpackJsonpmaps-socket"]||[]).push([[0],{42:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(33),a=n.n(o),r=(n(42),n(20)),u=n(37),i=n(5),s=Object(c.createContext)(),l=function(e){var t=e.children,n=function(e){var t=Object(c.useMemo)((function(){return u.a.connect(e,{transports:["websocket"]})}),[e]),n=Object(c.useState)(!1),o=Object(r.a)(n,2),a=o[0],i=o[1];return Object(c.useEffect)((function(){i(t.connected)}),[t]),Object(c.useEffect)((function(){t.on("connect",(function(){return i(!0)}))}),[t]),Object(c.useEffect)((function(){t.on("disconnect",(function(){return i(!1)}))}),[t]),{socket:t,online:a}}("https://mapas-socket.herokuapp.com/"),o=n.socket,a=n.online;return Object(i.jsx)(s.Provider,{value:{socket:o,online:a},children:t})},f=n(69),b=n(70),d=n(22),j=n.n(d);j.a.accessToken="pk.eyJ1Ijoia2lvYnJzMzMiLCJhIjoiY2t1eTdxczU2NTRxcDJub2Z2MXpiNXozbyJ9.yVlkX2W61pZXW8ilbmPpxA";var m={lng:-71.5331,lat:-16.4307,zoom:15},O=function(){var e=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),o=Object(c.useRef)({}),a=Object(c.useRef)(new f.a),u=Object(c.useRef)(new f.a),i=Object(c.useState)(e),s=Object(r.a)(i,2),l=s[0],d=s[1],m=Object(c.useCallback)((function(e){t.current=e}),[]),O=Object(c.useCallback)((function(e,t){var c=e.lngLat||e,r=c.lng,i=c.lat,s=new j.a.Marker;s.id=null!==t&&void 0!==t?t:Object(b.a)(),s.setLngLat([r,i]).addTo(n.current).setDraggable(!0),o.current[s.id]=s,t||u.current.next({id:s.id,lng:r,lat:i}),s.on("drag",(function(e){var t=e.target.id,n=e.target.getLngLat(),c=n.lng,o=n.lat;a.current.next({id:t,lng:c,lat:o})}))}),[]),v=Object(c.useCallback)((function(e){var t=e.id,n=e.lng,c=e.lat;o.current[t].setLngLat([n,c])}),[]);return Object(c.useEffect)((function(){var c=new j.a.Map({container:t.current,style:"mapbox://styles/mapbox/streets-v11",center:[e.lng,e.lat],zoom:e.zoom});n.current=c}),[e]),Object(c.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.on("move",(function(){var e=n.current.getCenter(),t=e.lng,c=e.lat;d({lng:t.toFixed(4),lat:c.toFixed(4),zoom:n.current.getZoom().toFixed(2)})}))}),[]),Object(c.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.on("click",O)}),[O]),{coords:l,agregarMarcador:O,setRef:m,marcadores:o,nuevoMarcador$:u.current,movimientoMarcador$:a.current,actualizacionPosicion:v}}(m),t=e.coords,n=e.setRef,o=e.nuevoMarcador$,a=e.movimientoMarcador$,u=e.agregarMarcador,l=e.actualizacionPosicion,d=Object(c.useContext)(s).socket;return Object(c.useEffect)((function(){d.on("marcadores-activos",(function(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var c=n[t];u(e[c],c)}}))}),[d,u]),Object(c.useEffect)((function(){a.subscribe((function(e){d.emit("marcador-actualizado",e)}))}),[a,d]),Object(c.useEffect)((function(){d.on("marcador-actualizado",(function(e){l(e)}))}),[d,l]),Object(c.useEffect)((function(){o.subscribe((function(e){d.emit("marcador-nuevo",e)}))}),[o,d]),Object(c.useEffect)((function(){d.on("marcador-nuevo",(function(e){u(e,e.id)}))}),[d,u]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"mapContainer",children:[Object(i.jsxs)("div",{className:"coords",children:["lat: ",t.lat," | lng: ",t.lng," | zoom: ",t.zoom]}),Object(i.jsx)("div",{className:"info",children:"Mapa en tiempo Real - Rene Lozano"}),Object(i.jsx)("div",{className:"mapbox",ref:n})]})})},v=function(){return Object(i.jsx)(l,{children:Object(i.jsx)(O,{})})};a.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0f5130fd.chunk.js.map
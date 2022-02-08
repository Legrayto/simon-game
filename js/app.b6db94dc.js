(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/simon-game/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"196f":function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},"3c6d":function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"},"3cf8":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Simon")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[n("div",{staticClass:"container"},[n("div",{staticClass:"gameboard"},[n("div",{staticClass:"gameboard__center"},[n("div",{staticClass:"center-text"},[e._v(e._s(e.message))])]),n("div",{staticClass:"gameboard__buttons"},e._l(e.buttons,(function(t,r){return n("div",{key:r,staticClass:"gameboard__button"},[n("Button",{ref:"button",refInFor:!0,attrs:{idx:r,color:t.color,file:t.file,gameStop:e.gameStop||e.isGameOver},on:{btnClick:e.checkClick}})],1)})),0)]),n("div",{staticClass:"content"},[n("div",{staticClass:"content__start"},[n("div",{staticClass:"content__text"},[e._v("Round "+e._s(e.round))]),n("button",{staticClass:"content__button content__button_start",attrs:{type:"button"},on:{click:e.start}},[e._v(" Start / Reset ")]),n("button",{staticClass:"content__button content__button_resume",attrs:{type:"button"},on:{click:e.resume}},[e._v(" Resume ")])]),n("div",{staticClass:"content__levels"},e._l(e.levels,(function(t,r){return n("div",{key:r,staticClass:"content__level"},[n("label",{staticClass:"content__control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.delay,expression:"delay"}],staticClass:"level-input",attrs:{type:"radio",name:"level"},domProps:{value:t.time,checked:e._q(e.delay,t.time)},on:{change:function(n){e.delay=t.time}}}),n("div",{staticClass:"level-text"},[e._v(" "+e._s(t.name)+" ")])])])})),0)])])])},i=[],c=n("b85c"),u=n("1da1"),l=(n("96cf"),n("d3b7"),n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"btn",staticClass:"simon-button",class:e.color,on:{click:e.btnClick}})}),d=[],f=(n("a9e3"),{name:"btn",props:{idx:{type:Number,required:!0},color:{type:String,required:!0},file:{type:String,required:!0},gameStop:{type:Boolean,required:!0}},data:function(){return{sound:null}},methods:{play:function(){var e=this;this.sound.play(),this.$refs.btn.classList.add("active"),setTimeout((function(){return e.$refs.btn.classList.remove("active")}),200)},btnClick:function(){this.gameStop||(this.play(),this.$emit("btnClick",this.idx))}},created:function(){var e=n("ac03")("./".concat(this.file));this.sound=new Audio(e)}}),p=f,m=(n("ef55"),n("2877")),v=Object(m["a"])(p,l,d,!1,null,null,null),b=v.exports,h=[{color:"green",file:"1.mp3"},{color:"red",file:"2.mp3"},{color:"yellow",file:"3.mp3"},{color:"blue",file:"4.mp3"}],_=[{name:"Легкий",time:1500},{name:"Средний",time:1e3},{name:"Сложный",time:400}],g={components:{Button:b},data:function(){return{round:0,orders:[],buttons:h,levels:_,delay:1500,message:"",gameStop:!0,isGameOver:!1}},methods:{sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},start:function(){this.reset(),this.newRound()},resume:function(){this.isGameOver=!1,this.message="",this.newRound()},reset:function(){this.round=0,this.orders=[],this.isGameOver=!1,this.gameStop=!0,this.message=""},newRound:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.gameStop=!0,e.message="Wait",e.round++,e.actual=0,n=e.newButtonIndex(),e.orders.push(n),r=Object(c["a"])(e.orders),t.prev=7,r.s();case 9:if((o=r.n()).done){t.next=16;break}return a=o.value,e.$refs.button[a].play(),t.next=14,e.sleep(e.delay);case 14:t.next=9;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](7),r.e(t.t0);case 21:return t.prev=21,r.f(),t.finish(21);case 24:e.gameStop=!1,e.message="";case 26:case"end":return t.stop()}}),t,null,[[7,18,21,24]])})))()},newButtonIndex:function(){var e=Math.floor(3*Math.random());return e},checkClick:function(e){if(this.round){var t=this.orders[this.actual];e===t?this.checkActual():this.gameOver()}},checkActual:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.actual!==e.round-1){t.next=9;break}return e.orders=e.orders.map((function(t){return t=e.newButtonIndex(),t})),e.message="Next Round!",e.gameStop=!0,t.next=6,e.sleep(2e3);case 6:e.newRound(),t.next=10;break;case 9:e.actual++;case 10:case"end":return t.stop()}}),t)})))()},gameOver:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isGameOver=!0,e.message="Game Over",t.next=4,e.sleep(2e3);case 4:case"end":return t.stop()}}),t)})))()}}},y=g,x=Object(m["a"])(y,s,i,!1,null,null,null),w=x.exports,O={name:"App",components:{Simon:w}},k=O,C=(n("5c0b"),Object(m["a"])(k,o,a,!1,null,null,null)),S=C.exports;r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"78fc":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},"9c0c":function(e,t,n){},ac03:function(e,t,n){var r={"./1.mp3":"3c6d","./2.mp3":"3cf8","./3.mp3":"196f","./4.mp3":"78fc"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="ac03"},da8d:function(e,t,n){},ef55:function(e,t,n){"use strict";n("da8d")}});
//# sourceMappingURL=app.b6db94dc.js.map
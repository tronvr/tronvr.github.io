(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01e3":function(e,t,n){},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"1f56":function(e,t,n){},"40dc":function(e,t,n){"use strict";var a=n("01e3"),r=n.n(a);r.a},4144:function(e,t,n){"use strict";var a=n("1f56"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("cebc"),r=(n("cadf"),n("551c"),n("097d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navigator"),n("div",{staticClass:"content"},[n("router-view")],1),e.connectToBlockChain?e._e():n("div",{staticClass:"tronlink-alert"},[n("h3",[e._v("ALERT")]),n("p",[e._v("YOU MUST INSTALL TRONLINK")]),n("a",{attrs:{href:"https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"}},[e._v("Donwnload here")]),n("p",[e._v("YOU MUST LOGIN TRONLINK")]),n("p",[e._v("YOU MUST IN MAINNET")])])],1)},i=[],s=(n("7f7f"),n("96cf"),n("3b8d")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["go"!=this.$router.currentRoute.name?a("div",{attrs:{id:"header"}},[a("img",{attrs:{id:"logo",src:n("cf05")}})]):e._e(),a("div",{staticClass:"navigator"},e._l(e.menus,function(t,n){return a("div",{key:n,staticClass:"menu",on:{click:function(n){e.$router.push({name:t.routerName})}}},[e._v(e._s(t.name))])}),0)])},l=[],u={data:function(){return{menus:[{name:"Home",routerName:"index"},{name:"Visit",routerName:"visit"},{name:"Buy place",routerName:"buy-place"},{name:"My place",routerName:"my-place"}]}},methods:{}},d=u,p=(n("ee03"),n("2877")),h=Object(p["a"])(d,c,l,!1,null,null,null);h.options.__file="Navigator.vue";var v=h.exports;function f(e,t){var n=e>0?0:1,a=t>0?0:1,r=window.tronWeb.toHex(Math.abs(e)).substr(2),o=window.tronWeb.toHex(Math.abs(t)).substr(2),i="0x"+n+new Array(32-r.length).join(0)+r+a+new Array(32-o.length).join(0)+o;return i}function m(e){var t=new Array(65-(e.length-2)).join(0);t+=e.substr(2);var n=t.substr(t.length-31,31),a=t.substr(t.length-32,1),r=t.substr(t.length-63,31),o=t.substr(t.length-64,1);""==r&&(r="0"),""==n&&(n="0"),""==o&&(o="0"),""==a&&(a="0");var i=window.tronWeb.toDecimal("0x"+n)*("0"==a?1:-1),s=window.tronWeb.toDecimal("0x"+r)*("0"==o?1:-1);return{x:s,y:i}}var w={name:"app",components:{Navigator:v},data:function(){return{contractInstance:{},connectToBlockChain:!1}},methods:{loadPlaces:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,o,i,s,c,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("visit"==this.$router.currentRoute.name){e.next=20;break}return e.next=3,this.contractInstance.totalSupply().call();case 3:t=e.sent.toNumber(),n=[],a=0;case 6:if(!(a<t)){e.next=19;break}return e.next=9,this.contractInstance.tokenByIndex(a).call();case 9:return r=e.sent,o=m(r._hex),i=o.x,s=o.y,e.next=13,this.contractInstance.getPlaceInfo(r).call();case 13:c=e.sent,l={name:c[0],owner:window.tronWeb.address.fromHex(c[1]),location:{x:i,y:s},tokenID:r,buildUrl:c[2]},n.push(l);case 16:a++,e.next=6;break;case 19:this.$store.commit("updatePlaces",n);case 20:setTimeout(this.loadPlaces,100);case 21:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,n=function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("Waiting tronweb load"),!window.tronWeb||!window.tronWeb.ready){e.next=12;break}return t.connectToBlockChain=!0,a=t.$store.state.contractAddress,e.next=6,window.tronWeb.trx.getContract(a);case 6:r=e.sent,t.contractInstance=window.tronWeb.contract(r.abi.entrys,r.contract_address),t.$store.commit("updateContractInstance",t.contractInstance),t.loadPlaces(),e.next=13;break;case 12:setTimeout(n,100);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),setTimeout(n,100);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},y=w,b=(n("034f"),Object(p["a"])(y,o,i,!1,null,null,null));b.options.__file="App.vue";var B=b.exports,x=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title-page"},[e._v("Edit Place")]),n("div",{staticClass:"content-page"},[n("div",{staticClass:"over-view"},[n("div",{on:{click:function(t){e.showEditName=!e.showEditName}}},[e._v("\n            Name: "+e._s(e.place.name)+"\n            "),n("small",[e._v("Click to edit")])]),e.showEditName?n("div",{staticClass:"edit-buildurl-panel"},[n("VueInput",{staticClass:"loader-voxurl",attrs:{placeholder:"Type your place name"},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}),n("VueButton",{staticClass:"danger",attrs:{"icon-left":"save"},on:{click:function(t){e.saveName()}}},[e._v("Save to BlockChain")])],1):e._e(),n("div",[e._v("Location: x:"+e._s(e.place.location.x)+", y:"+e._s(e.place.location.y))]),n("div",[e._v("Owner: "+e._s(e.place.owner))]),n("div",[e._v("\n            TokenID:\n            "),n("small",[e._v(e._s(e.place.tokenID.toString()))])]),n("div",[e._v("Building link (support vox):")]),n("a",{on:{click:function(t){e.showEditBuildUrl=!e.showEditBuildUrl}}},[n("small",[e._v(e._s(e.place.buildUrl.substr(0,30)+"..."+e.place.buildUrl.substr(e.place.buildUrl.length-20,20)))])]),e.showEditBuildUrl?n("div",{staticClass:"edit-buildurl-panel"},[n("VueInput",{staticClass:"loader-voxurl",attrs:{placeholder:"Type your url contain vox file"},model:{value:e.urlInput,callback:function(t){e.urlInput=t},expression:"urlInput"}}),n("VueButton",{staticClass:"primary",attrs:{"icon-left":"search"},on:{click:function(t){e.load()}}},[e._v("Load vox")]),n("VueButton",{staticClass:"danger",attrs:{"icon-left":"save"},on:{click:function(t){e.saveUri()}}},[e._v("Save to BlockChain")])],1):e._e()]),n("div",{staticClass:"place-preview"},[n("div",[e._v("YOUR BUILDING")]),n("TronVox",{attrs:{url:e.urlTronVoxLoad}})],1)])])},_=[],C=(n("6b54"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"tron-vox",attrs:{id:e.name}})])}),O=[],L=(n("ac6a"),n("b6e4"),n("34ef"),n("b5bb")),k=n("78c3"),N=n("51e8"),A=new N.Parser,Y=function(e,t){A.parse(e).then(function(e){e.voxels,e.size,e.palette;var n=e.size.x,a=e.size.y,r=e.size.z,o=L(new Int32Array(n*a*r),[n,a,r]);e.voxels.forEach(function(e){o.set(e.y,e.z,e.x,e.colorIndex)}),t(o)})},P=function(e,t,n,a,r,o){var i=1,s=256,c=(e-1)%s,l=Math.floor((e-1)/s),u=1/s,d=1/i,p=u*c,h=u*(c+1),v=d*l,f=d*(l+1),m=.49,w=m*d,y=m*u;p+=y,v+=w,h-=y,f-=w,t[2*n]=p,t[2*n+1]=v,t[2*a]=h,t[2*a+1]=v,t[2*r]=h,t[2*r+1]=f,t[2*o]=p,t[2*o+1]=f},I=function(e,t){Y(e,function(e){var n=k.meshers.greedy(e.data,e.shape),a=[],r=[];n.vertices.forEach(function(e){r.push(e[0]),r.push(e[1]),r.push(e[2])});var o=new Array(2*r.length/3);n.faces.forEach(function(e){a.push(e[1]),a.push(e[0]),a.push(e[2]),a.push(e[3]),a.push(e[2]),a.push(e[0]),P(e[4],o,e[0],e[1],e[2],e[3])});var i=e.shape;t({incides:a,positions:r,uvs:o,sizeVox:i})})},T={data:function(){return{baseUrl:this.$store.state.baseUrl,name:"TronVox-"+Math.floor(100*Math.random()),scene:{},voxMesh:{},camera:{}}},props:{url:String},watch:{url:function(){this.loadVoxel()}},mounted:function(){var e=document.getElementById(this.name),t=new BABYLON.Engine(e,!0,{preserveDrawingBuffer:!0,stencil:!0});this.scene=this.createScene(t,e);var n=this;t.runRenderLoop(function(){n.scene&&n.scene.render()})},methods:{createScene:function(e,t){var n=this,a=new BABYLON.Scene(e);console.log(a),a.clearColor=new BABYLON.Color4(0,0,1,.3),a.collisionsEnabled=!0,this.camera=new BABYLON.ArcRotateCamera("camera1",0,0,0,new BABYLON.Vector3(80,126,80),a),this.camera.setPosition(new BABYLON.Vector3(-150,10,-150)),this.camera.attachControl(t,!0),this.camera.checkCollisions=!0;var r=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(5,5,1),a);r.specular=new BABYLON.Color3(.5,.5,.5),r.specularPower=0,r.diffuse=new BABYLON.Color3(.843,.933,.922),r.intensity=.75,r.groundColor=new BABYLON.Color3(.5,.5,.5);var o=new BABYLON.GridMaterial("matGrid",a);o.gridRatio=1,o.majorUnitFrequency=1,o.mainColor=new BABYLON.Color3(1,1,1),o.lineColor=new BABYLON.Color3(.8,.8,.8);var i=new BABYLON.SkyMaterial("skyMaterial",a);i.backFaceCulling=!1,i.inclination=0;var s=BABYLON.Mesh.CreateBox("skyBox",1260,a);s.material=i;var c=BABYLON.Mesh.CreateGround("GridGround",1260,1260,1,a);c.material=o,c.checkCollisions=!0,c.position=new BABYLON.Vector3(0,0,0);var l=new BABYLON.StandardMaterial("VoxelMat",a);return l.diffuseTexture=new BABYLON.Texture(this.baseUrl+"textures/voxel.png",a),l.backFaceCulling=!0,this.voxMesh=new BABYLON.Mesh("boxes",a),this.voxMesh.material=l,this.voxMesh.position=new BABYLON.Vector3(17,0,17),this.loadVoxel(),window.addEventListener("resize",function(){return e.resize()}),a.registerBeforeRender(function(){n.camera.alpha+=.001}),a},loadVoxel:function(){if(null!=this.url&&""!=this.url){var e=this;I(this.url,function(t){var n=t.incides,a=t.positions,r=t.uvs,o=t.sizeVox,i=new BABYLON.VertexData;i.indices=n,i.positions=a,i.uvs=r,i.applyToMesh(e.voxMesh),e.camera.setTarget(new BABYLON.Vector3(o[0]/2+17,o[1]/2,o[2]/2+17)),e.camera.setPosition(new BABYLON.Vector3(-o[0]-10,10,-o[2]-10))})}}}},V=T,M=(n("ab66"),Object(p["a"])(V,C,O,!1,null,null,null));M.options.__file="TronVox.vue";var E=M.exports,S={components:{TronVox:E},props:{location:Object},data:function(){return{selectedItem:void 0,tabId:"over-view",showEditBuildUrl:!0,showEditName:!1,urlInput:"",urlTronVoxLoad:"",nameInput:""}},computed:{typeItems:function(){return this.$store.state.typeItems},place:function(){var e=this;return this.$store.state.places.filter(function(t){return t.location.x==e.location.x&&t.location.y==e.location.y})[0]}},methods:{load:function(){this.urlTronVoxLoad=this.urlInput},saveUri:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.urlTronVoxLoad=this.urlInput,e.next=4,this.$store.state.contractInstance.setContentURI(this.place.tokenID,this.urlInput).send();case 4:this.$swal("Sent edit uri to blockchain"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.$swal({type:"error",title:"Oops...",text:e.t0.toString()});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),saveName:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.state.contractInstance.setName(this.place.tokenID,this.nameInput).send();case 3:this.$swal("Sent new name to blockchain"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.$swal({type:"error",title:"Oops...",text:e.t0.toString()});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.urlTronVoxLoad=this.place.buildUrl,this.urlInput=this.place.buildUrl,this.nameInput=this.place.name}},U=S,R=(n("40dc"),Object(p["a"])(U,g,_,!1,null,null,null));R.options.__file="EditPlace.vue";var $=R.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title-page"},[e._v("List Place")]),n("div",{staticClass:"list-place"},e._l(e.places,function(t,a){return n("div",{key:a,staticClass:"place"},[n("div",{staticClass:"info"},[n("div",[e._v(e._s(t.name))]),n("div",[e._v("Location: x:"+e._s(t.location.x)+", y:"+e._s(t.location.y))]),n("div",[e._v("Building link (support vox):")]),n("a",[n("small",[e._v(e._s(t.buildUrl.substr(0,15)+"..."+t.buildUrl.substr(t.buildUrl.length-10,10)))])]),n("div",{staticClass:"place-control"},[n("VueButton",{staticClass:"primary",attrs:{"icon-left":"search"},on:{click:function(t){e.$router.push({name:"visit"})}}},[e._v("Visit")]),n("VueButton",{staticClass:"primary",attrs:{"icon-left":"create"},on:{click:function(n){e.$router.push({name:"edit",query:{x:t.location.x,y:t.location.y}})}}},[e._v("Edit")])],1)]),n("TronVox",{staticClass:"preview",attrs:{url:t.buildUrl}})],1)}),0)])},D=[],W={components:{TronVox:E},data:function(){return{}},computed:{places:function(){return void 0!=window.tronWeb?this.$store.state.places.filter(function(e){return e.owner==window.tronWeb.defaultAddress.base58}):[]}}},z=W,H=(n("d9c6"),Object(p["a"])(z,j,D,!1,null,null,null));H.options.__file="ListPlace.vue";var G=H.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dir",[n("div",{staticClass:"title-page"},[e._v("Buy Place")]),n("div",{staticClass:"map"},e._l(e.maxX,function(t){return n("div",{key:t,staticClass:"row"},e._l(e.maxY,function(a){return n("div",{key:a,staticClass:"place-slot",class:{buyed:0!=e.buyedArr[t][a]},style:{borderTop:50==t?"1px solid #f00":0,borderLeft:50==a?"1px solid #f00":0},attrs:{id:t+"-"+a},on:{mousemove:function(n){e.show(t,a)},click:function(n){e.buy(t,a)}}})}),0)}),0),n("div",{staticClass:"status",style:{left:e.statusPosition.left+"px",top:e.statusPosition.top+"px"}},[n("div",[n("small",[e._v("Location:")]),e._v(" ("+e._s(e.currentPlacePos.x)+":"+e._s(e.currentPlacePos.y)+")")]),e.placeStatus?n("div",[n("div",[n("small",[e._v("Owner:")]),e._v(" "+e._s(e.placeStatus.owner))]),n("div",[n("small",[e._v("Name:")]),e._v(" "+e._s(e.placeStatus.name))])]):n("div",[e._v("\n      You can buy this\n    ")])])])},q=[],X=(n("6c7b"),n("75fc")),K={data:function(){return{maxX:100,maxY:100,currentPlacePos:{x:0,y:0},placeStatus:"",statusPosition:{left:0,top:0}}},computed:{buyedArr:function(){var e=Object(X["a"])(Array(101)).map(function(){return Array(101).fill(!1)});return this.buyedPlace.forEach(function(t){e[t.location.x+50][t.location.y+50]={owner:t.owner,name:t.name}}),e},buyedPlace:function(){return this.$store.state.places},contractInstance:function(){return this.$store.state.contractInstance}},watch:{buyedPlace:function(){console.log("reDraw"),this.maxX=0,this.maxY=0,this.maxX=100,this.maxY=100}},methods:{show:function(e,t){this.placeStatus=this.buyedArr[e][t],this.currentPlacePos.x=e-50,this.currentPlacePos.y=t-50},buy:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!=this.placeStatus){e.next=12;break}return e.prev=1,e.next=4,this.contractInstance.buy(f(t-50,n-50)).send({callValue:1e9});case 4:this.$swal("Sent buy order to blockchain"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),this.$swal({type:"error",title:"Oops...",text:e.t0.toString()});case 10:e.next=13;break;case 12:this.$swal({type:"error",title:"Oops...",text:"This place buyed!"});case 13:case"end":return e.stop()}},e,this,[[1,7]])}));function t(t,n){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:Element.prototype.documentOffsetTop=function(){return this.offsetTop+(this.offsetParent?this.offsetParent.documentOffsetTop():0)},setTimeout(window.scrollTo(0,t),2e3),t=document.getElementById("50-50").documentOffsetTop()-window.innerHeight/2,n=this,a=function(e){n.statusPosition.left=e.pageX+20,n.statusPosition.top=e.pageY},document.addEventListener("mousemove",a,!1);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},Q=K,J=(n("7505"),Object(p["a"])(Q,F,q,!1,null,"27ec3e93",null));J.options.__file="BuyPlace.vue";var Z=J.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"tron-vox",style:{width:e.gameWidth+"px",height:e.gameHeight+"px"},attrs:{id:"TronVRWorld"}})])},te=[],ne=n("d225"),ae=n("b0b4"),re=n("633b"),oe=function(){function e(t,n){Object(ne["a"])(this,e);var a=new re["StandardMaterial"]("PlayerMatcls",t);a.diffuseColor=new re["Color3"].Red;var r=this.body=new re["MeshBuilder"].CreateSphere("player-body",{diameter:4},t);r.material=a,r.position=n,r.visibility=0;var o=this.head=new re["MeshBuilder"].CreateSphere("player-head",{diameter:4},t);o.material=a,this.right=new re["MeshBuilder"].CreateSphere("player-right",{diameter:1},t),this.right.position=new re["Vector3"](-1,0,0),this.right.visibility=0,this.camera=new re["UniversalCamera"]("player-camera",new re["Vector3"](0,0,-1),t),this.right.parent=this.head,this.camera.parent=this.head,this.scene=t,t.registerBeforeRender(function(){o.position.x=r.position.x,o.position.y=r.position.y+5,o.position.z=r.position.z}),r.physicsImpostor=new re["PhysicsImpostor"](r,re["PhysicsImpostor"].SphereImpostor,{mass:40,restitution:0},t)}return Object(ae["a"])(e,[{key:"getFront",value:function(){var e=this.head.absolutePosition.subtract(this.camera.globalPosition);return e.y=0,e.normalize()}},{key:"getBack",value:function(){var e=this.camera.globalPosition.subtract(this.head.absolutePosition);return e.y=0,e.normalize()}},{key:"getRight",value:function(){var e=this.head.absolutePosition.subtract(this.right.absolutePosition);return e.y=0,e.normalize()}},{key:"getLeft",value:function(){var e=this.right.absolutePosition.subtract(this.head.absolutePosition);return e.y=0,e.normalize()}},{key:"isOnGround",value:function(){var e=this,t=this.scene.pickWithRay(new re["Ray"](this.body.position,new re["Vector3"](0,-1,0)),function(t){return!(t===e.body)});return t.hit&&Math.round(1e3*t.pickedPoint.y)/1e3+.1>=this.body.getBoundingInfo().minimum.y+this.body.position.y}}]),e}(),ie={data:function(){return{gameWidth:window.innerWidth-10,gameHeight:window.innerHeight-10,baseUrl:this.$store.state.baseUrl,scene:{},buildMaterial:{}}},computed:{places:function(){return this.$store.state.places}},mounted:function(){var e=document.getElementById("TronVRWorld"),t=new BABYLON.Engine(e,!0,{preserveDrawingBuffer:!0,stencil:!0});this.scene=this.createScene(t,e);var n=this;t.runRenderLoop(function(){n.scene&&n.scene.render()});var a=function e(){void 0!=n.places?(n.loadWorld(0,0),console.log("world loaded")):setTimeout(e,100)};setTimeout(a,100)},methods:{createScene:function(e,t){var n=new BABYLON.Scene(e);n.debugLayer.show(),n.clearColor=new BABYLON.Color4(0,0,1,.3),n.collisionsEnabled=!0,n.workerCollisions=!0,n.fogMode=BABYLON.Scene.FOGMODE_EXP2,n.fogDensity=.003,n.fogColor=new BABYLON.Color3(.8,.83,.8),n.enablePhysics(new BABYLON.Vector3(0,-40,0),new BABYLON.CannonJSPlugin(!0,100));var a=new oe(n,new BABYLON.Vector3(0,10,0)),r=new BABYLON.FreeCamera("cameraTopDown",new BABYLON.Vector3(0,200,0),n);a.camera.viewport=new BABYLON.Viewport(0,0,1,1),r.viewport=new BABYLON.Viewport(0,0,.2,.2),n.activeCameras.push(a.camera),n.activeCameras.push(r);var o=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(5,5,1),n);window.SCEN=n,o.specular=new BABYLON.Color3(.5,.5,.5),o.specularPower=0,o.diffuse=new BABYLON.Color3(.843,.933,.922),o.intensity=.75,o.groundColor=new BABYLON.Color3(.5,.5,.5);var i=new BABYLON.GridMaterial("matGrid",n);i.gridRatio=1,i.majorUnitFrequency=1,i.mainColor=new BABYLON.Color3(1,1,1),i.lineColor=new BABYLON.Color3(.8,.8,.8);var s=BABYLON.Mesh.CreateGround("GridGround",16e3,16e3,1,n);s.material=i,s.position=new BABYLON.Vector3(0,0,0),s.physicsImpostor=new BABYLON.PhysicsImpostor(s,BABYLON.PhysicsImpostor.BoxImpostor,{mass:0,restitution:0},n);var c=s.clone("LayoutGround");c.position.y+=.05;var l=new BABYLON.StandardMaterial("LayoutGroundMat",n);l.diffuseTexture=new BABYLON.Texture(this.baseUrl+"textures/ground.png",n),console.log("set vscale"),l.diffuseTexture.vScale=100,l.diffuseTexture.uScale=100,l.alpha=.5,c.material=l,this.buildMaterial=new BABYLON.StandardMaterial("VoxelMat",n),this.buildMaterial.diffuseTexture=new BABYLON.Texture(this.baseUrl+"textures/voxel.png",n),this.buildMaterial.backFaceCulling=!0,n.registerBeforeRender(function(){var t=2*e.getDeltaTime();if(a.isOnGround()){var n=new BABYLON.Vector3(0,0,0);d[32]?a.body.physicsImpostor.applyImpulse(new BABYLON.Vector3(0,1200,0),a.body.getAbsolutePosition()):(d[87]&&(n=n.add(a.getFront())),d[83]&&(n=n.add(a.getBack())),d[65]&&(n=n.add(a.getLeft())),d[68]&&(n=n.add(a.getRight())),a.body.physicsImpostor.setLinearVelocity(n.normalize().multiplyByFloats(t,t,t)))}r.position.x=a.body.position.x,r.position.z=a.body.position.z,r.setTarget(a.body.position),r.rotation.z=9.43});var u=function(e){a.head.rotate(BABYLON.Axis.X,e.movementY/1e3,BABYLON.Space.LOCAL),a.head.rotate(BABYLON.Axis.Y,e.movementX/1e3,BABYLON.Space.WORLD)};document.addEventListener("pointerlockchange",function(){document.pointerLockElement===t?document.addEventListener("mousemove",u,!1):document.removeEventListener("mousemove",u,!1)},!1);var d={};return window.addEventListener("keydown",function(e){d[e.keyCode]=!0,9===e.keyCode&&e.preventDefault()}),window.addEventListener("keyup",function(e){d[e.keyCode]=!1,9===e.keyCode&&e.preventDefault()}),n.onPointerDown=function(){return t.requestPointerLock()},window.addEventListener("resize",function(){e.resize()}),n.registerBeforeRender(function(){}),n},loadVoxel:function(e,t){null!=e&&""!=e&&I(e,function(e){var n=e.incides,a=e.positions,r=e.uvs,o=new BABYLON.VertexData;o.indices=n,o.positions=a,o.uvs=r,o.applyToMesh(t)})},loadWorld:function(e,t){var n=this;console.log(e,t);var a=this.places;console.log(this.places),a.forEach(function(e){var t=new BABYLON.Mesh("Build-"+e.location.x+"-"+e.location.y,n.scene);t.material=n.buildMaterial,t.position=new BABYLON.Vector3(17+160*e.location.x,0,17+160*e.location.y),n.loadVoxel(e.buildUrl,t)})}}},se=ie,ce=(n("5e98"),Object(p["a"])(se,ee,te,!1,null,null,null));ce.options.__file="VisitWorld.vue";var le=ce.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-page"},[e._m(0),n("router-link",{staticClass:"visit-btn",attrs:{to:{name:"visit"}}},[e._v("Visit now")]),n("div",{staticClass:"faq"},[n("h3",[e._v("FAQ")]),n("p",{staticClass:"q"},[e._v("How much is the price of this place?")]),n("p",{staticClass:"a"},[e._v("Start you can pay for 1.000 trx. And higher or lower by exchange with TRC721 (non fungible token)")]),n("p",{staticClass:"q"},[e._v("How can i buy a land?")]),n("p",{staticClass:"a"},[e._v("Go to\n      "),n("router-link",{attrs:{to:{name:"buy-place"}}},[e._v("Buy place")]),e._v(" menu, chose location you want. Currently, this world just have 100x100 place, this be more in features. Every people will spaw on center of the world (cross red line)\n    ")],1),n("p",{staticClass:"q"},[e._v("How can i edit my place name?")]),n("p",{staticClass:"a"},[e._v("Go to\n      "),n("router-link",{attrs:{to:{name:"my-place"}}},[e._v("My place")]),e._v(" menu, chose your place you want to change and edit in that panel\n    ")],1),n("p",{staticClass:"q"},[e._v("How can i edit my building?")]),n("p",{staticClass:"a"},[e._v("Go to\n      "),n("router-link",{attrs:{to:{name:"my-place"}}},[e._v("My place")]),e._v(" menu, chose your place, and in that panel, chose your url contain building data\n    ")],1),n("p",{staticClass:"q"},[e._v("What is software to build my place?")]),e._m(1),n("p",{staticClass:"q"},[e._v("What is smartcontract's address?")]),e._m(2),e._m(3)])],1)},de=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"greet"},[n("p",[e._v("A virtual world on the Tron blockchain. Build, develop and sell property on the blocks and streets of tronvr.space")]),n("p",[e._v("You own your own land, with your ownership recorded permanently on the blockchain.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"a"},[e._v("\n      Currently, we support import *.vox file form Magic Voxel application. That's easy to create your buiding.\n      "),n("a",{attrs:{href:"https://ephtracy.github.io/",target:"_blank"}},[e._v("Download here")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"a"},[e._v("\n        This contract in mainnet here, address is \n        "),n("a",{attrs:{href:"https://tronsmartcontract.space/#/interact/TCxrVyPhffxPacmHQnnNFgHVn7fo8wLp2U",target:"_blank"}},[e._v("TCxrVyPhffxPacmHQnnNFgHVn7fo8wLp2U")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"credit"},[e._v("\n      Made with\n      "),n("span",{staticStyle:{color:"#e25555"}},[e._v("♥")]),e._v(" by\n      "),n("a",{attrs:{href:"mailto:vietnamese.isme@gmail.com"}},[e._v("KhanhND69")])])}],pe={},he=pe,ve=(n("4144"),Object(p["a"])(he,ue,de,!1,null,null,null));ve.options.__file="HomePage.vue";var fe=ve.exports;r["a"].use(x["a"]);var me=new x["a"]({routes:[{path:"/",name:"index",component:fe},{path:"/edit",name:"edit",component:$,props:function(e){return{location:{x:e.query.x,y:e.query.y}}}},{path:"/my-place",name:"my-place",component:G},{path:"/buy-place",name:"buy-place",component:Z},{path:"/visit",name:"visit",component:le}]}),we=n("2f62");r["a"].use(we["a"]);var ye=new we["a"].Store({state:{contractAddress:"TCxrVyPhffxPacmHQnnNFgHVn7fo8wLp2U",contractInstance:{},baseUrl:"https://tronvr.space/",typeItems:[{name:"Text",dataUrl:""},{name:"KhanhBuild",dataUrl:"https://raw.githubusercontent.com/tronvr/samplevox/master/khanhbuild.vox"},{name:"Man",dataUrl:"https://raw.githubusercontent.com/tronvr/samplevox/master/man.vox"}],places:[]},mutations:{updateContractInstance:function(e,t){e.contractInstance=t},updatePlaces:function(e,t){e.places=t}},actions:{}}),be=n("39f8"),Be=(n("eaf1"),n("dd4a"),n("fe83"),n("619c")),xe={confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"};r["a"].use(Be["a"],xe),r["a"].use(be["a"]),r["a"].config.productionTip=!1,new r["a"](Object(a["a"])({router:me,store:ye},B)).$mount("#app")},"5e98":function(e,t,n){"use strict";var a=n("e4c9"),r=n.n(a);r.a},"64a9":function(e,t,n){},7505:function(e,t,n){"use strict";var a=n("d26d"),r=n.n(a);r.a},a360:function(e,t,n){},ab66:function(e,t,n){"use strict";var a=n("fb26"),r=n.n(a);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.eacf3e49.png"},d26d:function(e,t,n){},d735:function(e,t,n){},d9c6:function(e,t,n){"use strict";var a=n("d735"),r=n.n(a);r.a},e4c9:function(e,t,n){},ee03:function(e,t,n){"use strict";var a=n("a360"),r=n.n(a);r.a},fb26:function(e,t,n){}});
//# sourceMappingURL=app.2006f1f4.js.map
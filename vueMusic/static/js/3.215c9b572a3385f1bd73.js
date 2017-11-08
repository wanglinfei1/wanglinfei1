webpackJsonp([3],{542:function(t,i,e){function n(t){e(588)}var a=e(8)(e(561),e(600),n,"data-v-ec111780",null);t.exports=a.exports},550:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(62),a=e.n(n),s=e(63),o=e.n(s),A=e(187),l=e.n(A),r=e(122),c=e(185),d=e.n(c),p=e(53),g=e(82),u=e.i(r.a)("transform");i.default={mixins:[g.d],data:function(){return{scrollY:0}},props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.clientHeight=this.$refs.bgImage.clientHeight,this.translateY=40-this.clientHeight,this.$refs.list.$el.style.top=this.clientHeight+"px"},methods:a()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.push({path:"/singer"})},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},e.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=1;this.zindex=0;var e=Math.max(t,this.translateY);this.$refs.layer.style[u]="translate3d(0,"+e+"px,0)";var n=Math.abs(t/this.clientHeight);t>0&&(i=1+n,this.zindex=10),t<this.translateY?(this.zindex=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=this.zindex,this.$refs.bgImage.style[u]="scale("+i+")"}},components:{Scroll:o.a,SongList:l.a,loading:d.a}}},551:function(t,i,e){i=t.exports=e(540)(!0),i.push([t.i,".music-list[data-v-77c0eaa0]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-77c0eaa0]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-77c0eaa0]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-77c0eaa0]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-77c0eaa0]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-77c0eaa0]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-77c0eaa0]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-77c0eaa0]{position:relative;height:100%;background:#222}.music-list .list[data-v-77c0eaa0]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-77c0eaa0]{padding:20px 30px}.music-list .list .loading-container[data-v-77c0eaa0]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["D:/TEST/vue-music/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-77c0eaa0] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-77c0eaa0] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-77c0eaa0] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-77c0eaa0] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-77c0eaa0] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-77c0eaa0] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-77c0eaa0] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-77c0eaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},552:function(t,i,e){var n=e(551);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(541)("fd18c5bc",n,!0)},553:function(t,i,e){function n(t){e(552)}var a=e(8)(e(550),e(554),n,"data-v-77c0eaa0",null);t.exports=a.exports},554:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])])]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("Scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]}},555:function(t,i,e){"use strict";function n(){var t=p.b+"/api/getList",i=r()({},{g_tk:5381,uin:0,notice:0,inCharset:"utf-8",outCharset:"utf-8",needNewCode:1,platform:"h5",format:"json"});return d.a.get(t,{params:i}).then(function(t){return A.a.resolve(t.data)})}function a(){var t=p.b+"/api/getPlaylist",i=r()({},{rnd:Math.random(),g_tk:1117229495,jsonpCallback:"getPlaylist",loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,categoryId:136,sortId:5,sin:0,ein:29});return d.a.get(t,{params:i}).then(function(t){return A.a.resolve(t.data)})}function s(t){var i=p.b+"/api/getDiscList",e=r()({},p.c,{type:1,json:1,utf8:1,onlysong:0,disstid:t,loginUin:0,hostUin:0,format:"json",platform:"yqq",needNewCode:0});return d.a.get(i,{params:e}).then(function(t){return A.a.resolve(t.data)})}i.b=n,i.c=a,i.a=s;var o=e(64),A=e.n(o),l=e(83),r=e.n(l),c=e(188),d=e.n(c),p=e(61)},561:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(62),a=e.n(n),s=e(553),o=e.n(s),A=e(53),l=e(555),r=e(123),c=e(61);i.default={data:function(){return{songs:[]}},computed:a()({},e.i(A.a)(["disc"]),{title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}}),created:function(){this._getDiscSongList()},methods:{_getDiscSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push({path:"/recommend"});e.i(l.a)(this.disc.dissid).then(function(i){if(i.code===c.a){var e=i.cdlist[0].songlist;t.songs=t.normalSong(e)}})},normalSong:function(t){for(var i=[],n=0;n<t.length;n++)i.push(e.i(r.a)(t[n]));return i}},components:{musicList:o.a}}},578:function(t,i,e){i=t.exports=e(540)(!0),i.push([t.i,".slide-enter-active[data-v-ec111780],.slide-leave-active[data-v-ec111780]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-ec111780],.slide-leave-to[data-v-ec111780]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["D:/TEST/vue-music/src/components/disc/disc.vue"],names:[],mappings:"AACA,0EAEE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"disc.vue",sourcesContent:["\n.slide-enter-active[data-v-ec111780],\n.slide-leave-active[data-v-ec111780] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-ec111780],\n.slide-leave-to[data-v-ec111780] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},588:function(t,i,e){var n=e(578);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(541)("b0e42712",n,!0)},600:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:t.title,bgImage:t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.215c9b572a3385f1bd73.js.map
webpackJsonp([6],{EC36:function(t,o,e){var i=e("fVEi");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("rjj0").default;n("557318c0",i,!0,{shadowMode:!1,sourceMap:!1})},HcT3:function(t,o,e){o=t.exports=e("FZ+f")(!1),o.push([t.i,".editor-tools{position:absolute;bottom:.625rem;width:100%;height:2.5rem}.editor-tools .list{height:2.5rem;line-height:2.5rem;font-size:0}.editor-tools .iconfont{font-size:1.25rem}.editor-tools .icon-btn{margin-right:.625rem;-webkit-box-sizing:content-box;box-sizing:content-box}.editor-tools .icon-delete{font-size:1.375rem}.editor-tools .newfile{-webkit-transform:translateY(-.125rem);transform:translateY(-.125rem)}.editor-tools .icon-new{font-size:1rem;font-weight:700}.editor-tools .icon-play{position:relative;top:-.0938rem}.editor-tools .undo{position:absolute;top:0;right:0;width:5.25rem;height:100%;text-align:right}.editor-tools .undo button:last-child{margin-right:0}",""])},fVEi:function(t,o,e){o=t.exports=e("FZ+f")(!1),o.push([t.i,".scroll-view[data-v-402603c0]{width:100%;height:100%;-webkit-overflow-scrolling:touch}.scroll-view.x[data-v-402603c0]{overflow-x:auto;overflow-y:hidden}.scroll-view.y[data-v-402603c0]{overflow-y:auto;overflow-x:hidden}.left[data-v-402603c0]{float:left}",""])},i90g:function(t,o,e){var i=e("HcT3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("rjj0").default;n("1c74e722",i,!0,{shadowMode:!1,sourceMap:!1})},sJLE:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e("Biqn"),n=e.n(i),s=e("NYxO"),c=e("lYqf"),a={props:{maxWidth:{type:Number,required:!1,default:5e3},scrollX:{type:Boolean,required:!1,default:!1}}},l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"scroll-view",class:this.scrollX?"x":"y",on:{touchmove:function(t){t.stopPropagation()}}},[this.scrollX?[e("div",{style:{width:this.maxWidth+"px"}},[e("div",{staticClass:"left"},[t._t("default")],2)])]:[t._t("default")]],2)},r=[],u=e("XyMi");function d(t){e("EC36")}var f=!1,p=d,h="data-v-402603c0",v=null,b=Object(u["a"])(a,l,r,f,p,h,v),m=b.exports,w={data:function(){return{}},computed:n()({},Object(s["b"])({pause:"pause",disableUndo:"disableUndo",disableRedo:"disableRedo"})),methods:{play:function(){this.$store.dispatch(this.pause?"play":"pause")},undo:function(){c["a"].history.undo(c["a"])},redo:function(){c["a"].history.redo(c["a"])},useTextTool:function(){this.$textarea({onConfirm:function(t){t.trim()&&c["a"].useTool("text").add({text:t})}})},usePencilTool:function(){c["a"].useTool("pencil")},createNewFile:function(){var t=this;t.$confirm({body:"是否放弃当前编辑，上传新的图片？",confirm:function(){t.$store.dispatch("reset")}})},createGif:function(){c["a"].createGif(),this.$store.commit("status",6)}},components:{ScrollView:m}},x=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"editor-tools",on:{click:function(o){t.$store.dispatch("pause")}}},[e("scroll-view",{staticStyle:{width:"75%"},attrs:{scrollX:""}},[e("div",{staticClass:"list"},[e("icon-button",{staticClass:"newfile",attrs:{"icon-class":"icon-new"},nativeOn:{click:function(o){return t.createNewFile(o)}}}),e("icon-button",{attrs:{"icon-class":"icon-pencil"},nativeOn:{click:function(o){return t.usePencilTool(o)}}}),e("icon-button",{attrs:{"icon-class":"icon-ico-typelayer-ZIpQl"},nativeOn:{click:function(o){return t.useTextTool(o)}}}),e("icon-button",{attrs:{"icon-class":t.pause?"icon-play":"icon-pause"},nativeOn:{click:function(o){return o.stopPropagation(),t.play(o)}}}),e("icon-button",{attrs:{"icon-class":"icon-download"},nativeOn:{click:function(o){return t.createGif(o)}}})],1)]),e("div",{staticClass:"list undo"},[e("icon-button",{attrs:{"icon-class":"icon-undo",disabled:t.disableUndo},nativeOn:{click:function(o){return t.undo(o)}}}),e("icon-button",{attrs:{"icon-class":"icon-redo",disabled:t.disableRedo},nativeOn:{click:function(o){return t.redo(o)}}})],1)],1)},g=[];function y(t){e("i90g")}var k=!1,O=y,T=null,C=null,j=Object(u["a"])(w,x,g,k,O,T,C);o["default"]=j.exports}});
//# sourceMappingURL=6.7a17caab.js.map
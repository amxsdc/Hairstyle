(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-navigate_page-mine-myVoice-myVoice"],{"626e":function(t,e,n){"use strict";var i={uIcon:n("1c6c").default,uButton:n("b655").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"txttitle"},[t._v("语音设置")])],1),n("v-uni-view",{staticClass:"showinfo"},[n("v-uni-text",{staticClass:"hintinfo"},[t._v("性 别：")]),n("v-uni-view",{staticClass:"pullDownMenu"},[n("v-uni-text",{staticClass:"userinfo"},[t._v(t._s(t.gender))]),n("v-uni-picker",{staticClass:"pullEntry",attrs:{range:t.genderList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.genderChange.apply(void 0,arguments)}}},[n("v-uni-label",[n("u-icon",{staticClass:"pullIcon",attrs:{name:"/static/pullDown.png"}})],1),n("v-uni-label",{},[t._v(t._s(t.genderList[t.index]))])],1)],1)],1),n("v-uni-view",{staticClass:"showinfo"},[n("v-uni-text",{staticClass:"hintinfo"},[t._v("语速：")]),n("v-uni-view",{staticClass:"pullDownMenu"},[n("v-uni-text",{staticClass:"userinfo"},[t._v(t._s(t.speed))]),n("v-uni-picker",{staticClass:"pullEntry",attrs:{range:t.speedList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.speedChange.apply(void 0,arguments)}}},[n("v-uni-label",[n("u-icon",{staticClass:"pullIcon",attrs:{name:"/static/pullDown.png"}})],1),n("v-uni-label",{},[t._v(t._s(t.rootList[t.index]))])],1)],1)],1),n("v-uni-view",{staticClass:"showinfo"},[n("v-uni-text",{staticClass:"hintinfo"},[t._v("音量：")]),n("v-uni-view",{staticClass:"pullDownMenu"},[n("v-uni-text",{staticClass:"userinfo"},[t._v(t._s(t.volume))]),n("v-uni-picker",{staticClass:"pullEntry",attrs:{range:t.volumeList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.volumeChange.apply(void 0,arguments)}}},[n("v-uni-label",[n("u-icon",{staticClass:"pullIcon",attrs:{name:"/static/pullDown.png"}})],1),n("v-uni-label",{},[t._v(t._s(t.rootList[t.index]))])],1)],1)],1),n("v-uni-view",{staticClass:"showinfo"},[n("v-uni-text",{staticClass:"hintinfo"},[t._v("音调：")]),n("v-uni-view",{staticClass:"pullDownMenu"},[n("v-uni-text",{staticClass:"userinfo"},[t._v(t._s(t.tone))]),n("v-uni-picker",{staticClass:"pullEntry",attrs:{range:t.toneList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.toneChange.apply(void 0,arguments)}}},[n("v-uni-label",[n("u-icon",{staticClass:"pullIcon",attrs:{name:"/static/pullDown.png"}})],1),n("v-uni-label",{},[t._v(t._s(t.rootList[t.index]))])],1)],1)],1),n("v-uni-view",{staticClass:"buttonSet"},[n("u-button",{staticClass:"button-LogCancel",style:[t.buttonStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),n("u-button",{staticClass:"button-LogCancel",style:[t.buttonStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},6970:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-page-body[data-v-8a7fcea0]{background-color:#fff}.content[data-v-8a7fcea0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;width:100%;height:100%}.content .logo[data-v-8a7fcea0]{height:72px;width:72px;margin-top:%?60?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%;border-radius:5px;-moz-box-shadow:0 0 10px 10px #06c;-webkit-box-shadow:0 0 10px 10px #06c;box-shadow:0 0 10px 10px #06c}.content .showinfo[data-v-8a7fcea0]{width:50%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.content .showinfo .hintinfo[data-v-8a7fcea0]{width:50%;margin-top:20px;font-size:12px}.content .showinfo .userinfo[data-v-8a7fcea0]{width:80%;height:20px;background-color:#fff;border-radius:3px;margin-top:20px;font-size:12px;-moz-box-shadow:inset 0 0 10px #ccc;-webkit-box-shadow:inset 0 0 10px #ccc;box-shadow:inset 0 0 10px #ccc}.content .showinfo .pullDownMenu[data-v-8a7fcea0]{width:80%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.content .showinfo .pullEntry[data-v-8a7fcea0]{margin-top:20px;width:20px;height:20px}.content .showinfo .pullIcon[data-v-8a7fcea0]{height:20px;width:20px}.content .buttonSet[data-v-8a7fcea0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.content .button-LogCancel[data-v-8a7fcea0]{width:40%;height:35px;font-size:14px;margin-top:60px}.content .title[data-v-8a7fcea0]{width:100%;height:50px;padding-left:20px;font-size:14px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:4px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center;background-color:#2979ff}body.?%PAGE?%[data-v-8a7fcea0]{background-color:#fff}',""]),t.exports=e},"6d3a":function(t,e,n){"use strict";n.r(e);var i=n("626e"),a=n("bdea");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a3a5");var s,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"8a7fcea0",null,!1,i["a"],s);e["default"]=c.exports},"88b7":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("fc11")),o={data:function(){var t;return t={genderList:["男","女"],rootList:["1","2","3","4","5"]},(0,a.default)(t,"genderList",[0,1,3,4]),(0,a.default)(t,"toneList",[0,1,2,3,4,5,6,7,8,9]),(0,a.default)(t,"volumeList",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),(0,a.default)(t,"speedList",[0,1,2,3,4,5,6,7,8,9]),(0,a.default)(t,"gender","男"),(0,a.default)(t,"speed","1"),(0,a.default)(t,"volume","1"),(0,a.default)(t,"tone","1"),(0,a.default)(t,"index",-1),(0,a.default)(t,"userName",""),t},computed:{buttonStyle:function(){var t={color:"#fff"};return t.backgroundColor=this.$u.color["warning"],t}},methods:{onLoad:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){t.userName=e.data.name}}),uni.request({url:"/api/voiceSetting",method:"POST",data:{userName:t.userName},success:function(e){t.gender=e.data.data.auSetVoiPer,t.speed=e.data.data.auSetSpd,t.volume=e.data.data.auSetVol,t.tone=e.data.data.auSetPit}})},genderChange:function(t){this.gender=this.genderList[t.target.value]},volumeChange:function(t){this.volume=this.volumeList[t.target.value]},speedChange:function(t){this.speed=this.speedList[t.target.value]},toneChange:function(t){this.tone=this.toneList[t.target.value]},submit:function(){var t=this;uni.showModal({title:"确认提交",content:"确认要更改语音设置吗？",success:function(e){e.confirm?uni.request({url:"/api/setVoice",method:"POST",data:{userName:t.userName,auSetSpd:t.speed,auSetVol:t.volume,auSetPit:t.tone,auSetVoiPer:t.gender},success:function(e){1==e.data.data.status?(t.$u.toast("修改成功"),uni.navigateBack({delta:1})):t.$u.toast("修改失败,请重新提交")}}):e.cancel&&t.$u.toast("取消上传")}})},cancel:function(){uni.showModal({title:"确认取消",content:"确认要取消并退出编辑吗？",success:function(t){t.confirm&&uni.navigateBack({delta:1})}})}}};e.default=o},a3a5:function(t,e,n){"use strict";var i=n("cdec"),a=n.n(i);a.a},bdea:function(t,e,n){"use strict";n.r(e);var i=n("88b7"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},cdec:function(t,e,n){var i=n("6970");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("015eca22",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-navigate_page-Home-passageDetails-passageDetails"],{"1c27":function(e,t,i){"use strict";i.r(t);var s=i("4701"),a=i("a594");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("5dfd");var o,c=i("f0c5"),l=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"497d00df",null,!1,s["a"],o);t["default"]=l.exports},4701:function(e,t,i){"use strict";var s={uLineProgress:i("4b6e").default,uButton:i("b655").default,uCheckbox:i("cc82").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"txttitle"},[e._v("文章详情")])],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"element"},[i("v-uni-image",{staticClass:"icon",attrs:{src:e.currentUserPhoto},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.userinfoClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"fatherVessel"},[i("v-uni-view",{staticClass:"topBar"},[i("v-uni-text",[e._v("作者:"+e._s(e.passageInfor.split(" ")[0]))]),i("v-uni-text",[e._v("文章标题:"+e._s(e.passageInfor.split(" ")[1]))]),i("v-uni-text",[e._v("发布时间:"+e._s(e.passageInfor.split(" ")[2])+" "+e._s(e.passageInfor.split(" ")[3]))])],1),i("v-uni-view",{staticClass:"editBar"}),e.idPassage!=e.currentIndex?i("v-uni-view",{staticClass:"audioSetting"},[i("v-uni-image",{staticClass:"playIcon",attrs:{src:"/static/play.png",id:e.idPassage},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playAudio.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"processorText",attrs:{id:e.idPassage}},[e._v("00:00/00:00")]),i("u-line-progress",{staticClass:"processorBar",attrs:{height:e.processorHeight,striped:!0,percent:e.zero,"show-percent":!1,"striped-active":!0,id:e.idPassage}}),i("v-uni-text",{staticClass:"likes",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.likesClick.apply(void 0,arguments)}}},[e._v("|赞:"+e._s(e.likes))])],1):e._e(),e.idPassage==e.currentIndex?i("v-uni-view",{staticClass:"audioSetting"},[i("v-uni-image",{staticClass:"playIcon",attrs:{src:"/static/pause.png",id:e.idPassage},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playAudio.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"processorText",attrs:{id:e.idPassage}},[e._v(e._s(e.currentPlayTime)+":00/"+e._s(e.duration)+":00")]),i("u-line-progress",{staticClass:"processorBar",attrs:{height:e.processorHeight,striped:!0,percent:e.playPercent,"show-percent":!1,"striped-active":!0,id:e.idPassage}}),i("v-uni-text",{staticClass:"likes",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.likesClick.apply(void 0,arguments)}}},[e._v("|赞:"+e._s(e.likes))])],1):e._e()],1)],1)],1),i("v-uni-view",{staticClass:"opBar"},[i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"giveComment",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editClick.apply(void 0,arguments)}}},[e._v("|编辑|")]),i("v-uni-text",{staticClass:"giveComment",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.giveCommentClick.apply(void 0,arguments)}}},[e._v("|评论|")])],1),i("v-uni-view",{staticClass:"allComment"},[i("v-uni-text",{staticClass:"titleComment"},[e._v("所有评论")]),i("u-button",{directives:[{name:"show",rawName:"v-show",value:e.showCheckboxes,expression:"showCheckboxes"}],staticClass:"deletebutton",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonDelete.apply(void 0,arguments)}}},[e._v("删除")])],1),i("v-uni-view",{staticClass:"list"},e._l(e.hotCommentList,(function(t,s){return i("v-uni-view",{key:s,staticClass:"cell",attrs:{"hover-class":"hover"}},[t!=e.Empty?i("v-uni-view",{staticClass:"element"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/mine1.png",id:s},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.userinfoClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"fatherVessel"},[i("v-uni-view",{staticClass:"commentBar"},[i("v-uni-text",{attrs:{id:s}},[e._v("评论者:"+e._s(t.split(" ")[0]))])],1),i("v-uni-text",{attrs:{id:s}},[e._v("评论时间:"+e._s(t.split(" ")[1])+" "+e._s(t.split(" ")[2]))]),i("v-uni-view",{staticClass:"editBar"}),s!=e.currentCheckBoxIndex?i("v-uni-view",{staticClass:"checkboxes"},[i("u-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.showCheckboxes,expression:"showCheckboxes"}],staticClass:"checkbox",attrs:{size:"12px","icon-size":"12px","label-size":"12px",disabled:!1,name:s},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.hotCommentCheckboxChange.apply(void 0,arguments)}},model:{value:e.checkedHotComment[s],callback:function(t){e.$set(e.checkedHotComment,s,t)},expression:"checkedHotComment[index]"}},[e._v("删除评论")])],1):e._e(),s==e.currentCheckBoxIndex?i("v-uni-view",{staticClass:"checkboxes"},[i("u-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.showCheckboxes,expression:"showCheckboxes"}],staticClass:"checkbox",attrs:{size:"12px","icon-size":"12px","label-size":"12px",disabled:!1,name:s},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.hotCommentCheckboxChange.apply(void 0,arguments)}},model:{value:e.checkedHotComment[s],callback:function(t){e.$set(e.checkedHotComment,s,t)},expression:"checkedHotComment[index]"}},[e._v("删除评论")])],1):e._e(),s!=e.currentIndex?i("v-uni-view",{staticClass:"audioSetting"},[i("v-uni-image",{staticClass:"playIcon",attrs:{src:"/static/play.png",id:s},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playAudio.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"processorText",attrs:{id:s}},[e._v("00:00/00:00")]),i("u-line-progress",{staticClass:"processorBar",attrs:{height:e.processorHeight,striped:!0,percent:e.zero,"show-percent":!1,"striped-active":!0,id:s}}),i("v-uni-text",{staticClass:"likes",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.likesClick.apply(void 0,arguments)}}},[e._v("|赞:"+e._s(e.likes))])],1):e._e(),s==e.currentIndex?i("v-uni-view",{staticClass:"audioSetting"},[i("v-uni-image",{staticClass:"playIcon",attrs:{src:"/static/pause.png",id:s},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playAudio.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"processorText",attrs:{id:s}},[e._v(e._s(e.currentPlayTime)+":00/"+e._s(e.duration)+":00")]),i("u-line-progress",{staticClass:"processorBar",attrs:{height:e.processorHeight,striped:!0,percent:e.playPercent,"show-percent":!1,"striped-active":!0,id:s}}),i("v-uni-text",{staticClass:"likes",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.likesClick.apply(void 0,arguments)}}},[e._v("|赞:"+e._s(e.likes))])],1):e._e()],1)],1):e._e()],1)})),1),i("v-uni-view",{staticClass:"list"},e._l(e.allCommentList,(function(t,s){return i("v-uni-view",{key:s,staticClass:"cell",attrs:{"hover-class":"hover"}},[t!=e.Empty?i("v-uni-view",{staticClass:"element"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/mine1.png",id:s+5},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.userinfoClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"fatherVessel"},[i("v-uni-view",{staticClass:"commentBar"},[i("v-uni-text",{attrs:{id:s+5}},[e._v("评论者:"+e._s(t.split(" ")[0]))])],1),i("v-uni-text",{attrs:{id:s+5}},[e._v("评论时间:"+e._s(t.split(" ")[1])+" "+e._s(t.split(" ")[2]))]),i("v-uni-view",{staticClass:"editBar"}),s!=e.currentCheckBoxIndex?i("v-uni-view",{staticClass:"checkboxes"},[i("u-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.showCheckboxes,expression:"showCheckboxes"}],staticClass:"checkbox",attrs:{size:"12px","icon-size":"12px","label-size":"12px",disabled:!1,name:s},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.allCommentCheckboxChange.apply(void 0,arguments)}},model:{value:e.checkedAllComment[s],callback:function(t){e.$set(e.checkedAllComment,s,t)},expression:"checkedAllComment[index]"}},[e._v("删除评论")])],1):e._e(),s==e.currentCheckBoxIndex?i("v-uni-view",{staticClass:"checkboxes"},[i("u-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.showCheckboxes,expression:"showCheckboxes"}],staticClass:"checkbox",attrs:{size:"12px","icon-size":"12px","label-size":"12px",disabled:!1,name:s},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.allCommentCheckboxChange.apply(void 0,arguments)}},model:{value:e.checkedAllComment[s],callback:function(t){e.$set(e.checkedAllComment,s,t)},expression:"checkedAllComment[index]"}},[e._v("删除评论")])],1):e._e(),s+5!=e.currentIndex?i("v-uni-view",{staticClass:"audioSetting"},[i("v-uni-image",{staticClass:"playIcon",attrs:{src:"/static/play.png",id:s+5},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playAudio.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"processorText",attrs:{id:s+5}},[e._v("00:00/00:00")]),i("u-line-progress",{staticClass:"processorBar",attrs:{height:e.processorHeight,striped:!0,percent:e.zero,"show-percent":!1,"striped-active":!0,id:s}}),i("v-uni-text",{staticClass:"likes",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.likesClick.apply(void 0,arguments)}}},[e._v("|赞:{{}}")])],1):e._e(),s+5==e.currentIndex?i("v-uni-view",{staticClass:"audioSetting"},[i("v-uni-image",{staticClass:"playIcon",attrs:{src:"/static/pause.png",id:s+5},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playAudio.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"processorText",attrs:{id:s+5}},[e._v(e._s(e.currentPlayTime)+":00/"+e._s(e.duration)+":00")]),i("u-line-progress",{staticClass:"processorBar",attrs:{height:e.processorHeight,striped:!0,percent:e.playPercent,"show-percent":!1,"striped-active":!0,id:s}}),i("v-uni-text",{staticClass:"likes",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.likesClick.apply(void 0,arguments)}}},[e._v("|赞:{{}}")])],1):e._e()],1)],1):e._e()],1)})),1)],1)},n=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return s}))},5294:function(e,t,i){var s=i("24fb");t=s(!1),t.push([e.i,".content[data-v-497d00df]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}\n/*一个列元素 */.cell[data-v-497d00df]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;width:100%}\n/*在热门评论里通过list父组件设置宽度 */.list[data-v-497d00df]{width:100%}\n/*列表外框-元素 */.element[data-v-497d00df]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:90%;height:90px;padding-left:10px;margin:4px;border-radius:4px;font-size:12px;-moz-box-shadow:inset 0 0 10px #ccc;-webkit-box-shadow:inset 0 0 10px #ccc;box-shadow:inset 0 0 10px #ccc}\n/*头像 */.icon[data-v-497d00df]{width:30px;height:30px;margin-right:4px;border-radius:3px;-moz-box-shadow:0 0 1px 1px #06c;-webkit-box-shadow:0 0 1px 1px #06c;box-shadow:0 0 1px 1px #06c}\n/*删除按钮 */.deletebutton[data-v-497d00df]{width:30px;height:23px;margin-right:4px;background-color:#f50;font-size:12px}\n/*音频播放 */.audioSetting[data-v-497d00df]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}\n/*play图标 */.playIcon[data-v-497d00df]{width:20px;height:20px}\n/*进度条 */.processorBar[data-v-497d00df]{margin-left:4px;width:50%}\n/*列表栏的父容器 */.fatherVessel[data-v-497d00df]{font-size:12px;width:100%;height:100%}\n/*第三栏即编辑评论栏 */.editBar[data-v-497d00df]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}\n/*顶栏显示栏 */.topBar[data-v-497d00df]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:flex}\n/*点赞数 */.likes[data-v-497d00df]{color:#2b85e4;margin-left:5px}\n/*模块标题 */.title[data-v-497d00df]{width:100%;height:50px;padding-left:20px;font-size:14px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:4px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center;background-color:#2979ff}\n/*编辑评论 */.editComment[data-v-497d00df]{font-size:12px;color:#2b85e4;margin-left:4px}\n/*评论时间 */\n/* .commentTime{\n\tfont-size: 12px;\n} */\n/*显示评论 */.allComment[data-v-497d00df]{width:90%;height:30px;padding-left:20px;font-size:14px;padding-top:5px;margin-top:10px;border-radius:4px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center;background-color:#5ff}\n/*热门评论标题 */.titleComment[data-v-497d00df]{font-size:14px}\n/*操作条 */.opBar[data-v-497d00df]{width:90%;height:30px;font-size:12px;padding-top:5px;border-radius:4px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;background-color:#f0f0f0;-moz-box-shadow:inset 0 0 10px #ccc;-webkit-box-shadow:inset 0 0 10px #ccc;box-shadow:inset 0 0 10px #ccc}\n/*操作条文本 */.giveComment[data-v-497d00df]{color:#2b85e4;margin-right:20px}",""]),e.exports=t},"5dfd":function(e,t,i){"use strict";var s=i("a948"),a=i.n(s);a.a},a594:function(e,t,i){"use strict";i.r(t);var s=i("d0ab"),a=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);t["default"]=a.a},a948:function(e,t,i){var s=i("5294");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=i("4f06").default;a("445f63ce",s,!0,{sourceMap:!1,shadowMode:!1})},d0ab:function(e,t,i){"use strict";i("a434"),i("e25e"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=uni.createInnerAudioContext(),a={data:function(){return{passageInfor:"",likes:99,currentCheckBoxIndex:-1,processorHeight:"5px",commentTime:"2019-07-12 12:10:13",currentPlayTime:"00",checkedHotComment:[],checkedAllComment:[],zero:0,currentIndex:-1,idPassage:-2,duration:0,userName:"",list:[],hotCommentList:[],allCommentList:[],playStatus:!1,playORnot:!0,playPercent:0,audioSrc:"",showCheckboxes:!1,hasHotItem:!1,hasHAllItem:!1,Empty:"",currentUserPhoto:"/static/mine1.png",passageID:"",isShow:!1,myName:""}},onLoad:function(e){var t=this;t.passageID=e.ID,t.userName=e.currentName,uni.getStorage({key:"userInfo",success:function(e){t.myName=e.data.name,e.data.name==t.userName&&(t.isShow=!0)}}),uni.request({url:"/api/readArticle",method:"POST",data:{postID:t.passageID,userName:t.myName},success:function(e){var i=e.data.data;if(i[0].status){"1"==i[0].userAdmin&&(t.showCheckboxes=!0),t.passageInfor=i[1].authorUserName+" "+i[1].postTitle+" "+i[1].postTime+" "+i[1].postAudio+" "+i[1].authorPhoto;for(var s=0;s<i[2].length;s++)t.hotCommentList.push(i[2][s].cmUserName+" "+i[2][s].cmTime+" "+i[2][s].cmAudio+" "+i[2][s].cmUserPhoto+" "+i[2][s].cmID),t.checkedHotComment.push(!1)}else t.$u.toast("加载文章失败")}})},onShow:function(){var e=this;""!=e.passageID&&""!=e.userName&&uni.request({url:"/api/readArticle",method:"POST",data:{postID:e.passageID,userName:e.myName},success:function(t){var i=t.data.data;if(i[0].status){for(var s=e.hotCommentList.length,a=0;a<s;a++)e.hotCommentList.splice(0,1),e.checkedHotComment.splice(0,1);for(a=0;a<i[2].length;a++)e.hotCommentList.push(i[2][a].cmUserName+" "+i[2][a].cmTime+" "+i[2][a].cmAudio+" "+i[2][a].cmUserPhoto+" "+i[2][a].cmID),e.checkedHotComment.push(!1)}else e.$u.toast("加载评论失败")}})},methods:{userinfoClick:function(e){var t=this;uni.navigateTo({url:"../../mine/mySettings/basicInfo/basicInfo?userName="+t.userName})},buttonDelete:function(e){for(var t=this,i=0;i<t.checkedHotComment.length;i++)if(t.checkedHotComment[i]){t.hasHotItem=!0;break}t.hasHotItem?uni.showModal({title:"确认删除",content:"确认要删除选中评论吗？",success:function(e){if(e.confirm){var i=[];if(t.hasHotItem)for(var s=t.hotCommentList.length,a=0,n=0;a<s;a++)t.checkedHotComment[n]?(i.push(t.hotCommentList[n].split(" ")[5]),t.hotCommentList.splice(n,1),t.checkedHotComment.splice(n,1)):n+=1;uni.request({url:"/api/deleteComment",method:"POST",data:{cmID:i},success:function(e){e.data.data.status?t.$u.toast("删除成功"):t.$u.toast("删除失败")},fail:function(e){t.$u.toast("删除失败")}})}else e.cancel&&t.$u.toast("取消删除")}}):t.$u.toast("请选择要删除的评论")},hotCommentCheckboxChange:function(e){var t=e.name;this.checkedHotComment[t]=!this.checkedHotComment[t]},allCommentCheckboxChange:function(e){var t=e.name;this.checkedAllComment[t]=!this.checkedAllComment[t]},likesClick:function(){this.$u.toast("当前未安排点赞响应")},giveCommentClick:function(){var e=this;uni.navigateTo({url:"../../mine/myComment/postComment/postComment?passageID="+e.passageID})},editClick:function(){var e=this;uni.navigateTo({url:"editPassage/editPassage?passageID="+e.passageID})},playAudio:function(e){var t=this;-2==e.target.id?s.src=t.passageInfor.split(" ")[4]:s.src=t.hotCommentList[e.target.id].split(" ")[3],t.playStatus&&t.currentIndex!=e.target.id&&(t.playStatus=!1,t.currentIndex=-1,t.playORnot=!0,s.stop(),t.playPercent=0),t.playORnot?(t.playStatus=!0,t.currentIndex=e.target.id,t.playORnot=!1,s.play(),s.onCanplay((function(e){t.duration=parseInt(s.duration)})),s.onTimeUpdate((function(e){t.playPercent=s.currentTime/t.duration*100,t.currentPlayTime=parseInt(s.currentTime)}))):(t.play="播放",t.currentIndex=-1,t.playORnot=!0,s.pause(),t.playPercent=0),s.onEnded((function(e){t.playPercent=0,t.currentIndex=-1,t.playORnot=!0})),s.onError((function(e){t.$u.toast("音频播放发生错误,加载失败")}))}}};t.default=a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login_regist-login-login"],{1546:function(t,e,i){"use strict";var n={uCheckbox:i("cc82").default,uButton:i("b655").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title"},[t._v("CSI技术语音吧")]),i("v-uni-image",{staticClass:"logo",attrs:{src:t.myHeadPhoto}}),i("v-uni-view",{staticClass:"inputname"},[i("v-uni-text",{staticClass:"hintName"},[t._v("用户名：")]),i("v-uni-input",{staticClass:"userName",attrs:{type:"text",placeholder:"请输入用户名"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.changeName.apply(void 0,arguments)}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),i("v-uni-view",{staticClass:"inputname"},[i("v-uni-text",{staticClass:"hintPassword"},[t._v("密   码：")]),i("v-uni-input",{staticClass:"userPassword",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}})],1),i("v-uni-view",{staticClass:"aboutpassword"},[i("u-checkbox",{staticClass:"checkbox",attrs:{size:"13px","icon-size":"12px","label-size":"12px",disabled:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("记住密码")]),i("v-uni-text",{staticClass:"forget",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.forgetpassword.apply(void 0,arguments)}}},[t._v("忘记密码？")])],1),i("v-uni-view",{staticClass:"buttonSet"},[i("u-button",{staticClass:"button-LogReg",style:[t.buttonStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登录")]),i("u-button",{staticClass:"button-LogReg",style:[t.buttonStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registButton.apply(void 0,arguments)}}},[t._v("注册")])],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"24aa":function(t,e,i){var n=i("7568");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("970ee3da",n,!0,{sourceMap:!1,shadowMode:!1})},"2ea7":function(t,e,i){var n=i("3b75");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("633a6743",n,!0,{sourceMap:!1,shadowMode:!1})},"3b75":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-checkbox[data-v-e356a272]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-e356a272]{color:#606266;-webkit-box-flex:0;-webkit-flex:none;flex:none;display:-webkit-flex;\r\ndisplay:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-e356a272]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-e356a272]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-e356a272]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-e356a272]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-e356a272]{color:#c8c9cc!important}.u-checkbox__label[data-v-e356a272]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-e356a272]{color:#c8c9cc}',""]),t.exports=e},"4b4b":function(t,e,i){"use strict";i.r(e);var n=i("822d"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},5837:function(t,e,i){"use strict";var n=i("2ea7"),a=i.n(n);a.a},"6da4":function(t,e,i){"use strict";var n=i("24aa"),a=i.n(n);a.a},7568:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-page-body[data-v-13190ff6]{background-color:#f0f0f0}.content[data-v-13190ff6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;width:100%;height:100%}.content .buttonSet[data-v-13190ff6]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.content .checkbox[data-v-13190ff6]{margin-top:20px}.content .logo[data-v-13190ff6]{height:72px;width:72px;margin-top:%?30?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%;border-radius:5px;-moz-box-shadow:0 0 10px 10px #06c;-webkit-box-shadow:0 0 10px 10px #06c;box-shadow:0 0 10px 10px #06c}.content .inputname[data-v-13190ff6]{width:50%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.content .inputname .hintName[data-v-13190ff6]{width:70px;font-size:12px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .inputname .hintPassword[data-v-13190ff6]{width:70px;margin-top:20px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:12px}.content .inputname .userName[data-v-13190ff6]{width:100%;border-radius:3px;background-color:#fff;font-size:11px;-moz-box-shadow:inset 0 0 10px #ccc;-webkit-box-shadow:inset 0 0 10px #ccc;box-shadow:inset 0 0 10px #ccc}.content .inputname .userPassword[data-v-13190ff6]{width:100%;background-color:#fff;border-radius:3px;margin-top:20px;font-size:11px;-moz-box-shadow:inset 0 0 10px #ccc;-webkit-box-shadow:inset 0 0 10px #ccc;box-shadow:inset 0 0 10px #ccc}.content .forget[data-v-13190ff6]{font-size:12px;margin-left:40px;margin-top:20px;color:#2b85e4}.content .button-LogReg[data-v-13190ff6]{width:40%;height:35px;font-size:14px;margin-top:60px}.content .title[data-v-13190ff6]{margin-top:%?100?%;text-align:center;font-size:28px;font-weight:500;margin-bottom:%?100?%}.content uni-input[data-v-13190ff6]{text-align:left;margin-bottom:%?10?%;padding-bottom:%?6?%}body.?%PAGE?%[data-v-13190ff6]{background-color:#f0f0f0}',""]),t.exports=e},"822d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{checked:!1,userName:"",userPassword:"",myHeadPhoto:"",tempPhotoLink:"",tempUserName:""}},computed:{buttonStyle:function(){var t={color:"#fff"};return t.backgroundColor=this.$u.color["warning"],t}},components:{},methods:{changeName:function(t){var e=this;t.target.value!=e.tempUserName?e.myHeadPhoto="/static/mine1.png":e.myHeadPhoto=e.tempPhotoLink},onLoad:function(){var t=this;uni.getNetworkType({success:function(t){"none"==t.networkType||t.networkType},fail:function(e){t.$u.toast("无法获取您的网络状态")}}),uni.getStorage({key:"headPhotoLink",success:function(e){""!=e.data.Photolink?(t.myHeadPhoto=e.data.Photolink,t.tempPhotoLink=e.data.Photolink):(t.myHeadPhoto="/static/mine1.png",t.tempPhotoLink="/static/mine1.png",t.$u.toast("头像加载失败"))},fail:function(e){t.myHeadPhoto="/static/mine1.png",t.tempPhotoLink="/static/mine1.png",t.$u.toast("头像加载失败")}})},onShow:function(){var t=this;uni.getStorage({key:"userInfo",success:function(e){e.data.ischecked?(t.checked=e.data.ischecked,t.userName=e.data.name,t.tempUserName=e.data.name,t.userPassword=e.data.password):(t.userName="",t.userPassword="")}})},checkboxChange:function(t){this.checked=t.value},forgetpassword:function(){uni.navigateTo({url:"forgetPassword/forgetPassword"})},submit:function(){var t=this;""!=t.userName&&""!=t.userPassword?6==this.userPassword.length?(1==t.checked?uni.setStorage({key:"userInfo",data:{name:t.userName,password:t.userPassword,ischecked:t.checked}}):uni.setStorage({key:"userInfo",data:{name:t.userName,password:"",ischecked:t.checked}}),this.$u.toast("发出登录请求"),uni.request({url:"/api/login",method:"POST",data:{userName:t.userName,password:t.userPassword},success:function(e){e.data.data.status?(uni.setStorage({key:"myKey",data:{myKey:e.data.data.admin}}),uni.switchTab({url:"../../navigate_page/Home/home"})):t.$u.toast("登录失败")}})):this.$u.toast("您的密码格式不正确，请输入6位密码"):this.$u.toast("请先完善用户名和密码再登录")},registButton:function(){uni.navigateTo({url:"../regist/regist"})}}};e.default=n},"9bb8":function(t,e,i){"use strict";var n={uIcon:i("1c6c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-checkbox",style:[t.checkboxStyle]},[i("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:t.checkboxIconSize,color:t.iconColor}})],1),i("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:t.$u.addUnit(t.labelSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},c584:function(t,e,i){"use strict";i.r(e);var n=i("cd40"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},cc82:function(t,e,i){"use strict";i.r(e);var n=i("9bb8"),a=i("c584");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5837");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e356a272",null,!1,n["a"],s);e["default"]=c.exports},cd40:function(t,e,i){"use strict";i("a15b"),i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var t={};return this.elActiveColor&&this.value&&!this.isDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.checkboxSize),t.height=this.$u.addUnit(this.checkboxSize),t},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&t.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled--checked"),t.join(" ")},checkboxStyle:function(){var t={};return this.parent&&this.parent.width&&(t.width=this.parent.width,t.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(t.width="100%",t.flex="0 0 100%"),t}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){t.parent&&t.parent.emitEvent&&t.parent.emitEvent()}),80)},setValue:function(){var t=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(e){e.value&&t++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&t>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};e.default=n},da7f:function(t,e,i){"use strict";i.r(e);var n=i("1546"),a=i("4b4b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6da4");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"13190ff6",null,!1,n["a"],s);e["default"]=c.exports}}]);
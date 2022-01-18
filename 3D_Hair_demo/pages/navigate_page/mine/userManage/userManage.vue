<template>
    <view class="content">
		<view class="title">
			<text class="txttitle">用户管理</text>
			<u-button @click="buttonDelete" class="deletebutton">删除</u-button>
		</view>
         <view class="list">
             <view class="cell" hover-class="hover" v-for="(item,index) in list" :key="index">
					<view class="element">
                       <image class="icon" @click="userinfoClick(index)" src="/static/mine1.png"></image>
					   <view class="fatherVessel" @click="userinfoClick(index)">
							<text :id="index">用户名:{{item.split(" ")[0]}}</text>
							<text :id="index">{{" "}}最后登录时间:{{item.split(" ")[4].split("\"")[1]}} {{item.split(" ")[5].split("\"")[0]}}</text>
							<view class="editBar">
								<!-- 评论时间+编辑评论 -->
								<text class="commentTime">注册时间:{{item.split(" ")[2].split("\"")[1]}} {{item.split(" ")[3].split("\"")[0]}}</text>
								<text class="editUserInfor" @click="editUserInfor(index)">|编辑用户</text>
							</view>
					   </view>
					   <!-- 删除评论复选框 -->
					   <view class="checkboxes" v-if="index!=currentCheckBoxIndex">
					   	<!-- 删除选择复选框 -->
					   	<u-checkbox class="checkbox" size="12px" icon-size="12px" label-size="12px" @change="checkboxChange" v-model="checked[index]" :disabled="false" :v-show="showCheckboxes" :name="index">删除用户</u-checkbox>
					   </view>
					   <view class="checkboxes" v-if="index==currentCheckBoxIndex">
					   	<!-- 删除选择复选框 -->
					   	<u-checkbox class="checkbox" size="12px" icon-size="12px" label-size="12px" @change="checkboxChange" v-model="checked[index]" :disabled="false" :v-show="showCheckboxes" :name="index">删除用户</u-checkbox>
					   </view>
					</view>
             </view>
         </view>
    </view>
</template>

<script>
	//全局音频播放器实例
	const audioIns = uni.createInnerAudioContext();
	
	export default {
		data() {
			return {
				currentCheckBoxIndex:-1,		//选择复选框索引
				commentTime:"2021-07-12 12:10:13",//评论时间
				checked:[],			//复选框选中状态
				userName:'',					//用户名
				list:[],//列表值
				content: '',					//
				showCheckboxes:true,			//是否显示删除复选框
				Empty:'',						//空字符
			}
		},
		onLoad(){
			let _this=this;
			
			//获取用户名
			uni.getStorage({
				key:"userInfo",
				success(e){
					_this.userName=e.data.name;
				}
			})
			
			uni.request({
				url:'/api/getAllUserInfor/'+_this.userName,
				method:"GET",
				data:{userName:_this.userName},
				success:(res)=> {
					var userList=res.data.data;
					//此处用for循环实现信息获取
					for(var i=0;i<userList.length;i++){
							//用户名-头像-注册时间-最后登录时间-用户ID-用户权限
						_this.list.push(userList[i][1]+" "+userList[i][2]+" "
							+userList[i][3]+" "+userList[i][4]+" "+userList[i][0]+" "+userList[i][5]);
						_this.checked.push(false);
					}
				}
			})
		},
		methods:{
			//点击用户头像打开用户信息详情
			userinfoClick(e){
				var _this=this;
				//这里要解析出用户姓名等等以道详情页面展示
				uni.navigateTo({
					//用带参跳转
					url:'../mySettings/basicInfo/basicInfo?userName='+_this.list[e].split(" ")[0],
				})
			},
			buttonDelete(e){
				//this指针
				let _this=this;
				//判断状态
				var hasItem=false;			//用于判断是否有删除项
				for(var i=0;i<_this.checked.length;i++){
					if(_this.checked[i]){
						hasItem=true;
						break;
					}
				}
				if(!hasItem){			//没有选择删除项则提示添加删除项
					_this.$u.toast("请选择要删除的用户");
					return;
				}
				
				//弹窗确认删除此用户信息
				uni.showModal({
					title: '确认删除',
					content: '确认要删除选中用户吗？',
					success: function (res) {
						if (res.confirm) {
							_this.$u.toast('用户点击确定');
							
							//遍历列表删除对应对象，管理员不可删除
							var selectItem=[];
							var checkedListLength=_this.checked.length;
							for(var i=0,j=0;i<checkedListLength;i++){
								if(_this.checked[j]){
									if(_this.list[j].split(" ")[7]=="1"){
										_this.$u.toast("选中对象包含管理员,管理员不可删除");
										j=j+1;			//要跳过管理员，进入下一索引
										continue;		//跳过管理员继续执行循环
									}
									//非管理员用户继续被删除
									selectItem.push(_this.list[j].split(" ")[0])
									_this.list.splice(j,1);
									_this.checked.splice(j,1);
								}
								else{
									j=j+1;
								}
							}
							if(selectItem.length==0){
								return;
							}
							//向服务器发送删除对象，列表形式
							uni.request({
								url:'/api/deleteUser',
								method:'POST',
								data:{userName:selectItem},
								success(e) {
									_this.$u.toast("删除成功")
								},
								fail(e) {
									_this.$u.toast("删除失败")
								}
							});
							
						} else if (res.cancel) {
							_this.$u.toast('取消删除');
						}
					}
				});
			},
			
			//选择复选框以删除评论
			checkboxChange(e){
				//点击复选框所得id
				var index=e;
				
				//通过列表去设置对应的选中状态
				this.checked[index]=!this.checked[index];//将对应状态的复选框取反
			},
			
			//编辑用户信息
			editUserInfor(index){
				var _this=this;
				uni.navigateTo({
					url:'editUserInfor/editUserInfor?userName='+_this.list[index].split(" ")[0],
				});
			},
		}
	}
</script>

<style>
	//列表外框-元素
	.element{
		flex-direction: row;
		display: flex;
		align-items: center;
		width: 100%;
		height: 40px;
		padding-left: 10px;
		margin: 4px;
		border-radius: 4px;
		font-size: 12px;
		-moz-box-shadow: inset 0 0 10px #CCC;
		-webkit-box-shadow: inset 0 0 10px #CCC;
		box-shadow: inset 0 0 10px #CCC;
	}
	//删除复选库框
	.checkboxes{
		width: 110px;
		height:40px;
		margin-top: 5px;
		display: flex;
		align-items: center;
	}
	//一个列元素
	.cell{
		flex-direction: row;
		display: flex;
	}
	//头像
	.icon{
		width: 20px;
		height: 20px;
		margin-right: 4px;
		border-radius: 3px;
		-moz-box-shadow:0 0 1px 1px #06c;
		-webkit-box-shadow:0 0 1px 1px #06c;
		box-shadow:0 0 1px 1px #06c;
	}
	//删除按钮
	.deletebutton{
		width: 30px;
		height: 23px;
		margin-right: 4px;
		background-color: #ff5500;
		font-size: 12px;
	}
	
	//列表栏的父容器
	.fatherVessel{
		width: 100%;
		height:100%;
	}
	//第三栏即编辑评论栏
	.editBar{
		flex-direction: row;
		display: flex;
	}
	
	//模块标题
	.title{
		width: 100%;
		height: 50px;
		padding-left: 20px;
		font-size: 14px;
		flex-direction: row; 
		align-items: center;
		border-radius: 4px;
		display: flex;
		align-content: center;
		background-color: #2979FF;
	}
	//编辑评论
	.editUserInfor{
		font-size: 12px;
		color: #2B85E4;
		margin-left: 4px;
	}
	//评论时间
	.commentTime{
		font-size: 12px;
	}
</style>

<template>
    <view class="content">
		<view class="title">
			<text class="txttitle">我的评论</text>
			<u-button @click="buttonDelete" class="deletebutton">删除</u-button>
		</view>
		<view class="list">
			<view class="cell" hover-class="hover" v-for="(item,index) in list" :key="index">
				<view class="element">
				   <image class="icon" @click="userinfoClick" src="/static/mine1.png" :id="index"></image>
				   <view class="fatherVessel">
						<view class="topBar" @click="passageDetail(index)">
							<text>文章标题:{{item.split(" ")[0]}}</text>
							<text class="likes">|点赞数:{{likes}}</text>
						</view>
						<view v-if="index!=currentIndex" class="audioSetting">
							<image class="playIcon" @click="playAudio" src="/static/play.png" :id="index"></image>
							<text class="processorText" :id="index">00:00/00:00</text>
							<u-line-progress class="processorBar" :height="processorHeight" :striped="true" :percent="zero" :show-percent="false" :striped-active="true" :id="index"></u-line-progress>
						</view>
						<view v-if="index==currentIndex" class="audioSetting">
							<image class="playIcon" @click="playAudio" src="/static/pause.png" :id="index"></image>
							<text class="processorText" :id="index">{{currentPlayTime}}:00/{{duration}}:00</text>
							<u-line-progress class="processorBar" :height="processorHeight" :striped="true" :percent="playPercent" :show-percent="false" :striped-active="true" :id="index"></u-line-progress>
						</view>
						<view class="editBar">
							<!-- 评论时间+编辑评论 -->
							<text class="commentTime">评论时间:{{item.split(" ")[1].split("\"")[1]}} {{item.split(" ")[2].split("\"")[0]}}</text>
							<text class="editComment" @click="editCommentClick(index)">|编辑评论|</text>
							<!-- 删除评论复选框 -->
							<view class="checkboxes" v-if="index!=currentCheckBoxIndex">
								<!-- 删除选择复选框 -->
								<u-checkbox class="checkbox" size="12px" icon-size="12px" label-size="12px" @change="checkboxChange" v-model="checked[index]" :disabled="false" :v-show="showCheckboxes" :name="index">删除评论</u-checkbox>
							</view>
							<view class="checkboxes" v-if="index==currentCheckBoxIndex">
								<!-- 删除选择复选框 -->
								<u-checkbox class="checkbox" size="12px" icon-size="12px" label-size="12px" @change="checkboxChange" v-model="checked[index]" :disabled="false" :v-show="showCheckboxes" :name="index"删除评论</u-checkbox>
							</view>
						</view>
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
				likes:12,						//点赞数
				currentCheckBoxIndex:-1,		//选择复选框索引
				processorHeight:"5px",			//进度条高度
				currentPlayTime:"00:00",		//进度文本
				checked:[],			//复选框选中状态
				zero:0,							//给进度条设置的0状态
				currentIndex:-1,				//初始化列表索引下标
				duration:0,
				userName:'',					//用户名
				list:[],//列表值
				content: '',					//
				playStatus:false,				//播放状态，暂停/播放
				playORnot:true,					//播放状态，true/false
				playPercent:0,					//进度条
				audioSrc:'',					//播放源链接
				showCheckboxes:true,			//是否显示删除复选框
			}
		},
		onShow(){
			let _this=this;
			
			//获取用户名缓存
			uni.getStorage({
				key:"userInfo",
				success(e){
					_this.userName=e.data.name;
				}
			})
			
			//清空列表
			var listLength=_this.list.length;
			for(var i=0;i<listLength;i++){
					_this.list.splice(0,1);
					_this.checked.splice(0,1);
			}
			
			uni.request({
				url:'/api/getMyComment',
				method:"POST",
				data:{userName:_this.userName},
				success:(res)=> {
					//判断是否返回成功
					if(res.data.data[0].status==false){
						_this.$u.toast("当前无评论");
						return;
					}
					
					//此处用for循环实现信息获取
					var commentList=res.data.data;
					for(var i=0;i<commentList.length;i++){
						_this.list.push(commentList[i].postTitle+" "+commentList[i].cmTime+" "+
								commentList[i].cmAudio+" "+commentList[i].cmID+" "+commentList[i].postID);
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
					url:'../mySettings/basicInfo/basicInfo?userName='+_this.userName,
				})
			},
			
			//点击删除按钮
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
					_this.$u.toast("请选择要删除的评论");
					return;
				}
				
				//弹窗确认删除此用户信息
				uni.showModal({
					title: '确认删除',
					content: '确认要删除选中评论吗？',
					success: function (res) {
						if (res.confirm) {
							//遍历列表删除对应评论
							//需要传回数据库的删除项列表
							var deleteItemList=[];
							var checkedListLength=_this.checked.length;
							for(var i=0,j=0;i<checkedListLength;i++){
								if(_this.checked[j]){
									deleteItemList.push(_this.list[j].split(" ")[4]);//传入评论ID让服务器删除
									_this.list.splice(j,1);
									_this.checked.splice(j,1);
								}
								else{
									j=j+1;
								}
							}
							//向服务器发送删除对象，列表形式
							uni.request({
								url:'/api/deleteComment',
								method:'POST',
								data:{cmID:deleteItemList},
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
				var index=e.name;
				
				//通过列表去设置对应的选中状态
				this.checked[index]=!this.checked[index];//将对应状态的复选框取反
			},
			
			//编辑评论
			editCommentClick(index){
				var _this=this;
				uni.navigateTo({
					url:'editComment/editComment?ID='+_this.list[index].split(" ")[4],
				});
			},
			
			//点击点赞数
			likesClick(){
				this.$u.toast("当前未安排点赞响应");
			},
			
			//播放评论音频
			playAudio(e){			
				//this指针
				let _this=this;
				
				//音乐操作
				if(_this.list[e.target.id].split(" ")[3]!=""){
					audioIns.src = _this.list[e.target.id].split(" ")[3];
				}
				else{
					_this.$u.toast("当前评论无音源");
					return;
				}
				
				//判断条件,当正在播放且点击了另外的音频，先停止当前正在播放的音乐
				if(_this.playStatus && _this.currentIndex!=e.target.id){
					//先暂停其他资源的播放
					_this.playStatus=false;
					_this.currentIndex=-1;
					_this.playORnot=true;
					audioIns.stop();
					_this.playPercent=0;
				}
				
				//点击播放
				if(_this.playORnot){
					//播放状态，设置为正在播放
					_this.playStatus=true;
					
					//获取播放id
					_this.currentIndex=e.target.id;
					
					//通过playORnot去判断下一次再点击此列表元素是否播放音频
					_this.playORnot=false;
					audioIns.play();
					
					
					//获取音频时长
					audioIns.onCanplay(function(e){
						_this.duration=parseInt(audioIns.duration);
					});
					
					//获取当前播放时间
					audioIns.onTimeUpdate(function(e){
						_this.playPercent=audioIns.currentTime/_this.duration*100;
						_this.currentPlayTime=parseInt(audioIns.currentTime);
					})
					
					//自然播放结束
					audioIns.onEnded(function(e){
						_this.playPercent=0;
						_this.currentIndex=-1;
						_this.playORnot=true;
					})
				}
				
				//点击暂停
				else{
					_this.play='播放';
					_this.currentIndex=-1;
					_this.playORnot=true;
					audioIns.pause();
					_this.playPercent=0;
				}
				//音频播放错误时发出报告
				audioIns.onError((res) => {
				  _this.$u.toast("音频播放发生错误,加载失败");
				});
			},
			
			//点击作者和标题内容打开用户信息
			passageDetail(e){
				uni.navigateTo({
					url:'../../Home/passageDetails/passageDetails?ID='+_this.list[e].split(" ")[5]+"&currentName="+_this.list[e].split(" ")[1],
				})
			}
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
		height: 60px;
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
		width: 105px;
		height:16px;
		padding-left: 5px;
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
	//音频播放
	.audioSetting{
		flex-direction: row;
		display: flex;
	}
	//play图标
	.playIcon{
		width: 20px;
		height: 20px;
	}
	//进度条
	.processorBar{
		margin-left: 4px;
		width: 65%;
	}
	//列表栏的父容器
	.fatherVessel{
		font-size: 12px;
		width: 100%;
		height:100%;
	}
	//第三栏即编辑评论栏
	.editBar{
		flex-direction: row;
		display: flex;
	}
	
	//顶栏显示栏
	.topBar{
		flex-direction: row;
		display: flex;
	}
	//点赞数
	.likes{
		color: #2B85E4;
		margin-left: 5px;
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
	.editComment{
		font-size: 12px;
		color: #2B85E4;
		margin-left: 4px;
	}
	//评论时间
	.commentTime{
		font-size: 12px;
	}
</style>

mui.init();
let webview_detail = null; //详情页webview
let titleNView = { //详情页原生导航配置
	backgroundColor: '#f7f7f7', //导航栏背景色
	titleText: '', //导航栏标题
	titleColor: '#000000', //文字颜色
	type: 'transparent', //透明渐变样式
	autoBackButton: true, //自动绘制返回箭头
	isMusic: false, // 是否存在音乐
	splitLine: { //底部分割线
		color: '#cccccc'
	}
}
var news = new Vue({
	el: '#App',
	data(){
		return {
			date: new Date(),
			params:[
				{
					type:'reading',
					value: 0
				},
				{
					type:'movie',
					value: 0
				},
				{
					type:'music',
					value: 0
				}
			],
			items:[
				{
					type:'reading',
					data: []
				},
				{
					type:'movie',
					data: []
				},
				{
					type:'music',
					data: []
				}
			],
			onePicture: {
				words_info: 'GordanLee',
				pic_info: '柳叶刀',
				forward: '永远年轻，永远热泪盈眶！',
				img_url: 'http://image.wufazhuce.com/Fgeyt4qGpmO8gA-ZK-hYmXL20QoM',
			}
		}
	},
	beforeCreate() {
		mui.plusReady(function() {
			//读取本地存储，检查是否为首次启动
			let showGuide = plus.storage.getItem("lauchFlag");
			//仅支持竖屏显示
			plus.screen.lockOrientation("portrait-primary");
			if(showGuide) {
				//有值，说明已经显示过了，无需显示；
				//关闭splash页面；
				plus.navigator.closeSplashscreen();
				plus.navigator.setFullscreen(false);
			} else {
				//显示启动导航
				mui.openWindow({
					id: 'guide',
					url: 'examples/guide.html',
					styles: {
						popGesture: "none"
					},
					show: {
						aniShow: 'none'
					},
					waiting: {
						autoShow: false
					}
				});
			}
		})
	},
	created () {
		this.preload();
		this.getOnePicture();
		this.$nextTick(() => {
			this.scroll();
			this.pullRefresh();
		})
	},
	methods: {
		sendData(item, style_type){ // 数据，style_type： 0 图文 ，1电影，2音乐
			return {
				item_id: item.item_id,
				logo: 'http://image.wufazhuce.com/ONE_logo_120_square.png',
				title: item.title || '',
				author: item.author.user_name,
				forward: item.forward,
				img_url: item.img_url,
				style_type: style_type,
				cover: item.cover || undefined, // 专辑封面
				music_name: item.music_name, // 歌曲
				audio_album: item.audio_album,
				audio_author: item.audio_author, // 歌手
				subtitle: item.subtitle || undefined, //  电影来源 || 音乐
				content: item.share_info.content || undefined, // 正文
				url: item.share_info.url // 网页地址
			}
		},
		 getApi(index) { // 获取Api
		 	return `http://v3.wufazhuce.com:8000/api/channel/${this.params[index].type}/more/${this.params[index].value}?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`
		 },
		 getOnePicture () { // 获取每日一图
		 	util.ajax('http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android%20%E6%88%96%20http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android','get',null,(res) => {
				util.ajax(`http://v3.wufazhuce.com:8000/api/onelist/${res.data[0]}/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`,'get',null,(res) => {
					this.onePicture =  res.data.content_list[0];
				})
			})
		 },
		 scroll() { // 启用scroll
		 		let deceleration = mui.os.ios?0.003:0.0009;
				mui('.mui-scroll-wrapper').scroll({
					bounce: false, // 回弹效果
					indicators: true, //是否显示滚动条
					deceleration:deceleration
				});
		 },
		 OpenWindow (ele, id){ // 打开每日一图或者关于
			let url = ele.currentTarget.getAttribute('data-href');
			let aniShow = mui.os.plus ? "slide-in-right" : "zoom-fade-out";
			mui.openWindow({
				url: url,
				id: id,
				styles: {
					popGesture: "close",
				},
				show: {
					aniShow: aniShow,
					duration: 300
				},
				extras: this.onePicture
			})

		 },
		 pullRefresh(){ // 开启下拉刷新上拉加载
		 	this.$refs.muiSliderGroup.querySelectorAll('.mui-scroll').forEach((ele, index) => {
		 		_this = this;
		 		mui(ele).pullToRefresh({
					down: {
						auto: false,
						callback () {
							let self = this;
							_this.pullupRefresh('down', self, index)
						}
					},
					up: {
						auto: true,
						callback () {
							let self = this;
							_this.pullupRefresh('up', self, index)
						}
					}
				});
		 	})
		 },
		 open_detail(data, style_type){
			mui.fire(webview_detail, 'get_detail', {//触发子窗口变更新闻详情
				data: this.sendData(data, style_type)	//传递参数	
			});
			//更改详情页原生导航条信息
			titleNView.titleText = data.title;
			webview_detail.setStyle({
				"titleNView": titleNView
			});
			setTimeout(function() {
				webview_detail.show("slide-in-right", 300);
			}, 150);
		 },
		 pullupRefresh (type,self,index){
		 	type === 'up' ?  this.params[index].value : this.params[index].value = 0; //上拉参数置为0，传递0获取最新数据
	 		util.ajax(this.getApi(index),'get',null,(res) => {
				this.params[index].value = res.data[res.data.length-1].id; //翻页获取最后一个参数
				if (type === 'up') {
					this.items[index].data = this.items[index].data.concat(res.data);//上拉合并数组，下拉覆盖数组
					 self.endPullUpToRefresh();
				} else {
					this.items[index].data = res.data ;
					mui.toast(`已更新${res.data.length}条内容`,{ duration:1000, type:'div' });
					self.endPullDownToRefresh();
				}
			})
		 },
		preload() { //预加载详情页		
			mui.plusReady(() => {
				webview_detail = mui.preload({
					url: 'examples/detail.html',
					id: 'news_detail',
					styles: {
						"render": "always",
						"popGesture": "hide",
						"bounce": "vertical",
						"bounceBackground": "#efeff4",
						"titleNView": titleNView
					}
				});
			});
		}
	},
	filters: {
      formatDate (date) {
      	var date = new Date(date);
        return util.formatDate(date, 'yyyy-MM-dd');
      }
	}
});
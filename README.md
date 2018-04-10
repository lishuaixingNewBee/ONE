# 『One·一个』App
- [线上开源地址](https://github.com/lishuaixingNewBee/ONE)
- [App下载地址](http://s.gordantv.top/one.apk)
- [MUI在线文档](http://dev.dcloud.net.cn/mui/ui/)

`以下所有 API 均由产品公司自身提供，本人皆从网络获取。获取与共享之行为或有侵犯产品权益的嫌疑。若被告知需停止共享与使用，本人会及时删除此页面与整个项目。请您暸解相关情况，并遵守产品协议。`

再次声明，本人皆从网络获取，并非本人抓取`
 **低仿 「ONE · 一个」 的App**
 
 前段时间由于业务需要快速开发App，所以上手了MUI，试着写了一个小项目作为练手，分享给大家,能力有限，大家多包涵。虽然现在还是以ReactNative为主，但是MUI应付一些小应用还是很方便的，话不多说，先上图。
 ![开屏引导](https://user-gold-cdn.xitu.io/2018/4/9/162ab14d9df02379?w=335&h=593&f=gif&s=2077118)
 
 ![阅读界面](https://user-gold-cdn.xitu.io/2018/4/9/162ab17e4343c9d3?w=335&h=593&f=gif&s=6304250)
 
 ![音乐播放界面](https://user-gold-cdn.xitu.io/2018/4/9/162ab194ed49bd12?w=335&h=593&f=gif&s=4861403)
 
 ![每日一图](https://user-gold-cdn.xitu.io/2018/4/9/162ab1bff38f9cb2?w=335&h=593&f=gif&s=3859348)
 
 ###  项目介绍
使用HBuilder作为开发打包工具，基于MUI框架开发，能同时运行在Android、iOS环境下。
实现了「ONE·一个」绝大部分的功能点，涵盖了图文、阅读、音乐、电影四大版块。
- 开屏引导图
- 用MUI内部组件实现上拉刷新，下拉加载
- 阅读模块
	- [获取最新 readinglist Api](#newest_readinglist)
	- [阅读详细信息 Api](#reading_detail)
- 影视模块
	- [获取最新 movielist Api](#newest_movielist)
	- [影视详细信息](#movie_detail)
- 音乐
	- [获取最新 musiclist Api](#newest_musiclist)
	- [音乐详细信息 Api](#music_detail)
	- [音乐地址 Api](#music_url)
- 图文
	- [获取最新图文 Api](#onelist)
- 关于
    - [调用Android保存图片](#about)

 ###  项目介绍
 
 项目运行
```bash
    # 克隆项目
    git clone https://github.com/lishuaixingNewBee/ONE.git
    # 下载 HBuilder
    # 下载地址: http://www.dcloud.io/
    # 把项目用HBuilder打开，选择真机调试就可以看到了
    
 ```
 
 # 阅读 #
<h2 id="newest_readinglist">获取最新 readinglist</h2>

url：`http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：

```
{
	"res": 0,
	"data": [{
		"id": "12808",
		"category": "1",
		"display_category": 6,
		"item_id": "2696",
		"title": "没有赏味期限，只有来日方长",
		"forward": "爱一个人的时候，才会学会理解和包容。愿意为对方削去身上的棱角，然后打磨成圆。",
		"img_url": "http:\/\/image.wufazhuce.com\/Fo59plBlnS9WkK9dkR-y6IkOAMN-",
		"like_count": 5399,
		"post_date": "2017-07-31 06:00:00",
		"last_update_date": "2017-07-30 17:24:15",
		"author": {
			"user_id": "8203444",
			"user_name": "周源远",
			"desc": "知名作家、GQ China创意总监。曾出版《我就乐意这样寂寞了》、《住在岛上》。新书《就像星星被浪费在夜空里》正在预售。",
			"wb_name": "@源远",
			"is_settled": "0",
			"settled_type": "0",
			"summary": "知名作家、GQ China创意总监。",
			"fans_total": "617",
			"web_url": "http:\/\/image.wufazhuce.com\/FqN0qOUuwzBp95IV_VQf1O91cFaW"
		},
		"video_url": "",
		"audio_url": "",
		"audio_platform": 2,
		"start_video": "",
		"has_reading": 0,
		"volume": 0,
		"pic_info": "",
		"words_info": "",
		"subtitle": "",
		"number": 0,
		"serial_id": 0,
		"serial_list": [],
		"movie_story_id": 0,
		"ad_id": 0,
		"ad_type": 0,
		"ad_pvurl": "",
		"ad_linkurl": "",
		"ad_makettime": "",
		"ad_closetime": "",
		"ad_share_cnt": "",
		"ad_pvurl_vendor": "",
		"content_id": "2696",
		"content_type": "1",
		"content_bgcolor": "#FFFFFF",
		"share_url": "http:\/\/m.wufazhuce.com\/article\/2696",
		"share_info": {
			"url": "http:\/\/m.wufazhuce.com\/article\/2696",
			"image": "http:\/\/image.wufazhuce.com\/Fo59plBlnS9WkK9dkR-y6IkOAMN-",
			"title": "没有赏味期限，只有来日方长 作者\/周源远",
			"content": "世界上最高的山，是永远登不到顶峰的你的心。"
		},
		"share_list": {
			"wx": {
				"title": "STORY | 没有赏味期限，只有来日方长",
				"desc": "文\/周源远 世界上最高的山，是永远登不到顶峰的你的心。",
				"link": "http:\/\/m.wufazhuce.com\/article\/2696?channel=singlemessage",
				"imgUrl": "http:\/\/image.wufazhuce.com\/ONE_logo_120_square.png",
				"audio": ""
			},
			"wx_timeline": {
				"title": "STORY | 没有赏味期限，只有来日方长",
				"desc": "文\/周源远 世界上最高的山，是永远登不到顶峰的你的心。",
				"link": "http:\/\/m.wufazhuce.com\/article\/2696?channel=timeline",
				"imgUrl": "http:\/\/image.wufazhuce.com\/ONE_logo_120_square.png",
				"audio": ""
			},
			"weibo": {
				"title": "ONE一个《STORY | 没有赏味期限，只有来日方长》 文\/周源远： 世界上最高的山，是永远登不到顶峰的你的心。 阅读全文：http:\/\/m.wufazhuce.com\/article\/2696?channel=weibo 下载ONE一个APP:http:\/\/weibo.com\/p\/100404157874",
				"desc": "",
				"link": "http:\/\/m.wufazhuce.com\/article\/2696?channel=weibo",
				"imgUrl": "",
				"audio": ""
			},
			"qq": {
				"title": "没有赏味期限，只有来日方长",
				"desc": "世界上最高的山，是永远登不到顶峰的你的心。",
				"link": "http:\/\/m.wufazhuce.com\/article\/2696?channel=qq",
				"imgUrl": "http:\/\/image.wufazhuce.com\/ONE_logo_120_square.png",
				"audio": ""
			}
		},
		"tag_list": [{
			"id": "27",
			"title": "STORY"
		}]
	}]
}
```

json 解析：

`data` 是一个数组，size是10，也就是每次只返回十条数据,当我们想获取更多数据就需要把最后数组最后一条的id传递过去。
如：
```
http://v3.wufazhuce.com:8000/api/channel/reading/more/+{id}+?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android
```
- 阅读：我们需要使用该 json 字段中的 `item_id` 获取该阅读的[详细信息](#reading_detail)

<h2 id="reading_detail">阅读详细信息</h2>

内容信息 url：`http://v3.wufazhuce.com:8000/api/essay/ + item_id + ?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

示例：`http://v3.wufazhuce.com:8000/api/essay/2668?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：
```
{
	"res": 0,
	"data": {
		"content_id": "2668",
		"hp_title": "我们都低估了人生的漫长",
		"sub_title": "",
		"hp_author": "韩松落",
		"auth_it": "专栏作家。华语电影传媒大奖、华语优质电影大奖评委，《GQ》中文版2012年“年度专栏作家”。微信公众号：韩松落见好",
		"hp_author_introduce": "责任编辑：金子棋",
		"hp_content": "\n<p>改编亦舒小说，是件不讨好的事，目前看到的根据亦舒小说改编的影视剧，从《喜宝》《朝花夕拾》《流金岁月》《珍珠》到现在的《我的前半生》，都和亦舒小说的气质相去甚远，这大概也是亦舒很少授权影视改编的原因吧，她自己也知道，她的故事好就好在一股气韵，那股气韵，很难变成视觉的东西。<\/p>\n<p>《我的前半生》尤其如此，原著的故事比较平淡，尽管也有出轨、外遇、逆袭这样的情节，但亦舒都是用一种绵密的、带点自嘲的语气去写，尽可能多地消除了其中的狗血元素，但要改编成电视剧，还非得狗血不可，不然没有话题度。所以，原著和电视剧，在气质上差别也很大。<\/p>\n<p>不过，《我的前半生》的原著和电视剧，核心的部分没有变，它们其实都在讨论一个非常迫切的主题：我们都低估了人生的漫长，我们并没有为人生的漫长做好准备。<\/p>\n<p>人们常说，人生太短，是啊，人一辈子的那百八十年，放到宇宙的历史里，连一瞬间都算不上，所以，奇幻小说里，常常要夸大人的寿命，主人公的寿命，动不动就几万年，为的是满足人们长寿的愿望。但有时候，人生又太长了，尽管也就七八十年，却已经足够经历许许多多的事件，这些事件，会给人生带来非常大的变化，这些变化，是人们始料未及的。<\/p>\n<p>例如，我们都以为，青春会持续很久，和青春有关的热情、生机勃勃、好奇心，以及对事物的新鲜感会持续很久，但事实上，青春很快就过去了，每个人都要用之后的五六十年，去面对感受力消失，毫无新鲜感的生活。<\/p>\n<p>例如，我们都以为，爱情可以保持很长时间，足够让两个人白头偕老，但事实上，科研结果表明，人的所谓真爱，只能持续三年，其余的时间，都要靠相处的艺术，以及双方对情欲的压抑来度过。有人在相处两三年的时候，就已经被疲惫感淹没，如果这样的生活，还要持续五十年，那的确是一场漫长的煎熬。<\/p>\n<p>例如，我们都以为，经济永远平稳上扬，足够让一个人安然度过一生，但事实上，人的一生，起码要经历六七个大的经济周期，这些经济周期，有上扬，有硬着陆软着陆，充满各种变数，和经济周期同步发生的，还有各种社会动荡。所以，我们永远可以看到那种传奇故事，贵族小姐后来靠捡垃圾生活，某个行业的大王变成了街头小贩。<\/p>\n<p>我们曾以为，自己会一辈子讨厌咸豆花、臭豆腐，以为自己永远也不会吃榴莲，但或许只要五年十年，我们就会爱上我们自以为会讨厌的所有食物。我们曾以为，我们绝对不会看国产电视剧、超级英雄片，但还没过三十岁，我们已经对它们津津乐道了。我们也曾以为，我们永远不会离开家乡，却没想到，后来的半生都在默念“此心安处是吾乡”。<\/p>\n<p>我们都以为，自己是革命者，后来却变成了叛徒。我们都以为，自己是朋克，后来却变成了五毛。我们都以为，自己可以安然于傻白甜的命运，后来却变成了江湖儿女。<\/p>\n<p>因为，人生太长了。<\/p>\n<p>我们都是用已经经历过的时间，来预测将来，从来不会想到，未来的时间，其实漫长到无法想象。漫长到海必须枯，石必须烂，巨变接着巨变。<\/p>\n<p>《我的前半生》里的子君，就没有准备好迎接人生的漫长，她以为只要结婚了，只要嫁给了有钱人，从此就一劳永逸了，每天只需要购物和防备小三，就能安然度过一生。但事实上，结婚不是历史的终结，而是一场生命马拉松的开始，必须要用极大的体力、耐力和技巧去面对。所以，当变故发生的时候，她完全没有任何准备。<\/p>\n<p>没有一劳永逸，没有尘埃落定，人生实在太漫长了，每分每秒都充满各种可能，已经发生的还会再发生，没有发生过的正在骚动，三五个月，就足够埋藏一段巨变。<\/p>\n<p>就像夏多布里昂说的：“人不只有一次生命。人会活很多次，周而复始。”我们只有重新评估人生的漫长，为漫长人生里的无穷变化做好一切准备。<\/p>\n",
		"hp_makettime": "2013-08-21 16:40:00",
		"hide_flag": "0",
		"wb_name": "",
		"wb_img_url": "",
		"last_update_date": "2017-07-20 16:20:50",
		"web_url": "http:\/\/m.wufazhuce.com\/article\/2668",
		"guide_word": "我们并没有为人生的漫长做好准备。",
		"audio": "",
		"anchor": "",
		"editor_email": "jinziqi@wufazhuce.com",
		"top_media_type": "0",
		"top_media_file": "",
		"top_media_image": "",
		"start_video": "",
		"copyright": "本文付费转载自韩松落见好。",
		"audio_duration": "0",
		"cover": "0",
		"author": [{
			"user_id": "6258584",
			"user_name": "韩松落",
			"desc": "专栏作家。华语电影传媒大奖、华语优质电影大奖评委，《GQ》中文版2012年“年度专栏作家”。微信公众号：韩松落见好",
			"wb_name": "@韩松落",
			"is_settled": "0",
			"settled_type": "0",
			"summary": "专栏作家。华语电影传媒大奖、华语优质电影大奖评委，《GQ》中文版2012年“年度专栏作家”。微信公众号：韩松落见好",
			"fans_total": "5683",
			"web_url": "http:\/\/image.wufazhuce.com\/Fp4wC5cAQGZ9GNKiKvFeN8BBcHBF"
		}],
		"maketime": "2013-08-21 16:40:00",
		"author_list": [{
			"user_id": "6258584",
			"user_name": "韩松落",
			"desc": "专栏作家。华语电影传媒大奖、华语优质电影大奖评委，《GQ》中文版2012年“年度专栏作家”。微信公众号：韩松落见好",
			"wb_name": "@韩松落",
			"is_settled": "0",
			"settled_type": "0",
			"summary": "专栏作家。华语电影传媒大奖、华语优质电影大奖评委，《GQ》中文版2012年“年度专栏作家”。微信公众号：韩松落见好",
			"fans_total": "5683",
			"web_url": "http:\/\/image.wufazhuce.com\/Fp4wC5cAQGZ9GNKiKvFeN8BBcHBF"
		}],
		"next_id": "346",
		"previous_id": "351",
		"tag_list": [{
			"id": "23",
			"title": "ESSAY"
		}],
		"share_list": {
			"wx": {
				"title": "ESSAY | 我们都低估了人生的漫长",
				"desc": "文\/韩松落 我们并没有为人生的漫长做好准备。",
				"link": "http:\/\/m.wufazhuce.com\/article\/2668?channel=singlemessage",
				"imgUrl": "http:\/\/image.wufazhuce.com\/ONE_logo_120_square.png",
				"audio": ""
			},
			"wx_timeline": {
				"title": "ESSAY | 我们都低估了人生的漫长",
				"desc": "文\/韩松落 我们并没有为人生的漫长做好准备。",
				"link": "http:\/\/m.wufazhuce.com\/article\/2668?channel=timeline",
				"imgUrl": "http:\/\/image.wufazhuce.com\/ONE_logo_120_square.png",
				"audio": ""
			},
			"weibo": {
				"title": "ONE一个《ESSAY | 我们都低估了人生的漫长》 文\/韩松落： 我们并没有为人生的漫长做好准备。 阅读全文：http:\/\/m.wufazhuce.com\/article\/2668?channel=weibo 下载ONE一个APP:http:\/\/weibo.com\/p\/100404157874",
				"desc": "",
				"link": "http:\/\/m.wufazhuce.com\/article\/2668?channel=weibo",
				"imgUrl": "",
				"audio": ""
			},
			"qq": {
				"title": "我们都低估了人生的漫长",
				"desc": "我们并没有为人生的漫长做好准备。",
				"link": "http:\/\/m.wufazhuce.com\/article\/2668?channel=qq",
				"imgUrl": "http:\/\/image.wufazhuce.com\/ONE_logo_120_square.png",
				"audio": ""
			}
		},
		"praisenum": 4574,
		"sharenum": 3953,
		"commentnum": 320
	}
}
```

 # 影视 #
<h2 id="newest_movielist">获取最新 movielist</h2>

url：`http://v3.wufazhuce.com:8000/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：

```
{
	"res": 0,
	"data": [{
		"id": "13758",
		"category": "5",
		"display_category": 6,
		"item_id": "1202",
		"title": "豆瓣9.9，再也找不到比它评价更牛的剧了",
		"forward": "到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？",
		"img_url": "http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",
		"like_count": 130,
		"post_date": "2017-10-31 06:00:00",
		"last_update_date": "2017-10-27 16:57:21",
		"author": {
			"user_id": "0",
			"user_name": "鱼叔",
			"web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
			"summary": "",
			"desc": "",
			"is_settled": "",
			"settled_type": "",
			"fans_total": "",
			"wb_name": ""
		},
		"video_url": "",
		"audio_url": "",
		"audio_platform": 2,
		"start_video": "",
		"has_reading": 0,
		"volume": 0,
		"pic_info": "",
		"words_info": "",
		"subtitle": "瑞克和莫蒂 第三季",
		"number": 0,
		"serial_id": 0,
		"serial_list": [],
		"movie_story_id": "4185",
		"ad_id": 0,
		"ad_type": 0,
		"ad_pvurl": "",
		"ad_linkurl": "",
		"ad_makettime": "",
		"ad_closetime": "",
		"ad_share_cnt": "",
		"ad_pvurl_vendor": "",
		"content_id": "1202",
		"content_type": "5",
		"content_bgcolor": "#FFFFFF",
		"share_url": "http://m.wufazhuce.com/movie/1202",
		"share_info": {
			"url": "http://m.wufazhuce.com/movie/1202",
			"image": "http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",
			"title": "「一个」电影: 瑞克和莫蒂 第三季",
			"content": "\n所谓九分神剧，就是大家喜欢把评分9分以上的剧，封为神剧。\n这样的剧，其实还不少。\n《请回答1998》《权力的游戏》《毒枭》《我们这一天》《秘密森林》……都在九分神剧的范畴内。\n但一部剧的评分想要达到9.9，那就少的可怜。\n鱼叔只找到这一部——瑞克和莫迪 第三季 Rick and Morty Season 3\n\n两年前的这个时候，鱼叔向大家推荐过这部剧。\n\n那时，正好是第二季结尾的时候。\n时隔两年，今年第三季强势回归。豆瓣评分高达9.9，95%的观众打了满分。\n\n是不是难以置信。\n而对于9.9这个分数，竟然还惹怒了网友——为什么不是满分！？\n\n到底是谁没打满分！？这剧都拿不到满分，观众也太严格了吧？\n豆瓣评论里，甚至排好了队形，要揪出没打满分的“叛徒”。\n其实9.9，真不是夸张。第一季就高达9.6，第二季9.8。\n\n所以按这个趋势，第三季9.9也实属正常。它只是在进步而已。\n不止国内的观众，IMDB也晾出了9.8的高分。\n\n烂番茄上，三季的新鲜度都是100%！\n\n足以说明，这逆天的分数，并没掺什么水分。\n评分，如实反映了影片处处高能的构思。 \n《瑞克和莫迪》是一部动画片。而且，它也只能是一部动画，因为它的脑洞大得只能靠动画满足。\n打个比方，《盗梦空间》大家都很熟悉吧。\n\n《盗梦空间》乘以10差不多是《瑞克和莫迪》的脑洞水平。而《瑞克和莫迪》在第一季里也的确戏谑地玩了一把《盗梦空间》的戏码。\n不就是多重梦境吗，多大点事。\n《盗梦》废了半天劲讲了两个半小时，还让一些观众云里雾里的。\n在这里，只需要不到20分钟，就给你捋得清清楚楚明明白白。而且进行这场差点丢了性命的梦境穿越之旅的初衷，仅仅是为了让数学老师能心甘情愿地在期末给个A。\n鱼叔猛地想起，自己曾经画关系图，纠结于《盗梦》小陀螺最后会不会倒。\n\n在《瑞克和莫迪》简单粗暴的讲解后，只觉得自己被耍了！导演，还我智商来！\n“瑞克和莫迪”，是祖孙两人的名字。\n\n外公瑞克，是一个天才科学家。号称全宇宙最聪明的人，发明了各种各样的神器。自从发明了时空穿梭枪之后，便沉迷于时空探险。\n\n外孙莫蒂，14岁男孩，并没有遗传到瑞克强大的基因。又蠢，又没有天分。无论情商还是智商，都逊于常人。\n\n本剧讲的就是天才兼疯子科学家瑞克，在女儿的车库里搞了一个科学实验室，而外孙莫蒂莫名其妙地成了他的助手，于是各种冒险就此展开！\n如果你以为这是外公带着外孙的温情探险故事，那就大错特错了。\n因为他们每一场探险，都是冒着生命危险在狂飙啊！而且探险的地方，也都是一些想都不敢想的地方。\n前面提过的梦境探险，在里面都算是小儿科了。\n\n不止上天入地，还能来一场人体冒险。\n瑞克在别人的身体里，建了一座人体主题公园。游客缩小身体之后，就能进入人体公园，坐上骨头列车，欣赏膀胱喷泉，还能尽情畅玩胰腺海盗湾。\n\n和一般的主题公园一样，受到破坏，人体公园也需要维护。但如果在修理的过程中，作为公园载体的人死掉了，那公园就彻底毁了。而里面的人，也基本出不来了。\n\n各个器官都无法运作，意味着所有“交通线路”全面瘫痪。\n唯一安全的路线，是乳腺，一场看似荒诞的人体大逃亡就来了。\n这还不是最扯的，为了让出来的人能恢复正常大小，疯狂的瑞克用了最简单粗暴的方法——将尸体扔到宇宙里放大。\n\n大到什么程度？大到遮天蔽日！！连电视台都做了报道。\n\n\n成功救人之后，这巨大的尸体又该怎么处理呢？\n方法非常直接——炸掉。\n于是，我们将看到电视史上最具诚意的“腥风血雨”！！\n尸体的血液像雨点一样落下，其他身体碎片也随着爆炸遍地开花。\n\n虽然是动画片，但黄暴指数惊人。爽一爽，啪一啪，毫无禁忌。\n\n说实话，鱼叔都不知道该怎么给它分级。\n这里面出现的奇怪生物，每一个都在挑战我们对生物认知的底线。\n屁股长脸上，蛋蛋挂在腮帮子上的，三个乳房的，或者全身由齿轮构成的……甚至还有寄居在人类屁股里的田鼠。\n\n没办法，星际旅行一定涉及外星生物啊。而这些外星生物，当然怎么舒服怎么长，我们人类也没法批判人家的审美不是。\n作为一部神剧，光是有视觉上的尺度，是远远不够的。\n\n《瑞克和莫迪》的惊艳之处，在于大胆，什么都敢想。配上一个疯子科学家，更是什么都敢做。\n这样的大胆，除了烧脑之外，很多时候带来的是“毁三观”。\n莫迪为了追求心仪的女孩，找外公要了一种恋爱病毒。但女孩刚好得了流感，这种恋爱病毒就迅速蔓延到整个国家。后来，整个地球完全陷入瘫痪。\n该怎么办？\n瑞克，这个史上最不负责任的科学家，把这个星球当成了实验的牺牲品。\n既然自己所在时空的地球已经瘫痪了，那就换到另一个平行时空的地球上去生活。因为瑞克的时空枪，可以自由穿行于平行时空。\n\n然后，就出现了经典的时空穿越问题。\n毕竟，每个平行时空里，都有另一个的瑞克和莫迪啊。\n为了顺利生存下来，他们开始寻找平行时空中，恰巧死掉的自己。顶替他们活下来，生活又恢复正常！\n这就出现了《瑞克和莫迪》中最经典的场景，亲手将另一个时空的“自己”埋葬。\n\n再假装若无其事地融入本属于别人的生活，而他们原来时空里的亲人，则被完全抛弃。\n顺便说一句，几乎每一个时空里，瑞克都有一个莫迪作伴，其原因和亲情没有任何关系。只因为瑞克的高智商和疯狂行为，让他成为宇宙中的重要通缉对象。\n\n所以他需要一个傻一点的家伙，来中和一下自己的高智商脑电波。\n而莫迪，就是他的掩护。\n说出来很伤人，但事实就是如此。 \n而我们的主角，是来自特定时空——地球c-137时空的莫迪和瑞克。\n不过，这部神剧常常在不同时空中穿越，会遇到不同时空里的瑞克和莫迪。所以观影记得保持头脑清醒！\n\n在第二季结尾，瑞克被关进了银河联邦的监狱。他们觊觎瑞克的发明，想要得到时光枪。\n鱼叔本以为，第三季将着重讲述瑞克和银河联邦斗智斗勇的故事。\n谁知第一集，瑞克就凭一己之力，端掉了银河联邦的老巢，把他们打得屁滚尿流。\n\n接下来，瑞克和莫迪又开始了各种冒险。\n毫不夸张的讲，这是一部可以让你给所有主创送上膝盖的动画。\n每集故事独立，且全程高能，脑洞无限大！\n值得一提的是，导演贾斯汀·罗兰和编剧丹·哈萌，一起合作的另一部作品《废柴联盟》，也同样出色。\n\n而且你绝对想不到，导演本人竟然还担任了瑞克与莫蒂两个主角的配音！\n真·niubility！\n他们的脑洞，用突破天际来形容一点不过分。\n《瑞克与莫蒂》涵盖了灵魂与肉体、时间与平行空间、永生与精神等一切哲学问题。\n你能看到对各种经典电影桥段的恶搞，内容上解构英雄主义，挑战宗教意义，打破伦理约束……\n外太空血腥的种族战争，可能出于一个看似荒诞的理由，仅仅因为乳头的形状不同。\n但讽刺的是，将这种恶搞照应进我们的现实生活，其实现实生活也好不到哪里去。\n\n疯狂和荒诞是《瑞克和莫迪》的外衣，内核似乎更加虚无与荒凉。\n瑞克看起来那么冷漠无情，他冒着酒气的疯言疯语，总是刺耳却让人难以反驳。\n《瑞克和莫迪》在血腥黄暴的画面里，把疯狂的黑色幽默演绎到了极致。\n以最无情地方式撕裂现实，又用最直白的方式灌下毒鸡汤。\n人生，不过就是如此。尽管混乱残酷，也值得痛快活一场。\n\n"
		},
		"share_list": {
			"wx": {
				"title": "电影 | 豆瓣9.9，再也找不到比它评价更牛的剧了",
				"desc": "文/鱼叔 到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？",
				"link": "http://m.wufazhuce.com/movie/1202?channel=singlemessage",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"wx_timeline": {
				"title": "电影 | 豆瓣9.9，再也找不到比它评价更牛的剧了",
				"desc": "文/鱼叔 到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？",
				"link": "http://m.wufazhuce.com/movie/1202?channel=timeline",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"weibo": {
				"title": "ONE一个《电影 | 豆瓣9.9，再也找不到比它评价更牛的剧了》 文/鱼叔： 到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？ 阅读全文：http://m.wufazhuce.com/movie/1202?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
				"desc": "",
				"link": "http://m.wufazhuce.com/movie/1202?channel=weibo",
				"imgUrl": "",
				"audio": ""
			},
			"qq": {
				"title": "豆瓣9.9，再也找不到比它评价更牛的剧了",
				"desc": "到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？",
				"link": "http://m.wufazhuce.com/movie/1202?channel=qq",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			}
		},
		"tag_list": []
	}]
}
```

json 解析：

`data` 是一个数组，size是10，也就是每次只返回十条数据,当我们想获取更多数据就需要把最后数组最后一条的id传递过去。
如：
```
http://v3.wufazhuce.com:8000/api/channel/movie/more/ + {id} + ?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android
```
- 电影：我们需要使用该 json 字段中的 `item_id` 获取该电影的[详细信息](#movie_detail)

<h2 id="movie_detail">电影详细信息</h2>

内容信息 url：`http://v3.wufazhuce.com:8000/api/movie/detail/ + item_id + ?channel=wdj&source=channel_movie&source_id=9240&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

示例：`http://v3.wufazhuce.com:8000/api/movie/detail/1202?channel=wdj&source=channel_movie&source_id=9240&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：
```
{
	"res": 0,
	"data": {
		"id": "1202",
		"title": "瑞克和莫蒂 第三季",
		"indexcover": "",
		"detailcover": "http://image.wufazhuce.com/FtXcfynCVnsvQrTuglYF8pB6o17c",
		"video": "",
		"verse": "",
		"verse_en": "",
		"score": null,
		"revisedscore": "0",
		"review": "",
		"keywords": ";;;;",
		"movie_id": "",
		"info": "导演: 贾斯汀·罗兰 / Juan Jose Meza-Leon\r\n编剧: 丹·哈萌 / 贾斯汀·罗兰\r\n主演: 贾斯汀·罗兰 / 克里斯·帕内尔 / 斯宾瑟·格拉默 / 萨拉·乔克 / 内森·菲利安 / 更多...\r\n类型: 科幻 / 动画 / 冒险\r\n官方网站: www.rickandmorty.com\r\n制片国家/地区: 美国",
		"officialstory": "Adult Swim频道续订旗下超高收视动画片《瑞克和莫蒂》（Rick and Morty）第三季。\r\n",
		"hide_flag": "0",
		"charge_edt": "责任编辑：高梦苒",
		"web_url": "http://m.wufazhuce.com/movie/1202",
		"praisenum": 0,
		"sort": "0",
		"releasetime": "0000-00-00 00:00:00",
		"scoretime": "0000-00-00 00:00:00",
		"maketime": "2011-03-03 06:30:00",
		"last_update_date": "2017-10-27 16:57:21",
		"read_num": "19500",
		"directors": "贾斯汀·罗兰、Juan Jose Meza-Leon",
		"editor_email": "mengran@wufazhuce.com",
		"related": "",
		"directors_id": "",
		"start_video": "",
		"media_type": "0",
		"poster": "http://image.wufazhuce.com/Fh6tw1pQI8AViStdiWJMUoGTrjcb",
		"photo": [
			"http://image.wufazhuce.com/FiXdeKaPQxMJgQCZnFwIlomBy_a2",
			"http://image.wufazhuce.com/Fi2cYCXOLCYW2ehFg--eY1BNqVEz",
			"http://image.wufazhuce.com/Fp3ywvzEfzYagW1QpQrMdWAl9Son"
		],
		"next_id": "974",
		"previous_id": "1035",
		"tag_list": [],
		"share_list": {
			"wx": {
				"title": "电影 | 豆瓣9.9，再也找不到比它评价更牛的剧了",
				"desc": "文/鱼叔 到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？",
				"link": "http://m.wufazhuce.com/movie/1202?channel=singlemessage",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"wx_timeline": {
				"title": "电影 | 豆瓣9.9，再也找不到比它评价更牛的剧了",
				"desc": "文/鱼叔 到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？",
				"link": "http://m.wufazhuce.com/movie/1202?channel=timeline",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"weibo": {
				"title": "ONE一个《电影 | 豆瓣9.9，再也找不到比它评价更牛的剧了》 文/鱼叔： 到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？ 阅读全文：http://m.wufazhuce.com/movie/1202?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
				"desc": "",
				"link": "http://m.wufazhuce.com/movie/1202?channel=weibo",
				"imgUrl": "",
				"audio": ""
			},
			"qq": {
				"title": "豆瓣9.9，再也找不到比它评价更牛的剧了",
				"desc": "到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？",
				"link": "http://m.wufazhuce.com/movie/1202?channel=qq",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			}
		},
		"sharenum": 283,
		"commentnum": 29,
		"servertime": 1523293579
	}
}
```

 # 音乐 #
<h2 id="newest_musiclist">获取最新 musiclist</h2>

url：`http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：

```
{
	"res": 0,
	"data": [{
		"id": "13077",
		"category": "4",
		"display_category": 6,
		"item_id": "2361",
		"title": "这个世界未必所有事都如你所愿，但总有它的意思",
		"forward": "上路去，别太挂念这里。",
		"img_url": "http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",
		"like_count": 1025,
		"post_date": "2017-08-20 10:00:00",
		"last_update_date": "2017-08-20 02:25:58",
		"author": {
			"user_id": "7956945",
			"user_name": "馆长Jeekit",
			"desc": "“年粤日”（ID：daybydaygz）每晚一首粤语歌，陪你度过年月日。",
			"wb_name": "",
			"is_settled": "0",
			"settled_type": "0",
			"summary": "“年粤日”公众号作者。",
			"fans_total": "153",
			"web_url": "http://image.wufazhuce.com/Flenoszs07hezZZsvn44LZzsfhX0"
		},
		"video_url": "",
		"audio_url": "1769275733",
		"audio_platform": "1",
		"start_video": "",
		"has_reading": 0,
		"volume": 0,
		"pic_info": "",
		"words_info": "",
		"subtitle": "替你高兴",
		"number": 0,
		"serial_id": 0,
		"serial_list": [],
		"movie_story_id": 0,
		"ad_id": 0,
		"ad_type": 0,
		"ad_pvurl": "",
		"ad_linkurl": "",
		"ad_makettime": "",
		"ad_closetime": "",
		"ad_share_cnt": "",
		"ad_pvurl_vendor": "",
		"content_id": "2361",
		"content_type": "4",
		"content_bgcolor": "#FFFFFF",
		"share_url": "http://h.xiami.com/one-share.html?id=1769275733",
		"share_info": {
			"url": "http://h.xiami.com/one-share.html?id=1769275733",
			"image": "http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",
			"title": "「一个」音乐: 馆长Jeekit 替你高兴",
			"content": "\n这首歌是送给在天堂上的可爱人儿。在「你们的幸福演唱会」上，穿着天使服的Kay妈给我们讲述了这首歌的故事。\n倘若这绝症让你 太泄气萎衰\n我愿抱你过最后行程 背上你恐惧\n为你 平伏情绪\n\n《替你高兴》是写给作曲者John Laudon的一位好朋友，这位朋友是一位很年轻的妈妈，但不幸地患上了癌症，在她离世之前，她舍不的她的小朋友，放不­低自己的人生。\n带着忧虑和遗憾离开是一件痛苦的事情，因此歌曲传达的大意是，无论面对别离还是人生最幽暗的时刻，都要记得，我们可能没有能力去选择结果，但我们总可以找一个最好的角度和看法去释怀、去接受、去拥抱、去包容。\n这个世界未必所有事都如你所愿，但总有它的意思，「从来没失败 和没有不对」 。\n\n你追寻过什么？又放下了什么？\n我们在人生探索中总会定下一个个目标，「妈，我要你永远年轻不老」、「我想成为科学家」、「另一半永远都不会离开我」、「得到一份高薪的offer」...随之，我们满怀自信地去向目标迈进，只要磨难和痛苦在承受范围以内，尽管跌倒碰壁，我们都心甘情愿地爬起来再试，心想着自己再努力一点就会离成功更近一些。\n有些承诺最终兑现了，而有些则注定换来一个不如意的结果。目标给予了你动力，并没答应给你好的结果。每长一岁，能力越强其实越会意识到自己的无能为力，你既左右不了上帝要带走谁，又等不到一个不喜欢你的人回头，就像在手机摔地上碎屏的一刻，你只能怀着侥幸心理捡起来看看，但你改变不了结果。\n你记得吗？李宗盛大哥的《给自己的歌》开头是这么写的：「想得却不可得，你奈人生何？」\n\n放弃，不是这社会主流的价值观，在资本主义里我们都在拼「效果最大化」，拼拼工作谁更狼性，在高效率的下尽量延长工作时间，这样才能显示出你的价值，在竞争中不被淘汰；拼拼爱情谁更一往情深，爱了就得一辈子，不允许在中途无缘无故失去了感觉...\n但我觉得，往前冲固然很重要，而放得下更可贵，也更困难。这命题太大了，我懒得啰嗦地长篇论述，而且对于是「拿」是「放」，每个人的标准都不同，假如要说一句表明我立场的话，我想说：「人生必须负重前行，但别累坏自己了，好吗？」\n\n《替你高兴》是最唱进我心里的一首歌。听了八年，每次再听起心都犹如被扎了一下。忧虑、苦涩、斗争就留给地上那些仍需要为目标付出汗水的人儿吧，愿在天上的他们无需忧生计、不用设心机，没天灾、没病患、也没人祸，「道别俗世的顾虑 再不须掉眼泪 」。\n想着想着，心里还是不禁想问一句：「亲爱的 近况好吗？」\n\n\n \n小编的提醒：今天是ONE音乐频道页更新的最后一天，欢迎各位尽快更新最新版本ONE APP，欣赏更多精彩内容。\n\n"
		},
		"share_list": {
			"wx": {
				"title": "音乐 | 上路去，别太念挂这里",
				"desc": "文/馆长Jeekit 这个世界未必所有事都如你所愿，但总有它的意思。",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=singlemessage",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"wx_timeline": {
				"title": "音乐 | 上路去，别太念挂这里",
				"desc": "文/馆长Jeekit 这个世界未必所有事都如你所愿，但总有它的意思。",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=timeline",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"weibo": {
				"title": "ONE一个《音乐 | 上路去，别太念挂这里》 文/馆长Jeekit： 这个世界未必所有事都如你所愿，但总有它的意思。 阅读全文：http://h.xiami.com/one-share.html?id=1769275733&channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
				"desc": "",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=weibo",
				"imgUrl": "",
				"audio": ""
			},
			"qq": {
				"title": "上路去，别太念挂这里",
				"desc": "这个世界未必所有事都如你所愿，但总有它的意思。",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=qq",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			}
		},
		"tag_list": [],
		"music_name": "替你高兴",
		"audio_author": "谢安琪",
		"audio_album": "Slowness",
		"cover": "http://image.wufazhuce.com/Fl8W6nY1iRdNizZ9yNyFQ_pjMJC7?imageMogr2/thumbnail/908|watermark/1/image/aHR0cDovL2ltYWdlLnd1ZmF6aHVjZS5jb20vbXVzaWNfY29weXJpZ2h0XzEucG5n/gravity/East",
		"bg_color": "#000"
	}]
}
```

json 解析：

`data` 是一个数组，size是10，也就是每次只返回十条数据,当我们想获取更多数据就需要把最后数组最后一条的id传递过去。
如：
```
http://v3.wufazhuce.com:8000/api/channel/music/more/+{id}+?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android
```
- 音乐：我们需要使用该 json 字段中的 `item_id` 获取该音乐的[详细信息](#music_detail)

<h2 id="music_detail">电影详细信息</h2>

内容信息 url：`http://v3.wufazhuce.com:8000/api/music/detail/ + item_id + ?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

示例：`http://v3.wufazhuce.com:8000/api/music/detail/2361?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：
```
{
	"res": 0,
	"data": {
		"id": "2361",
		"title": "替你高兴",
		"cover": "http://image.wufazhuce.com/Fl8W6nY1iRdNizZ9yNyFQ_pjMJC7?imageMogr2/thumbnail/908|watermark/1/image/aHR0cDovL2ltYWdlLnd1ZmF6aHVjZS5jb20vbXVzaWNfY29weXJpZ2h0XzEucG5n/gravity/East",
		"isfirst": "0",
		"story_title": "上路去，别太念挂这里",
		"story": "\n<p>这首歌是送给在天堂上的可爱人儿。在「你们的幸福演唱会」上，穿着天使服的Kay妈给我们讲述了这首歌的故事。</p>\n<p class=\"fr-pspace-a0 fr-ft-ns\" style=\"text-align: center;\">倘若这绝症让你 太泄气萎衰</p>\n<p class=\"fr-pspace-a0 fr-ft-ns\" style=\"text-align: center;\">我愿抱你过最后行程 背上你恐惧</p>\n<p class=\"fr-ft-ns\" style=\"text-align: center;\">为你 平伏情绪</p>\n<img src=\"http://image.wufazhuce.com/placehold_old_image.png\" alt=\"\" style=\"margin-bottom: 30px;width:100%\">\n<p>《替你高兴》是写给作曲者John Laudon的一位好朋友，这位朋友是一位很年轻的妈妈，但不幸地患上了癌症，在她离世之前，她舍不的她的小朋友，放不­低自己的人生。</p>\n<p>带着忧虑和遗憾离开是一件痛苦的事情，因此歌曲传达的大意是，无论面对别离还是人生最幽暗的时刻，都要记得，我们可能没有能力去选择结果，但我们总可以找一个最好的角度和看法去释怀、去接受、去拥抱、去包容。</p>\n<p>这个世界未必所有事都如你所愿，但总有它的意思，「从来没失败 和没有不对」 。</p>\n<img src=\"http://image.wufazhuce.com/placehold_old_image.png\" alt=\"\" style=\"margin-bottom: 30px;width:100%\">\n<p>你追寻过什么？又放下了什么？</p>\n<p>我们在人生探索中总会定下一个个目标，「妈，我要你永远年轻不老」、「我想成为科学家」、「另一半永远都不会离开我」、「得到一份高薪的offer」...随之，我们满怀自信地去向目标迈进，只要磨难和痛苦在承受范围以内，尽管跌倒碰壁，我们都心甘情愿地爬起来再试，心想着自己再努力一点就会离成功更近一些。</p>\n<p>有些承诺最终兑现了，而有些则注定换来一个不如意的结果。目标给予了你动力，并没答应给你好的结果。每长一岁，能力越强其实越会意识到自己的无能为力，你既左右不了上帝要带走谁，又等不到一个不喜欢你的人回头，就像在手机摔地上碎屏的一刻，你只能怀着侥幸心理捡起来看看，但你改变不了结果。</p>\n<p>你记得吗？李宗盛大哥的《给自己的歌》开头是这么写的：「想得却不可得，你奈人生何？」</p>\n<img src=\"http://image.wufazhuce.com/placehold_old_image.png\" alt=\"\" style=\"margin-bottom: 30px;width:100%\">\n<p>放弃，不是这社会主流的价值观，在资本主义里我们都在拼「效果最大化」，拼拼工作谁更狼性，在高效率的下尽量延长工作时间，这样才能显示出你的价值，在竞争中不被淘汰；拼拼爱情谁更一往情深，爱了就得一辈子，不允许在中途无缘无故失去了感觉...</p>\n<p>但我觉得，往前冲固然很重要，而放得下更可贵，也更困难。这命题太大了，我懒得啰嗦地长篇论述，而且对于是「拿」是「放」，每个人的标准都不同，假如要说一句表明我立场的话，我想说：「人生必须负重前行，但别累坏自己了，好吗？」</p>\n<img src=\"http://image.wufazhuce.com/placehold_old_image.png\" alt=\"\" style=\"margin-bottom: 30px;width:100%\">\n<p>《替你高兴》是最唱进我心里的一首歌。听了八年，每次再听起心都犹如被扎了一下。忧虑、苦涩、斗争就留给地上那些仍需要为目标付出汗水的人儿吧，愿在天上的他们无需忧生计、不用设心机，没天灾、没病患、也没人祸，「道别俗世的顾虑 再不须掉眼泪 」。</p>\n<p>想着想着，心里还是不禁想问一句：「亲爱的 近况好吗？」</p>\n<p><br></p>\n<div class=\"one-quote-warp\">\n<div class=\"one-icon one-icon-quote one_quote\" style=\"font-size:26px;line-height: 1;\"> </div>\n<p>小编的提醒：今天是ONE音乐频道页更新的最后一天，欢迎各位尽快更新最新版本ONE APP，欣赏更多精彩内容。</p>\n</div>\n",
		"lyric": "躺下去 上路去 别太念挂这里 \r\n倘若这绝症让你 太泄气萎衰 \r\n我愿抱你过最後行程 背上你恐惧 \r\n为你 平伏情绪 \r\n\r\n旧日绊脚的顾虑 你终可跨过去 \r\n现在踏进远方的天国里 重拾到生趣 \r\n\r\n圣地里 谁要上山涉水 \r\n从来没失败 和没有不对 \r\n只知宽恕 没斗争 没有苦涩味蕾 \r\n没有速度 缓慢里安睡 无痛地醉 \r\n\r\n这地太热爱敌对 并各自有堡垒 \r\n要为胜利拼命去 作瞎眼跑腿 \r\n今天你已算责任完成 赎了上世的罪 \r\n贺你 全身的退 \r\n\r\n道别俗世的顾虑 再不须掉眼泪 \r\n现在踏进远方的天国里 要住进新居 \r\n\r\n於圣地里 谁要上山涉水 \r\n从来没失败 从来没有不对 \r\n只知宽恕 没斗争 没有世界之最 \r\n没有速度 缓慢里安睡 无痛寄居 \r\n\r\n纵每晚会因你已别离 心绞痛 \r\n总为你达到极快乐有甜蜜悸动 \r\n\r\n广阔地里 谁要上山涉水 \r\n从来没失败 从来没有不对 \r\n只知宽恕 没斗争 没有苦涩味蕾 \r\n没有速度 宁静里安睡 含笑地醉",
		"info": "所属专辑：Slowness\r\n演唱者：谢安琪\r\n作词：周, 博賢 / LAUDON, JOHN\r\n唱片公司：新艺宝\r\n发行时间：2009年12月21日\r\n专辑类别：录音室专辑",
		"platform": "1",
		"music_id": "1769275733",
		"charge_edt": "责任编辑：十三妹",
		"related_to": "0",
		"web_url": "http://h.xiami.com/one-share.html?id=1769275733",
		"praisenum": 1025,
		"hide_flag": "0",
		"sort": "0",
		"maketime": "2016-01-01 21:00:00",
		"last_update_date": "2017-08-20 02:25:58",
		"read_num": "54300",
		"story_summary": "这个世界未必所有事都如你所愿，但总有它的意思。",
		"audio": "",
		"anchor": "",
		"editor_email": "shisanmei@wufazhuce.com",
		"related_musics": "",
		"album": "Slowness",
		"start_video": "",
		"media_type": "1",
		"copyright": "本文付费转载自年粤日（ID: daybydaygz）",
		"audio_duration": "0",
		"author": {
			"user_id": "6985795",
			"user_name": "谢安琪",
			"desc": "香港歌手，演员",
			"wb_name": "",
			"is_settled": "0",
			"settled_type": "0",
			"summary": "香港歌手，演员",
			"fans_total": "27",
			"web_url": "http://image.wufazhuce.com/FlvIH06Bkx2zfuC9qzdIiftfJjpX"
		},
		"story_author": {
			"user_id": "7956945",
			"user_name": "馆长Jeekit",
			"desc": "“年粤日”（ID：daybydaygz）每晚一首粤语歌，陪你度过年月日。",
			"wb_name": "",
			"is_settled": "0",
			"settled_type": "0",
			"summary": "“年粤日”公众号作者。",
			"fans_total": "153",
			"web_url": "http://image.wufazhuce.com/Flenoszs07hezZZsvn44LZzsfhX0"
		},
		"author_list": [{
			"user_id": "7956945",
			"user_name": "馆长Jeekit",
			"desc": "“年粤日”（ID：daybydaygz）每晚一首粤语歌，陪你度过年月日。",
			"wb_name": "",
			"is_settled": "0",
			"settled_type": "0",
			"summary": "“年粤日”公众号作者。",
			"fans_total": "153",
			"web_url": "http://image.wufazhuce.com/Flenoszs07hezZZsvn44LZzsfhX0"
		}],
		"feeds_cover": "http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig?imageMogr2/auto-orient/blur/50x50/quality/75|imageslim",
		"next_id": "104",
		"previous_id": "1183",
		"tag_list": [],
		"share_list": {
			"wx": {
				"title": "音乐 | 上路去，别太念挂这里",
				"desc": "文/馆长Jeekit 这个世界未必所有事都如你所愿，但总有它的意思。",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=singlemessage",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"wx_timeline": {
				"title": "音乐 | 上路去，别太念挂这里",
				"desc": "文/馆长Jeekit 这个世界未必所有事都如你所愿，但总有它的意思。",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=timeline",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			},
			"weibo": {
				"title": "ONE一个《音乐 | 上路去，别太念挂这里》 文/馆长Jeekit： 这个世界未必所有事都如你所愿，但总有它的意思。 阅读全文：http://h.xiami.com/one-share.html?id=1769275733&channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
				"desc": "",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=weibo",
				"imgUrl": "",
				"audio": ""
			},
			"qq": {
				"title": "上路去，别太念挂这里",
				"desc": "这个世界未必所有事都如你所愿，但总有它的意思。",
				"link": "http://h.xiami.com/one-share.html?id=1769275733&channel=qq",
				"imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
				"audio": ""
			}
		},
		"sharenum": 1000,
		"commentnum": 44
	}
}
```
<h2 id="music_url">音乐地址 Api</h2>
由于我太渣，没有找到one音乐中的播放地址，也没解决虾米音乐的播放地址，暂时使用QQ音乐的接口凑合。

搜索 url `https://music-api-jwzcyzizya.now.sh/api/search/song/qq?key=李健&limit=5&page=1`

json 示例：
```
{
	"success": true,
	"total": 371,
	"songList": [{
		"album": {
			"id": "002g0JpA4aQ6bZ",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002g0JpA4aQ6bZ.jpg",
			"coverBig": "https://y.gtimg.cn/music/photo_new/T002R500x500M000002g0JpA4aQ6bZ.jpg",
			"coverSmall": "https://y.gtimg.cn/music/photo_new/T002R150x150M000002g0JpA4aQ6bZ.jpg",
			"name": "依然"
		},
		"artists": [{
			"id": "001oEyQf4Ub6s7",
			"name": "李健"
		}],
		"name": "贝加尔湖畔",
		"id": "000PLHrM2luXiz",
		"needPay": false
	}]
}
```

播放链接：`https://music-api-jwzcyzizya.now.sh/api/get/song/qq?id={id}`

示例：`https://music-api-jwzcyzizya.now.sh/api/get/song/qq?id=000PLHrM2luXiz`

json 示例：

```
{
	"success": true,
	"url": "http://dl.stream.qqmusic.qq.com/M800000PLHrM2luXiz.mp3?vkey=F00E8CC18E55F4881A7884544FE44D707F64EA1B82C678B273FA5D427F7FF0ED117DD7ADBAB8C45537AD2250C912BCA1180E1E7EA159C748&guid=869666546&fromtag=30"
}
```

<h2 id="onelist">获取最新图文</h2>
 此 url 获取所有近期图片列表，返回 json 中的的数字作为参数传入后面的 url 中

图文url `http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：
```
{
	"res": 0,
	"data": [
		"4739",
		"4737",
		"4736",
		"4735",
		"4726",
		"4731",
		"4732",
		"4730",
		"4725",
		"4711"
	]
}
```
将上一个 json 中的 data 字段的值放入 url 中，并拼接好相应的参数
url：`http://v3.wufazhuce.com:8000/api/onelist/ + 上面获取的data + /0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

示例：`http://v3.wufazhuce.com:8000/api/onelist/4739/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

json 示例：

```
{
	"res": 0,
	"data": {
		"id": "4739",
		"weather": {
			"city_name": "地球",
			"date": "2018-04-10",
			"temperature": "-275",
			"humidity": "120",
			"climate": "对流层",
			"wind_direction": "一阵妖风",
			"hurricane": "36级",
			"icons": {
				"day": "weather_icon_unknown",
				"night": "weather_icon_unknown_night"
			}
		},
		"date": "2018-04-10 06:00:00",
		"content_list": [{
			"id": "15000",
			"category": "0",
			"display_category": 6,
			"item_id": "2037",
			"title": "摄影",
			"forward": "很多时候，我们的选择并不是内心的声音，只是对安全感的向往。比如并不想赢，只是怕输。比如并不是爱，只是孤独。许多人都在这种中间状态里，并不舒服，又不敢怎样。",
			"img_url": "http://image.wufazhuce.com/Fk_n-XJMaOnkJ5QsBcswbb23oxdH",
			"like_count": 5929,
			"post_date": "2018-04-10 06:00:00",
			"last_update_date": "2018-04-04 17:38:25",
			"author": {},
			"video_url": "",
			"audio_url": "",
			"audio_platform": 2,
			"start_video": "",
			"has_reading": 0,
			"volume": "VOL.2012",
			"pic_info": "Kinga Cichewicz",
			"words_info": "颜卤煮",
			"subtitle": "",
			"number": 0,
			"serial_id": 0,
			"serial_list": [],
			"movie_story_id": 0,
			"ad_id": 0,
			"ad_type": 0,
			"ad_pvurl": "",
			"ad_linkurl": "",
			"ad_makettime": "",
			"ad_closetime": "",
			"ad_share_cnt": "",
			"ad_pvurl_vendor": "",
			"content_id": "2037",
			"content_type": "0",
			"content_bgcolor": "#FFFFFF",
			"share_url": "http://m.wufazhuce.com/one/2037",
			"share_info": {
				"url": "http://m.wufazhuce.com/one/2037",
				"image": "http://image.wufazhuce.com/Fk_n-XJMaOnkJ5QsBcswbb23oxdH",
				"title": "VOL.2012",
				"content": "很多时候，我们的选择并不是内心的声音，只是对安全感的向往。比如并不想赢，只是怕输。比如并不是爱，只是孤独。许多人都在这种中间状态里，并不舒服，又不敢怎样。"
			},
			"share_list": {
				"wx": {
					"title": "",
					"desc": "",
					"link": "http://m.wufazhuce.com/one/2037?channel=singlemessage",
					"imgUrl": "",
					"audio": ""
				},
				"wx_timeline": {
					"title": "",
					"desc": "",
					"link": "http://m.wufazhuce.com/one/2037?channel=timeline",
					"imgUrl": "",
					"audio": ""
				},
				"weibo": {
					"title": "ONE一个 很多时候，我们的选择并不是内心的声音，只是对安全感的向往。比如并不想赢，只是怕输。比如并不是爱，只是孤独。许多人都在这种中间状态里，并不舒服，又不敢怎样。——颜卤煮 下载ONE一个APP:http://weibo.com/p/100404157874",
					"desc": "",
					"link": "http://m.wufazhuce.com/one/2037?channel=weibo",
					"imgUrl": "",
					"audio": ""
				},
				"qq": {
					"title": "",
					"desc": "",
					"link": "http://m.wufazhuce.com/one/2037?channel=qq",
					"imgUrl": "",
					"audio": ""
				}
			},
			"tag_list": [],
			"orientation": "0"
		}]
	}
}
```
 # 关于 #
<h2 id="about">关于界面</h2>

![关于界面](https://user-gold-cdn.xitu.io/2018/4/10/162adad57bc402ba?w=335&h=593&f=jpeg&s=24304)

- 用到MUI提供的方法，可以直接对图片精选保存。

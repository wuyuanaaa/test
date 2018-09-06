##  导航
- [demo1](#demo1)---百度统计
- [demo2](#demo2)---自动更换公司及资质
- [demo3](#demo3)---单页微信修改
- [demo4](#demo4)---手机验证码模块
- [demo5](#demo5)---复制微信
- [demo6](#demo6)---轮播图
- [demo7](#demo7)---scrollPage
- [demo8](#demo8)---视频播放模块
- [demo9](#demo9)---m端fastClick
- [demo10](#demo10)---小能代码
- [demo11](#demo11)---M端页面滚动到指定元素位置
- [demo12](#demo12)---倒计时模块
- [demo13](#demo13)---页面指定位置展示
- [demo14](#demo14)---元素入屏幕动画
- [demo15](#demo15)---移动端滑动事件

###  demo1
####  百度统计
```
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2c681ae4f5f65e293c799beac90eedb7";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
```
###  demo2
####  自动更换公司及资质
#####  审核页面
引用方法库
```
<script src="//js.ykclass.com/frame/jquery/v2.1.4/jquery.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
在js部分引用方法
```
$_y.registeredSh();
```
#####  百度单页
引用方法库
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
在js部分引用方法
```
$_y.registeredBd();
```
#####  其他页面
引用方法库
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
公司名称替换成如下：
```
<span id="registeredName"></span>
```
备案号替换成如下：
```
<span id="registeredNum"></span>
```
证书部分替换成：
```
<div class="p-warp" id="certificate">
    <p>网络文化经营许可证 鄂网文许字【2014】1409-032号</p>
    <p>互联网出版许可证 鄂字第23号 </p>
</div>
```
例：M端替换后如下：
```
<div class="p-warp">
    <p>版权所有@<span id="registeredName"></span> </p>
    <p> 2018 保留一切权利 <span id="registeredNum"></span> </p>
</div>
<div class="p-warp" id="certificate">
    <p>网络文化经营许可证 鄂网文许字【2014】1409-032号</p>
    <p>互联网出版许可证 鄂字第23号 </p>
</div>
```
在js部分引用方法
```
$_y.registered();
```
### demo3
####  单页微信修改
引用方法库
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
在js部分引用方法
```
$_y.changeWeChat(['gpa6597']);
```
### demo4
####  手机验证码模块
##### 【html】
```
<!--弹出层 开始-->
<div class="layer-warp">
    <div class="layer">
        <div class="title">恭喜您，提交成功！</div>
        <div class="text">
            您好，您的信息已提交成功，<span class="c-b">查询结果将于15分钟内以短信或电话的方式通知您，</span>请注意查收！
        </div>
        <div class="layer-close"></div>
    </div>
</div>
<!--弹出层 结束-->
```
##### 【css  M】
```
.layer-warp {
	position: fixed;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	display: none;
	text-align: center;
	background: rgba(0, 0, 0, 0.4);
	z-index: 9999999;
	.layer {
		position: absolute;
		top: 50%;
		left: 35%;
		transform: translate(-35%, -50%);
		.w(700);
		.h(700);
		background: url(//m.ykclass.com/zt/zyImages/ykclass/layer.png) no-repeat;
		background-size: cover;
		z-index: 99999999;
	}
	.title {
		position: absolute;
		top: 110/75rem;
		left: 164/75rem;
		.fs(50);
		color: #fff;
	}
	.text {
		position: absolute;
		top: 260/75rem;
		left: 130/75rem;
		color: #666666;
		.w(490);
		.h(250);
		.fs(36);
		line-height: 1.5;
		text-align: left;
		.c-b {
			font-weight: bold;
			color: #333333;
		}
	}
	.layer-close {
        position: absolute;
        top: 502/@r;
        left: 134/@r;
        .w(463);
        .h(92);
    }
}
```
##### 【css  PC】
```
.layer-warp {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: block;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99999;
    .layer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 400px;
        width: 400px;
        background: url(//m.ykclass.com/zt/zyImages/ykclass/layer.png) no-repeat;
        background-size: cover;
        z-index: 99999999;
    }
    .title {
        position: absolute;
        top: 60px;
        left: 100px;
        font-size: 26px;
        color: #fff;
    }
    .text {
        position: absolute;
        top: 145px;
        left: 60px;
        color: #666666;
        width: 300px;
        height: 300px;
        font-size: 20px;
        line-height: 1.5;
        text-align: left;
        .c-b {
            font-weight: bold;
            color: #333333;
        }
    }
    .layer-close {
        position: absolute;
        top: 286px;
        left: 76px;
        height: 54px;
        width: 268px;
    }
}
```
##### 【html】
```
<div id="get-phone">
    <div class="row">
        <input class="phone-num" type="number" placeholder="请输入电话号码">
        <input class="send-code" type="button" value="获取验证码">
    </div>
    <div class="row">
        <input class="code-value" type="number" placeholder="请输入验证码">
    </div>
    <button class="vail-code">提交</button>
</div>
```
##### 【js】
引用方法库
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
在js部分引用方法
```
$_y.saveActivitySmsInfo({
    id: '#get-phone',    // 获客模块id  必需
    cjCode: 'YK_TT_TONGJI',     // 场景代码  必需
    needMsg: true,      // 是否短信验证(true表示需要)  非必需
    countdown: 90,      // 首次倒计时时间（默认90）  非必需
    info: infoObj,      // 传入的用户填写信息（一个包含msg参数的对象）   非必需
    popUp: true,        // 验证通过后是否有弹窗
    callback: function () {      // 获客完成后的回调  非必需
        if(_taq) {
          _taq.push({convert_id: "1606319178273799", event_type: "form"})
        }
    }
});
```
附带信息如
```
var infoObj = {
    msg: ''
};
$('.vail-code').on('click',function () {
    var province = $('#province').val();
    var education = $('#education').val();
    infoObj.msg = province + '-' + education;
    // 信息自行更换
});
```
### demo5
####  复制微信
##### 【html】
```
<!--弹出层 开始-->
<div class="weChatB w_2">
    <div class="title">加微信领取</div>
    <p class="weChatTitle">长按复制下方微信添加为好友<br>↓↓↓</p>
    <p class="weChatCenter wxnumber"></p>
    <p class="weChatBottom">微信咨询  免费获取信息</p>
</div>
<!--弹出层 结束-->

<div class="footerBar">
    <p>老师微信：<span class="c-yellow wxCode"></span>（点击复制）</p>
</div>
<div class="footH" style="height: 1.2rem"></div>
```
##### 【css】
```
// 底部浮动条
.footerBar {
	width: 10rem;
	position: fixed;
	height: 1.2rem;
	bottom: 0;
	left: 50%;
	margin-left: -5rem;
	background-color: #E9360F;
	p {
    	line-height: 1.2rem;
    	font-size: 0.4rem;
    	color: #fff;
    	text-align: center;
    }
    .c-yellow {
    	color: #FFF83A;
    }
}
// 微信弹窗（新版）
div.layui-layer {   //取消layer默认外阴影
	box-shadow: none;
}
.weChatB {
    display: none;
	width: 7.6rem;
	height: 8rem;
	box-sizing: border-box;
	background: url(//m.ykclass.com/zt/zyImages/ykclass/1533535073405.png) no-repeat center;
	background-size: cover;
	padding-top: 1.5rem;
	.title {
		font-size: 0.6rem;
		line-height: 1.25rem;
		color: #FFFFFF;
		text-align: center;
	}
	.weChatTitle {
		text-align: center;
		margin-top: 0.7rem;
		font-size: 0.4rem;
		line-height: 0.8rem;
		color: #ff452d;
	}
	.weChatCenter {
		width: 5.04rem;
		line-height: 1.24rem;
		font-weight: bold;
		background: #ff1a1f;
		border-radius: 0.5rem;
		margin: 0.2rem auto;
		font-size: 0.7rem;
		color: #FFFFFF;
		text-align: center;
	}
	.weChatBottom {
		text-align: center;
		font-weight: bold;
		font-size: 0.5rem;
		line-height: 0.5rem;
		color: #ff1a1f;
		margin-top: 0.4rem;
	}
}
```
##### 【js】
引用方法库
```
<script src="//m.ykclass.com/zt/zyjs/layer/layer.js"></script>
<script src="//m.ykclass.com/zt/zyjs/clipboard.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
调用方法
```
$_y.copyWeChat(['qbk8730']);
```
### demo6
####  轮播图
##### 【html】
```
<div class="carousel" id="carousel">
    <ul class="carousel-main">
        <li class="active"></li>
        <li></li>
        <li></li>
    </ul>
    <ol class="carousel-pagination">
        <li class="active"></li>
        <li></li>
        <li></li>
    </ol>
    <div class="carousel-controller">
        <div class="controller-left"><</div>
        <div class="controller-right">></div>
    </div>
</div>
```
##### 【参考初始css】
```
.carousel {
	position: relative;
	margin: 100px auto;
	width: 100%;
	background: #ccc;
	height: 400px;
}
.carousel-main {
	position: absolute;
	width: 800px;
	height: 400px;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
	li {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	li:nth-of-type(1) {
		background: #6f9dd4;
	}
	li:nth-of-type(2) {
		background: #f56c50;
	}
	li:nth-of-type(3) {
		background: #fff9ae;
	}
}
.carousel-pagination {
	position: absolute;
	width: 100px;
	height: 20px;
	left: 50%;
	bottom: 20px;
	transform: translateX(-50%);
	li {
		float: left;
		width: 20px;
		height: 100%;
		background: #dfdfdf;
	}
	li + li {
		margin-left: 20px;
	}
	.active {
		background: #f62d1d;
	}
}
.carousel-controller {
	.controller-left,
	.controller-right {
		position: absolute;
		width: 20px;
		height: 40px;
		top: 50%;
		transform: translateY(-50%);
		line-height: 40px;
		font-size: 30px;
		background: #aef7a8;
		cursor: pointer;
	}
	.controller-left {
		left: 5%;
	}
	.controller-right {
		right: 5%;
	}
}
```
##### 【js】
引用方法库（JQ依赖）
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
调用方法
```
$_y.carousel({
    el: '#carousel',                          // 轮播模块id
    mode: 1,                                  // 轮播方式 1、左右切换 2、淡出淡入
    runTime: 800,                             // 轮播切换的时间
    intervalTime: 4000,                       // 轮播间隙时间
    mainListEl: '.carousel-main',             // 轮播主区域类名
    paginationListEl: '.carousel-pagination', // 轮播序号部分类名
    controller: '.carousel-controller',       // 轮播切换部分类名
    addTouchEvent: false,                     // 是否手指滑动事件
    autoplay: true,                           // 是否自动播放
    mouseenterStop: false                     // 鼠标进入时轮播是否停止
});
```
### demo7
####  scrollPage
##### 【js】
引用方法库（JQ依赖）
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
调用方法
```
$_y.scrollPage('.class',{navEl: '.md', count: 100});   // 对象内参数为默认值，可传入同名参数进行替换
```
### demo8
####  视频播放模块
##### 【js】
```
<script src="//static.ykclass.com/frame/polyv/polyvplayer.min.js"></script>
//视频
var uid = "336d8745b4";
var vid = "5af4dd0127c62475750485dc988b22d2_5";
var videoPlayer = null; //live：直播播放器  video：点播播放器
initVidoPlayer(vid);
function initVidoPlayer(vid) {
    videoPlayer = polyvObject('#player').videoPlayer({
        'width': '100%',
        'height': '100%',
        'vid': vid,
        flashParams: {
            'allowScriptAccess': 'always',
            'allowFullScreen': 'true',
            'quality': 'high',
            'bgcolor': '#ffffff',
            'wmode': 'transparent',
        },
        flashvars: {
            'autoplay': '1',
            'is_auto_replay': 'on',
            'ban_history_time': 'on',
            'setScreen': 'fill',
        }
    });
};
```
### demo9
####  m端fastClick
```
<script src="//js.ykclass.com/frame/fastClick/v1.0.0/fastClick.js"></script>
// 快速点击
FastClick.attach(document.body);
```
### demo10
####  小能代码
```
var kf = 'kf_9540_1520933792603';
var NTKF_PARAM = {
    "siteid": "kf_9540" /*网站siteid*/ ,
    "settingid": kf /*代码ID*/ ,
    "uid": "" /*会员ID*/ ,
    "uname": "" /*会员名*/ ,
    "userlevel": "0" /*会员等级*/
};
$(document).on("click", ".ntkf", function() {
    NTKF.im_openInPageChat(kf);
});
```
引用js文件：
```
<script type="text/javascript" src="//dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9540" charset="utf-8"></script>
```
### demo11
####  M端页面滚动到指定元素位置
引用方法库
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
调用方法
```
$_y.scrollTo('#id');
```
### demo12
####  倒计时模块
```
var today = new Date().getTime();
var  examDay = [2018,4,24];
var endDay = new Date(examDay[0], examDay[1]-1, examDay[2]).getTime();
if(endDay - today > 0) {
    var day = Math.ceil((endDay - today) / (24 * 60 * 60 * 1000));
    var single = day % 10;
    var decade = parseInt((day % 100) / 10);
    var hundreds = parseInt((day % 1000) / 100);
    $(".single").html(single);
    $(".decade").html(decade);
}
```
### demo13
####  页面滚动到指定位置展示
##### 【js】
引用方法库
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.0.js"></script>
```
调用方法
```
$_y.fixedTop({
    target: '#table-title',         // 目标元素
    relatedTarget: '.table',        // 关联元素
    throttleTime: 50,               // 节流时间（ms）
    subtractHeight: 150             // 底部预留高度
});
```
### demo14
####  enterScreenAnimate
##### 【css】
[Animate.css 动画库](https://daneden.github.io/animate.css/)
```
<link rel="stylesheet" type="text/css" href="//m.ykclass.com/zt/zyjs/animate.css"/>
```
[Magic.css 动画库](https://www.minimamente.com/example/magic_animations/)
```
<link rel="stylesheet" type="text/css" href="//m.ykclass.com/zt/zyjs/magic.min.css"/>
```
##### 【js】
引用方法库（JQ依赖）
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.1.js"></script>
```
调用方法
```
$_y.enterScreenAnimate({
    el: '.anima',                   // 需要动画元素的类名 默认 '.anima'
    scale: 0.8                      // 0.8为元素到达屏幕高度80%时开始执行动画 默认0.8
});
/*
* data-addLibrary="animated"        // 依赖动画库的通用类名
* data-animateType="bounceInRight"  // 动画的类名
* data-delay="200"                  // 动画延迟时间
* data-remove="true"                // 动画执行完成后是否删除类名
* data-relative=".part-2"           // 动画相对元素
*/

```
### demo15
####  touchEvent
##### 【js】
引用方法库（JQ依赖）
```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa2.1.js"></script>
```
调用方法
```
$_y.touchEvent({
    el: '',                        // 注册事件的元素
    touchstartFn: null,            // 滑动开始时的事件
    touchendFn: null,              // 滑动结束的事件 需传值 direction
    minMove: 70                    // 判断滑动的最小滑动距离
});
/*
* direction                        // 1：向上，2：向下，3：向左，4：向右,0：未滑动
*/
```
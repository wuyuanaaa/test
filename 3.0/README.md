#  导航
- [fn1](#fn1)---自动更换公司及资质(仅用于特定页面)
- [fn2](#fn2)---单页微信修改(仅用于特定页面)
- [fn3](#fn3)---手机验证码模块
- [fn4](#fn4)---复制微信(仅用于特定页面)
- [fn5](#fn5)---轮播图
- [fn6](#fn6)---scrollPage
- [fn7](#fn7)---视频播放模块
- [fn8](#fn8)---m端fastClick
- [fn9](#fn9)---小能代码
- [fn10](#fn10)---M端页面滚动到指定元素位置
- [fn11](#fn11)---倒计时模块
- [fn12](#fn12)---页面指定位置展示
- [fn13](#fn13)---元素入屏幕动画
- [fn14](#fn14)---移动端滑动事件
- [fn15](#fn15)---禁止input[type='number']滚轮事件

---

##  fn1
###  自动更换公司及资质(仅用于特定页面)
- ####  审核页面

> 引用方法库

```
<script src="//js.ykclass.com/frame/jquery/v2.1.4/jquery.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 在js部分引用方法

```
$_y.registeredSh();
```
- ####  百度单页

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 在js部分引用方法

```
$_y.registeredBd();
```
- ####  其他页面

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> M端替换后如下：

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

> 在js部分引用方法

```
$_y.registered();
```

---

## fn2
###  单页微信修改(仅用于特定页面)

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```
> 在js部分引用方法

```
// 默认调用
$_y.changeWeChat(wxArr);
// 全参调用
$_y.changeWeChat(wxArr, el);
```

- #### 主要参数表

| 属性 | 表示内容        | 是否必须 | 可选参数/参数类型 | 默认值 |
| ----- | ------------------- | -------- | ----------------- | ------- |
| wxArr | 随机取值的微信数组 | 是      | Array             | 无     |
| el    | 存放微信号的dom类名 | 否      | String            | '.code' |

---

## fn3
###  手机验证码模块

- #### 【js】

> 引用方法库

```
<script src="//js.ykclass.com/frame/jquery/v2.1.4/jquery.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/layer/layer.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 在js部分引用方法

```
// 默认调用
$_y.saveActivitySmsInfo.init(el);
// 全参调用
$_y.saveActivitySmsInfo.init(el, {
    sceneCode: 'YK_TT_TONGJI',
    needMsg: true,
    countdown: 90,
    els: {
        cellPhone: '.phone-number',
        codeValue: '.code-value',
        sendCode: '.send-code',
        submitButton: '.submit-button'
    },
    popUp: {
        popUpEl: '.layer-warp',
        popUpCloseEl: '.layer-close'
    },
    callback: function () {
        if(_taq) {
          _taq.push({convert_id: "1606319178273799", event_type: "form"})
        }
    }
});
// 修改实例的场景代码
$_y.saveActivitySmsInfo.changeSceneCode('#get-phone', 'YK_M_KUAIJI');
```

- #### 主要参数表

| 属性             | 表示内容           | 是否必须 | 可选参数/参数类型 | 默认值       |
| ------------------ | ---------------------- | -------- | ----------------- | --------------- |
| el                 | 获客外层dom元素ID | 是      | string            | 无             |
| sceneCode          | 场景代码           | 是      | string            | 无             |
| needMsg            | 是否需要短信验证 | 否      | true/false        | true            |
| countdown          | 首次倒计时时间  | 否      | number            | 90              |
| els                | 其他类名           | 否      | object            | 见下方       |
| els.cellPhone      | 号码输入框类名  | 否      | string            | '.phone-number' |
| els.codeValue      | 验证码输入框类名 | 否      | string            | '.code-value'   |
| els.sendCode       | 发送验证码按钮类名 | 否      | string            | '.send-code'    |
| popUp              | 弹窗类名           | 否      | object            | 见下方       |
| popUp.popUpEl      | 弹窗主体类名     | 否      | string            | '.layer-warp'   |
| popUp.popUpCloseEl | 关闭弹窗按钮类名 | 否      | string            | '.layer-close'  |
| getInfo            | 返回传入数据的钩子函数 | 否      | function          | 无             |
| callback           | 获客成功后的回调 | 否      | function          | 无             |


- #### 【html】

> 主体

```
<div class="get-phone" id="get-phone">
    <div class="row">
        <input class="phone-number" type="number" placeholder="请输入电话号码">
        <input class="send-code" type="button" value="获取验证码">
    </div>
    <div class="row">
        <input class="code-value" type="number" placeholder="请输入验证码">
    </div>
    <div class="row">
        <button class="submit-button">提交</button>
    </div>
</div>
```

> 弹窗

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

- #### 【css  M】

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

- #### 【css  PC】

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

---

## fn4
###  复制微信(仅用于特定页面)

- #### 【js】

> 引用方法库

```
<script src="//js.ykclass.com/frame/jquery/v2.1.4/jquery.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/layer/layer.js"></script>
<script src="//m.ykclass.com/zt/zyjs/clipboard.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
// 默认调用
$_y.copyWeChat(wxArr);
// 全参调用
$_y.copyWeChat(wxArr, {
    el: '.ntkf/.xnkf',
    noLayer: '.wxnumber',
    openLayer: '.wxCode'
});
```

- #### 主要参数表

| 属性    | 表示内容          | 是否必须 | 可选参数/参数类型 | 默认值     |
| --------- | --------------------- | -------- | ----------------- | ------------- |
| wxArr     | 随机取值的微信数组 | 是      | Array             | 无           |
| el        | 点击激活弹窗的dom类名 | 否      | String            | '.ntkf/.xnkf' |
| noLayer   | 复制失败无弹窗类名 | 否      | String            | '.wxnumber'   |
| openLayer | 复制失败有弹窗类名 | 否      | String            | '.wxCode'     |


- #### 【html】

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

- #### 【css】

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

---

## fn5
###  轮播图

- #### 【js】

> 引用方法库（依赖jquery）

```
<script src="//js.ykclass.com/frame/jquery/v2.1.4/jquery.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
// 默认调用
$_y.carousel.init(el);
// 全参调用
$_y.carousel.init(el,{
    mode: 'move',
    runTime: 800,
    intervalTime: 4000,
    mainListEl: '.carousel-main',
    paginationListEl: '.carousel-pagination',
    controller: '.carousel-controller',
    addTouchEvent: false,
    autoplay: true,
    mouseenterStop: false,
    minMove: 70
});
```

- #### 主要参数表

| 属性           | 表示内容           | 是否必须 | 可选参数/参数类型 | 默认值              |
| ---------------- | ---------------------- | -------- | ----------------- | ---------------------- |
| el               | 轮播模块外层dom元素ID | 是      | string            | 无                    |
| mode             | 轮播方式           | 否      | 'move'/'fade'     | 'move'                 |
| runTime          | 轮播切换的时间  | 否      | number            | 800                    |
| intervalTime     | 轮播间隙时间     | 否      | number            | 4000                   |
| mainListEl       | 轮播主区域类名  | 否      | string            | '.carousel-main'       |
| paginationListEl | 轮播序号部分类名 | 否      | string            | '.carousel-pagination' |
| controller       | 轮播切换部分类名 | 否      | string            | '.carousel-controller' |
| addTouchEvent    | 是否手指滑动事件 | 否      | true/false        | false                  |
| autoplay         | 是否自动播放     | 否      | true/false        | true                   |
| mouseenterStop   | 鼠标进入时轮播是否停止 | 否      | true/false        | false                  |
| minMove          | 滑动的最小距离  | 否      | number            | 70                     |



- #### 【html】

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

- #### 【参考初始css】

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

---

## fn6
###  scrollPage

- #### 【js】

> 引用方法库（JQ依赖）

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
// 默认调用
$_y.scrollPage(el);
// 全参调用
$_y.scrollPage.init(el, {
    navEl: '.md',
    listActiveClass: 'active',
    count: 100,
    animateTime: 600
});
```

- #### 主要参数表

| 属性          | 表示内容 | 是否必须 | 可选参数/参数类型 | 默认值 |
| --------------- | ------------ | -------- | ----------------- | -------- |
| el              | 页面锚点类名 | 是      | String            | 无      |
| navEl           | 页面导航类名 | 否      | String            | '.md'    |
| listActiveClass | 导航激活类名 | 否      | String            | 'active' |
| count           | 偏移高度 | 否      | Number            | 100      |
| animateTime     | 跳转动画事件 | 否      | Number            | 600      |



---

## fn7
###  视频播放模块

- #### 【js】

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

---

## fn8
###  m端fastClick

```
<script src="//js.ykclass.com/frame/fastClick/v1.0.0/fastClick.js"></script>
// 快速点击
FastClick.attach(document.body);
```

---

## fn9
###  小能代码

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

> 引用js文件：

```
<script type="text/javascript" src="//dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9540" charset="utf-8"></script>
```

---

## fn10
###  M端页面滚动到指定元素位置

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
$_y.scrollTo('#id');
```

---

## fn11
###  倒计时模块

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

---

## fn12
###  页面滚动到指定位置展示

- #### 【js】

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
$_y.fixedTop({
    target: '#table-title',
    relatedTarget: '.table',
    throttleTime: 50,
    subtractHeight: 150
});
/*
* target:               // 目标元素  【必需】
* relatedTarget:        // 关联元素  【必需】
* throttleTime:         // 节流时间（ms）  【非必需】【50】
* subtractHeight:       // 底部预留高度  【非必需】【150】
*/
```

---

## fn13
###  enterScreenAnimate

- #### 【css】

[Animate.css 动画库](https://daneden.github.io/animate.css/)

```
<link rel="stylesheet" type="text/css" href="//m.ykclass.com/zt/zyjs/animate.css"/>
```

[Magic.css 动画库](https://www.minimamente.com/example/magic_animations/)

```
<link rel="stylesheet" type="text/css" href="//m.ykclass.com/zt/zyjs/magic.min.css"/>
```

- #### 【js】

> 引用方法库（JQ依赖）

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
$_y.enterScreenAnimate({
    el: '.anima',
    scale: 0.8
});
/*
* el:                               // 需要动画元素的类名  【非必需】【'.anima'】
* scale:                            // 元素到达屏幕高度(scale*100)%时开始执行动画  【非必需】【0.8】
* data-addLibrary="animated"        // 依赖动画库的通用类名
* data-animateType="bounceInRight"  // 动画的类名
* data-delay="200"                  // 动画延迟时间
* data-remove="true"                // 动画执行完成后是否删除类名
* data-relative=".part-2"           // 动画相对元素
*/

```

---

## fn14
###  touchEvent

- #### 【js】

> 引用方法库（JQ依赖）

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
$_y.touchEvent({
    el: '',
    touchstartFn: null,
    touchendFn: null,
    minMove: 70
});
/*
* el: '',                        // 注册事件的元素
* touchstartFn: null,            // 滑动开始时的事件
* touchendFn: null,              // 滑动结束的事件 需传值 direction
* minMove: 70                    // 判断滑动的最小滑动距离
* direction                      // 1：向上，2：向下，3：向左，4：向右,0：未滑动
*/
```

---

## fn15
###  preventMouseWheel

- #### 【js】

> 引用方法库（JQ依赖）

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
$_y.preventMouseWheel();
```
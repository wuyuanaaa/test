#  导航

- [_更新记录_](#update)

- [1、__carousel__（轮播）](#carousel)
- [2、__saveActivitySmsInfo__（手机验证）](#saveActivitySmsInfo)
- [3、__scrollPage__（滚屏导航）](#scrollPage)
- [4、__animationIn__（入屏动画）](#animationIn)
- [5、__touchEvent__（移动端滑动事件）](#touchEvent)
- [6、__scrollTo__（页面滚动到指定元素位置）](#scrollTo)
- [7、__fixedTop__（滚屏吸顶）](#fixedTop)
- [8、__preventMouseWheel__（禁止input[type='number']滚轮事件）](#preventMouseWheel)
- [9、__registered__（自动更换公司及资质）【仅用于特定页面】](#registered)
- [10、__changeWeChat__（单页微信修改）【仅用于特定页面】](#changeWeChat)
- [11、__copyWeChat__（复制微信）【仅用于特定页面】](#copyWeChat)

---

##  carousel

> 轮播

- __【js】__

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

- __主要参数表__

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


- __【html】__

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

- __【参考初始css】__

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

##  saveActivitySmsInfo

> 手机验证

- __【js】__

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

- __主要参数表__

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


- __【html】__

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

- __【css  PC】__

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


##  scrollPage

> 滚屏导航

- __【js】__

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
// 重置高度钩子
$_y.scrollPage.reset(el);
```

- __主要参数表__

| 属性          | 表示内容 | 是否必须 | 可选参数/参数类型 | 默认值 |
| --------------- | ------------ | -------- | ----------------- | -------- |
| el              | 页面锚点类名 | 是      | String            | 无      |
| navEl           | 页面导航类名 | 否      | String            | '.md'    |
| listActiveClass | 导航激活类名 | 否      | String            | 'active' |
| count           | 偏移高度 | 否      | Number            | 100      |
| animateTime     | 跳转动画事件 | 否      | Number            | 600      |


---

##  animationIn

> 入屏动画

- __【css】__

[Animate.css 动画库](https://daneden.github.io/animate.css/)

```
<link rel="stylesheet" type="text/css" href="//m.ykclass.com/zt/zyjs/animate.css"/>
```

[Magic.css 动画库](https://www.minimamente.com/example/magic_animations/)

```
<link rel="stylesheet" type="text/css" href="//m.ykclass.com/zt/zyjs/magic.min.css"/>
```

- __【js】__

> 引用方法库（JQ依赖）

```
<script src="//js.ykclass.com/frame/jquery/v2.1.4/jquery.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
// 默认调用
$_y.animationIn.init();
// 全参调用
$_y.animationIn.init({
    el: '.anima',
    scale: 0.8,
    throttleTime: 200
});
```

- __主要参数表__

| 属性           | 表示内容                           | 是否必须 | 可选参数/参数类型 | 默认值       |
| ---------------- | -------------------------------------- | -------- | ----------------- | --------------- |
| el               | 标注需要动画元素类名         | 否      | String            | '.anima'        |
| scale            | 元素到达屏幕高度(scale*100)%时开始动画 | 否      | Number            | 0.8             |
| throttleTime     | 滚动事件节流时间               | 否      | Number            | 200             |
| __data-属性__
| data-animateType | 动画的类名                        | 是      | String            | 无             |
| data-addLibrary  | 依赖动画库的通用类名         | 否      | String            | 无             |
| data-delay       | 动画延迟时间                     | 否      | String            | 无             |
| data-remove      | 动画执行完成后是否删除类名 | 否      | String            | 非'false'则移除 |
| data-relative    | 动画相对元素                     | 否      | String            | 无             |


---


##  touchEvent

> 移动端滑动事件

- __【js】__

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

##  scrollTo

> 页面滚动到指定元素位置

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
$_y.scrollTo('#id');
```

---


##  fixedTop

> 滚屏吸顶

- __【js】__

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
// 默认调用
$_y.fixedTop.init(el);
// 全参调用
$_y.fixedTop.init(el, {
    top: 0,
    target: '#el',
    throttleTime: 60
})
```

- __主要参数表__

| 属性       | 表示内容             | 是否必须 | 可选参数/参数类型 | 默认值 |
| ------------ | ------------------------ | -------- | ----------------- | ------ |
| el           | 需要吸顶的元素class或id | 是      | String            | 无    |
| top          | 元素吸顶时的top值 | 否      | Number            | 0      |
| zIndex       | 元素吸顶时的zIndex值 | 否      | Number            | 888      |
| target       | 元素超过该元素范围即隐藏 | 否      | String            | 无    |
| throttleTime | 页面滚动节流时间 | 否      | Number            | 32     |


---

##  preventMouseWheel

> 禁止input[type='number']滚轮事件

- __【js】__

> 引用方法库（JQ依赖）

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 调用方法

```
$_y.preventMouseWheel();
```

---

##  registered

> 自动更换公司及资质【仅用于特定页面】

- __审核页面__

> 引用方法库

```
<script src="//js.ykclass.com/frame/jquery/v2.1.4/jquery.min.js"></script>
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 在js部分引用方法

```
$_y.registeredSh();
```
- __百度单页__

> 引用方法库

```
<script src="//m.ykclass.com/zt/zyjs/yuanaaa3.0.js"></script>
```

> 在js部分引用方法

```
$_y.registeredBd();
```
- __其他页面__

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


##  changeWeChat

> 单页微信修改【仅用于特定页面】

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


##  copyWeChat

> 复制微信(仅用于特定页面)

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

- __主要参数表__

| 属性    | 表示内容          | 是否必须 | 可选参数/参数类型 | 默认值     |
| --------- | --------------------- | -------- | ----------------- | ------------- |
| wxArr     | 随机取值的微信数组 | 是      | Array             | 无           |
| el        | 点击激活弹窗的dom类名 | 否      | String            | '.ntkf/.xnkf' |
| noLayer   | 复制失败无弹窗类名 | 否      | String            | '.wxnumber'   |
| openLayer | 复制失败有弹窗类名 | 否      | String            | '.wxCode'     |


- __【html】__

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

- __【css】__

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


##  update

- 2018.11.20 __scrollPage 使用 Mutation Observer API 进行高度重新存储的触发条件__
- 2018.11.20 __scrollPage 新增 reset 钩子，手动触发重新存储高度__
- 2018.11.23 __fixedTop 全部重写，功能类似，效果更好__
- 2018.11.23 __demo [写代码的测试demo，将就看看](https://wuyuanaaa.github.io/yuanaaa.js/demo/)__
- 2018.11.24 __fixedTop 修复惰性函数的对构造函数原型的修改，修复fixed后包含top值时的位置计算偏差__
- 2018.11.26 __fixedTop 新增 z-Index 自定义属性，支持 z-Index 修改__

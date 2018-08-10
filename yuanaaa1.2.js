$_y = {
	corporationList: [
		{
			"id": 0,
			"dName": "ytxedu",
			"name": "湖北云天下教育科技有限公司",
			"num": "鄂ICP备12016896号-8",
			"hasCertificate": true
		}, {
			"id": 1,
			"dName": "ykclass",
			"name": "湖北云天下教育科技有限公司",
			"num": "鄂ICP备12016896号-7",
			"hasCertificate": true
		}, {
			"id": 2,
			"dName": "guopass",
			"name": "武汉智慧环球科技有限公司",
			"num": "鄂ICP备16004339号-3",
			"hasCertificate": false
		}, {
			"id": 3,
			"dName": "topksw",
			"name": "武汉乐教科技有限公司",
			"num": "鄂ICP备13016533号",
			"hasCertificate": false
		}, {
			"id": 4,
			"dName": "yythb",
			"name": "北京文博华茂科技有限公司",
			"num": "京ICP备16065121号-1",
			"hasCertificate": false
		}, {
			"id": 5,
			"dName": "peisway",
			"name": "深圳市佩思维科技有限公司",
			"num": "粤ICP备15038492号-1",
			"hasCertificate": false
		}, {
			"id": 6,
			"dName": "hzhmcy",
			"name": "惠州市宏茂网络科技有限公司",
			"num": "粤ICP备17014673号-1",
			"hasCertificate": false
		}, {
			"id": 7,
			"dName": "cub100",
			"name": "惠州优车宝网络科技有限公司",
			"num": "粤ICP备15101985号-1",
			"hasCertificate": false
		}, {
			"id": 8,
			"dName": "ztkao",
			"name": "武汉智慧环球教育科技有限公司",
			"num": "鄂ICP备16004339号",
			"hasCertificate": false
		}, {
			"id": 9,
			"dName": "qcwedu",
			"name": "北京千才汇教科技有限公司",
			"num": "京ICP备16020172号-2",
			"hasCertificate": false
		}, {
			"id": 10,
			"dName": "yyt",
			"name": "北京文博华茂科技有限公司",
			"num": "京ICP备16065121号-1",
			"hasCertificate": false
		}, {
			"id": 11,
			"dName": "591book",
			"name": "武汉书香门第教育科技有限公司",
			"num": "鄂ICP备18009206号-1",
			"hasCertificate": false
		}, {
			"id": 12,
			"dName": "kangerwang",
			"name": "合肥盘手金融教育培训有限公司",
			"num": " ",
			"hasCertificate": false
		}, {
			"id": 13,
			"dName": "ytkj",
			"name": "长沙市亿泰科技有限公司",
			"num": "湘ICP备17018323号-3",
			"hasCertificate": false
		}, {
			"id": 14,
			"dName": "guanying",
			"name": "湖南冠赢网络科技有限公司",
			"num": "湘ICP备18000413号-1",
			"hasCertificate": false
		}, {
			"id": 15,
			"dName": "qikuangwl",
			"name": "大连安家帮网络科技有限公司",
			"num": "粤ICP备17069813号-3",
			"hasCertificate": false
		}, {
			"id": 16,
			"dName": "qim168",
			"name": "长沙起锚百货贸易有限责任公司",
			"num": "湘ICP备18010362号-1",
			"hasCertificate": false
		}, {
			"id": 17,
			"dName": "lexue",
			"name": "北京千才汇教科技有限公司",
			"num": "京ICP备16020172号-1",
			"hasCertificate": false
		}, {
			"id": 18,
			"dName": "qiancai",
			"name": "北京千才汇教科技有限公司",
			"num": "京ICP备16020172号-2",
			"hasCertificate": false
		}, {
			"id": 19,
			"dName": "bdzhuoyuewl",
			"name": "武汉卓越未来科技有限公司",
			"num": "鄂ICP备17025091号-1",
			"hasCertificate": false
		}, {
			"id": 20,
			"dName": "ykb120",
			"name": "湖北云天下教育科技有限公司",
			"num": "鄂ICP备12016896号-8",
			"hasCertificate": true
		}, {
			"id": 21,
			"dName": "ytx123",
			"name": "湖北云天下教育科技有限公司",
			"num": "鄂ICP备12016896号-8",
			"hasCertificate": true
		}
	],
	// 主域名
	domainName: window.location.host,
	registered: function () {  // 普通页面自动公司名称备案号
		var $registeredName = $('#registeredName'),
			$registeredNum = $('#registeredNum'),
			$certificate = $('#certificate');
		for (var i = 0, len = this.corporationList.length; i < len; i++) {
			if (this.domainName.indexOf(this.corporationList[i].dName) > -1) {
				$registeredName.text(this.corporationList[i].name);
				$registeredNum.text(this.corporationList[i].num);
				if (!this.corporationList[i].hasCertificate) {
					$certificate.html(' ');
				}
			}
		}
	},
	registeredBd: function () {  // 百度单页自动公司名称备案号
		var $footer = $('.footer');
		for (var i = 0, len = this.corporationList.length; i < len; i++) {
			if (this.domainName.indexOf(this.corporationList[i].dName) > -1) {
				$footer.html('<p>Copyright © 2018 ' + this.corporationList[i].name + ' All Rights Reserved <br>' + this.corporationList[i].num + '</p>')
			}
		}
	},
	registeredSh: function () {  // 审核页面自动公司名称备案号
		var $footer = $('.footer');
		for (var i = 0, len = this.corporationList.length; i < len; i++) {
			if (this.domainName.indexOf(this.corporationList[i].dName) > -1) {
				$footer.html(this.corporationList[i].name)
			}
		}
	},
	saveActivitySmsInfo: function (obj) {  // 带短信验证获客
		var $module = $(obj.id),
			$phone = $module.find('.phone-num'),	// 手机号码input
			$sendCode = $module.find('.send-code'),		// 获取验证码
			$codeValue = $module.find('.code-value'), 	// 验证码input
			$vailCode = $module.find('.vail-code'),		// 提交按钮
			countdown = obj.countdown || 90, 	// 倒计时
			host = '',		// 主域名
			protocol = window.location.protocol,	// 协议
			regPhone = /^1[34578][0-9]{9}$/;

		if (protocol == 'http:') {
			host = "http://tf.topksw.com"
		} else {
			host = "https://m.ykclass.com"
		}
		var settime = function (obj) {
			var startVal = obj.val();
			obj.attr("disabled", true);

			function fn() {
				countdown--;
				obj.val("重新发送(" + countdown + ")");
				if (countdown >= 0) {
					setTimeout(fn, 1000);
				} else {
					obj.removeAttr("disabled");
					obj.val(startVal);
					countdown = 60;
				}
			}

			setTimeout(fn, 1000);
		};
		var activity = {
			sendSms: function (phone, platform, callback) {
				if (!regPhone.test(phone)) {
					layer.msg('手机号码输入有误！');
				} else {
					settime($sendCode);
					$.ajax({
						type: "get",
						url: host + "/common/sendSmsMessage.html",
						dataType: "jsonp",
						jsonp: "callback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
						jsonpCallback: "callback", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
						data: {
							phone: phone,
							platform: platform
						},
						success: function (data) {
							if (callback && typeof callback == 'function') {
								callback(data);
							}
						}
					})
				}
			},
			saveActivitySmsInfo: function (object, code, callback) {
				object.accessUrl = window.location.href;
				object.code = code;
				if (obj.needMsg) {
					$.ajax({
						type: "get",
						url: host + "/common/saveActivitySmsInfo.html",
						dataType: "jsonp",
						jsonp: "callback",
						jsonpCallback: "callback",
						data: object,
						success: function (msg) {
							if (callback && typeof callback == 'function') {
								callback(msg);
							}
						}
					})
				} else {
					if (!regPhone.test(object.phone)) {
						layer.msg('手机号码输入有误！')
					} else {
						$.ajax({
							type: "get",
							url: _this.domainHost + "/common/saveActivityInfo.html",
							dataType: "jsonp",
							jsonp: "callback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
							jsonpCallback: "callback", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
							data: object,
							success: function (msg) {
								if (callback && typeof callback == 'function') {
									callback(msg);
								}
							}
						})
					}
				}
			}
		};
		$phone.keyup(function () {
			var phone = $phone.val();
			if (phone.length > 11) {
				layer.msg('手机号超出字符限制！')
			}
		});
		$sendCode.on('click', function () {
			activity.sendSms($phone.val(), "yk", function (msg) {
				if (msg.c == 100) {
					layer.msg('短信发送成功！');
				}
			})
		});
		$vailCode.on('click', function () {
			var infoMsg = '';
			if (obj.info) {
				infoMsg = obj.info.msg;
			}
			var object = {
				sceneCode: obj.cjCode,
				phone: $phone.val(),
				content: infoMsg
			};
			var code = $codeValue.val();
			activity.saveActivitySmsInfo(object, code, function (msg) {
				if (msg.c == 100) {
					$(".layer-warp").show();
					$module.find('input').not(".send-code").val("");
					if (obj.toutiaoCallback) {
						obj.toutiaoCallback();
					}
				} else if (msg.m == '用户手机号不能为空') {
					layer.msg('手机号码不能为空');
				} else if (msg.m == '短信验证码不能为空!') {
					layer.msg('短信验证码不能为空!');
				} else if (msg.code == 202) {
					layer.msg('短信验证码错误!');
				} else {
					layer.msg('您的信息输入有误');
				}
			})
		});
		$('.layer-close').on('click', function () {
			$('.layer-warp').hide();
		});
	},
	changeWeChat: function (arr) {
		var $code = $('.code');
		var wxObject = arr[Math.floor(Math.random() * arr.length)]; // 随机取一个微信号
		if ($code.length > 0) {
			$code.attr("data-clipboard-text", wxObject);
			$code.html(wxObject) //设置公众号值
		}
	},
	// 复制微信
	copyWeChat: function (arr) {
		var wxNow = arr[Math.floor(Math.random() * arr.length)],  // 随机微信
			$wxnumber = $('.wxnumber'),
			$wxCode = $('.wxCode'),
			$xnkf = $('.nkkf').length > 0 ? $('.ntkf') : $('.xnkf'); // 确定页面小能类名

		$wxnumber.text(wxNow);
		$wxCode.text(wxNow);
		$xnkf.on('click', openLayer);
		clipboardFn('.wxCode', openLayer);
		clipboardFn('.wxnumber');

		function clipboardFn(classNameString, callback) {
			var clipboard = new Clipboard(classNameString);
			var $obj = $(classNameString);
			$obj.on('click', function () {
				$obj.attr('data-clipboard-text', wxNow);
			});
			clipboard.on('success', function (e) {
				layer.msg('复制成功')
			});
			clipboard.on('error', function (e) {
				if (callback) {
					callback();
				}
				layer.msg('当前浏览器不支持点击复制，请长按复制')
			});
		}

		function openLayer() {
			layer.open({
				type: 1,
				title: false,
				content: $('.w_2'),
				area: ['7.6rem', '8rem'],
				closeBtn: 0,
				shadeClose: true,
				shade: [0.7, '#000'],
				anim: 2
			})
		}
	},
	// 轮播
	slider: function (obj) {    // id,mode,addTouch,interval,moveTime
		var $slide = $(obj.id),
			speed = obj.moveTime || 800,  // 动画时间
			interval = obj.interval || 4000,  // 轮播切换时间
			count = 0,
			$imgs = $slide.find('.slider>li'),
			$conts = $slide.find(".control>li"),
			$bar = $slide.find('.bar'),
			max = $imgs.length - 1,
			width = $imgs[0].offsetWidth,
			times = null;

		function change(num) {
			if (num > count) {
				if (num > max) {
					num = 0;
				}
				imgToNext(num);
			} else {
				if (num < 0) {
					num = max;
				}
				imgToPrev(num);
			}
			count = num;
			$($conts[count]).addClass('active').siblings().removeClass('active');
		}

		if (obj.mode === 1) {
			// 初始化
			$($imgs[count]).css('left', '0px').siblings().css('left', -width + 'px');

			function imgToNext(num) {
				$($imgs[num]).css('left', width + 'px');
				$($imgs[count]).stop().animate({left: -width + 'px'}, speed, 'swing');
				$($imgs[num]).stop().animate({left: '0px'}, speed, 'swing');
			}

			function imgToPrev(num) {
				$($imgs[num]).css('left', -width + 'px');
				$($imgs[count]).stop().animate({left: width + 'px'}, speed, 'swing');
				$($imgs[num]).stop().animate({left: '0px'}, speed, 'swing');
			}
		} else if (obj.mode === 2) {
			// 初始化
			$($imgs[count]).fadeIn(speed).siblings().fadeOut(speed);

			function imgToNext(num) {
				$($imgs[num]).fadeIn(speed).siblings().fadeOut(speed);
			}

			function imgToPrev(num) {
				imgToNext(num);
			}
		}
		//  左右控制点击事件
		if ($bar.length > 0) {
			$bar[0].addEventListener('click', function (event) {
				var e = event || window.event;
				if ($(e.target).hasClass('l')) {
					change(count - 1);
				} else {
					change(count + 1);
				}
			});
		}
		//  序号控制点击事件
		$conts.on('click', function () {
			change($(this).data('i'));
		});

		times = setInterval(function () {
			change(count + 1);
		}, interval);
		// 鼠标经过动画暂停
		if(obj.mouseenterStop) {
			$slide.on('mouseover', '.bar ,.control,.slider', function () {
				clearInterval(times);
			});
			$slide.on('mouseout', '.slider,.control,.bar', function () {
				clearInterval(times);
				times = setInterval(function () {
					change(count + 1);
				}, interval);
			});
		}
		// 移动端滑动支持
		if (obj.addTouch) {
			// 滑动处理
			var startX, startY;
			$slide[0].addEventListener('touchstart', function (ev) {
				clearInterval(times);
				startX = ev.touches[0].pageX;
				startY = ev.touches[0].pageY;
			}, false);
			$slide[0].addEventListener('touchend', function (ev) {
				var endX, endY, direction;
				clearInterval(times);
				times = setInterval(function () {
					change(count + 1);
				}, interval);
				endX = ev.changedTouches[0].pageX;
				endY = ev.changedTouches[0].pageY;
				direction = getSlideDirection(startX, startY, endX, endY);
				touchMove(direction);
			}, false);
		}

		function touchMove(direction) {
			if (direction === 3) {
				change(count + 1);
			} else if (direction === 4) {
				change(count - 1);
			}
		}

		// 返回角度
		function getSlideAngle(dx, dy) {
			return Math.atan2(dy, dx) * 180 / Math.PI;
		}

		// 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
		function getSlideDirection(startX, startY, endX, endY) {
			var dy = startY - endY;
			var dx = endX - startX;
			var result = 0;
			// 如果滑动距离太短
			if (Math.abs(dx) < 40 && Math.abs(dy) < 40) {
				return result;
			}
			var angle = getSlideAngle(dx, dy);
			if (angle >= -45 && angle < 45) {
				result = 4;
			} else if (angle >= 45 && angle < 135) {
				result = 1;
			} else if (angle >= -135 && angle < -45) {
				result = 2;
			}
			else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
				result = 3;
			}
			return result;
		}
	},
	// 页面滚动隐藏/显示
	fixedTop: function (obj) {
		var target = $(obj.target),  // 目标元素
			relatedTarget = $(obj.relatedTarget),  // 关联元素
			time = obj.time || 50,   // 节流时间（ms）
			subtractHeight = obj.subtractHeight || 150,   // 底部预留高度
			timeStart = new Date(),
			minY = relatedTarget.offset().top,
			maxY = relatedTarget.height() + minY - subtractHeight;
		$(window).on('scroll', function () {
			var timeNow = new Date();
			if (timeNow - timeStart > time) {
				var scrollY = $('html,body').scrollTop();
				if (scrollY > minY && scrollY < maxY) {
					target.show();
				} else {
					target.hide();
				}
				timeStart = new Date();
			}
		})
	},
	// 页面动画至指定元素 M端
	scrollTo: function (id) {
		var h = $(id).offset().top - 200;
		$('html,body').animate({'scrollTop': h + 'px'});
	},
	// scrollPage
	scrollPage: function (flagClass) {
		var $flags = $(flagClass),
			$nav = $('.md'),
			$lists = $nav.find('li'),
			hArr = [];

		for(var i = 0, len = $flags.length; i < len; i++){
			hArr[i] = $flags.eq(i).offset().top - $nav.height() - $nav[0].offsetTop;
			(function (arg) {
				$lists.eq(arg).on('click',function () {
					scrollTo(arg)
				})
			})(i);
		}
		// 页面滚动事件节流
		var start = new Date();
		$(window).on('scroll',function () {
			var end = new Date();
			if(end - start > 100){
				addActive();
				start = new Date();
			}
		});

		function addActive() {
			var h = $('html,body')[0].scrollTop;
			for(var i = 0, len = hArr.length; i < len; i++){
				if(h >= hArr[i] - 10){
					$lists.eq(i).addClass('active').siblings('li').removeClass('active');
				}
			}
		}
		function scrollTo(n) {
			$('html,body').animate({
				scrollTop : hArr[n]
			}, 666,function () {
				addActive();
			});

		}
	},
	// 元素进入屏幕范围动效
	enterScreenAnimate: function (arr) {
		var isRun = false;
		var H = $('html,body')[0].clientHeight * 0.5;
		window.addEventListener('scroll',function () {
			if(isRun){
				return;
			}
			isRun = true;
			setTimeout(function () {
				forEachArr(arr);
				isRun = false;
			},100)
		});
		
		function forEachArr(arr) {
			var scrollTop = $('html,body')[0].scrollTop;
			arr.forEach(function (value, index) {
				enterToScreen(value.el,scrollTop,value.animateType,value.addLibrary);
			})
		}
		function enterToScreen(dom,scrollTop,animateType,addLibrary) {
			if(typeof dom === 'string'){
				dom = document.querySelector(dom);
			}
			if(!$(dom).data('hasDone')){
				if($(dom).offset().top - scrollTop < H){
					addLibrary ? $(dom).addClass(addLibrary) : '';
					$(dom).addClass(animateType);
					$(dom).data('hasDone',true);
				}
			}
		}
	}
};

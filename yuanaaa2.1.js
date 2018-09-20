$_y = {
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
		return this;
	},
	registeredBd: function () {  // 百度单页自动公司名称备案号
		var $footer = $('.footer');
		for (var i = 0, len = this.corporationList.length; i < len; i++) {
			if (this.domainName.indexOf(this.corporationList[i].dName) > -1) {
				$footer.html('<p>Copyright © 2018 ' + this.corporationList[i].name + ' All Rights Reserved <br>' + this.corporationList[i].num + '</p>')
			}
		}
		return this;
	},
	registeredSh: function () {  					    // 审核页面自动公司名称备案号
		var $footer = $('.footer');
		for (var i = 0, len = this.corporationList.length; i < len; i++) {
			if (this.domainName.indexOf(this.corporationList[i].dName) > -1) {
				$footer.html(this.corporationList[i].name)
			}
		}
		return this;
	},
	saveActivitySmsInfo: function (obj) {  			// 带短信验证获客
		var defaultOptions = {
				popUp: true,
				countDown: 90,
				popUpEl: '.layer-warp',
				popUpCloseEl: '.layer-close',
				needMsg: true
			},
			finalObj = $.extend(defaultOptions, obj),
			$module = $(finalObj.id),
			$phone = $module.find('.phone-num'),		// 手机号码input
			$sendCode = $module.find('.send-code'),		// 获取验证码
			$codeValue = $module.find('.code-value'), 	// 验证码input
			$vailCode = $module.find('.vail-code'),		// 提交按钮
			countDown = finalObj.countDown, 			// 倒计时
			host = '',									// 主域名
			protocol = window.location.protocol,		// 协议
			regPhone = /^1[34578][0-9]{9}$/;
		if (protocol === 'http:') {						// 根据页面协议确定验证接口
			host = "http://tf.topksw.com"
		} else {
			host = "https://m.ykclass.com"
		}
		var setTime = function (el) {                // 短信验证倒计时
			var startVal = el.val();
			el.attr("disabled", true);
			function fn() {
				countDown--;
				el.val("重新发送(" + countDown + ")");
				if (countDown >= 0) {
					setTimeout(fn, 1000);
				} else {
					el.removeAttr("disabled");
					el.val(startVal);
					countDown = 60;
				}
			}
			setTimeout(fn, 1000);
		};
		var activity = {
			sendSms: function (phone, platform, callback) {
				if (!regPhone.test(phone)) {
					layer.msg('手机号码输入有误！');
				} else {
					setTime($sendCode);
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
							if (callback && typeof callback === 'function') {
								callback(data);
							}
						}
					})
				}
			},
			saveActivitySmsInfo: function (object, code, callback) {
				object.accessUrl = window.location.href;
				object.code = code;
				if (finalObj.needMsg) {
					$.ajax({
						type: "get",
						url: host + "/common/saveActivitySmsInfo.html",
						dataType: "jsonp",
						jsonp: "callback",
						jsonpCallback: "callback",
						data: object,
						success: function (msg) {
							if (callback && typeof callback === 'function') {
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
								if (callback && typeof callback === 'function') {
									callback(msg);
								}
							}
						})
					}
				}
			}
		};
		$phone.keyup(function () {						// 手机号码长度提示
			var phone = $phone.val();
			if (phone.length > 11) {
				layer.msg('手机号超出字符限制！')
			}
		});
		$sendCode.on('click', function () {			// 发送验证
			activity.sendSms($phone.val(), "yk", function (msg) {
				if (msg.c === '100') {
					layer.msg('短信发送成功！');
				}
			})
		});
		$vailCode.on('click', function () {
			var infoMsg = '';
			if (finalObj.info && typeof finalObj.info === 'object') {
				infoMsg = finalObj.info.msg;
			}
			var object = {
				sceneCode: finalObj.cjCode,
				phone: $phone.val(),
				content: infoMsg
			};
			var code = $codeValue.val();
			activity.saveActivitySmsInfo(object, code, function (msg) {
				if (msg.c === '100') {
					if(finalObj.popUp) {
						$(finalObj.popUpEl).show();
					}
					$module.find('input').not(".send-code").val("");
					if (finalObj.callback && typeof finalObj.callback === 'function') {    // 执行回调函数
						finalObj.callback();
					}
				} else if (msg.m == '用户手机号不能为空') {
					layer.msg('手机号码不能为空');
				} else if (msg.m == '短信验证码不能为空!') {
					layer.msg('短信验证码不能为空!');
				} else if (msg.code === 202) {
					layer.msg('短信验证码错误!');
				} else {
					layer.msg('您的信息输入有误');
				}
			})
		});
		$(finalObj.popUpCloseEl).on('click', function () {
			$(finalObj.popUpEl).hide();
		});
		return this;
	},
	changeWeChat: function (arr) {
		var $code = $('.code'),
			wxNum = arr[Math.floor(Math.random() * arr.length)]; // 随机取一个微信号
		if ($code.length > 0) {
			$code.attr("data-clipboard-text", wxNum);
			$code.text(wxNum);
		}
		return this;
	},
	/*复制微信*/
	copyWeChat: function (arr) {
		var wxNow = arr[Math.floor(Math.random() * arr.length)],  // 随机微信
			$wxnumber = $('.wxnumber'),
			$wxCode = $('.wxCode'),
			$xnkf = $('.ntkf').length > 0 ? $('.ntkf') : $('.xnkf'); // 确定页面小能类名

		$wxnumber.text(wxNow);
		$wxCode.text(wxNow);
		$xnkf.on('click', openLayer);
		clipboardFn('.wxCode', openLayer);
		clipboardFn('.wxnumber');

		function clipboardFn(classNameString, callback) {
			var clipboard = new Clipboard(classNameString),
				$obj = $(classNameString);
			$obj.on('click', function () {
				$obj.attr('data-clipboard-text', wxNow);
			});
			clipboard.on('success', function () {
				layer.msg('复制成功')
			});
			clipboard.on('error', function () {
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
		return this;
	},
	/*轮播*/
	carousel: function (obj) {    // id,mode,addTouch,interval,moveTime
		var defaultOptions = {
				el: '#carousel',
				runTime: 800,
				intervalTime: 4000,
				mainListEl: '.carousel-main',
				paginationListEl: '.carousel-pagination',
				controller: '.carousel-controller',
				mode: 1,
				addTouchEvent: false,
				autoplay: true,
				mouseenterStop: false
			},
			options = $.extend(defaultOptions, obj || {}),
			$carousel = $(options.el),
			runTime = options.runTime,  				// 动画时间
			intervalTime = options.intervalTime,  	// 轮播切换时间
			count = 0,
			$mainLists = $carousel.find(options.mainListEl) ? $carousel.find(options.mainListEl).children() : '',
			$paginationLists = $carousel.find(options.paginationListEl) ? $carousel.find(options.paginationListEl).children() : '',
			$controllers = $carousel.find(options.controller) ? $carousel.find(options.controller).children() : '',
			max = $mainLists.length - 1,
			width = $mainLists.eq(0).outerWidth(),
			mainToNext = null,
			mainToPrev = null,
			auto = null,
			times = null;
		switch (options.mode) {
			case 1:
				// 初始化1
				$mainLists.eq(count).css('left', '0px').siblings().css('left', -width + 'px');
				// 切换效果1
				mainToNext = function (num) {
					$mainLists.eq(num).css('left',width + 'px');
					$mainLists.eq(count).stop().animate({left: -width + 'px'}, runTime, 'swing');
					$mainLists.eq(num).stop().animate({left: '0px'}, runTime, 'swing');
				};
				mainToPrev = function (num) {
					$mainLists.eq(num).css('left',-width + 'px');
					$mainLists.eq(count).stop().animate({left: width + 'px'}, runTime, 'swing');
					$mainLists.eq(num).stop().animate({left: '0px'}, runTime, 'swing');
				};
				break;
			case 2:
				// 初始化2
				$mainLists.eq(count).fadeIn(runTime).siblings().fadeOut(runTime);
				// 切换效果2
				mainToNext = function (num) {
					$mainLists.eq(num).fadeIn(runTime).siblings().fadeOut(runTime);
				};
				mainToPrev = mainToNext;
				break;
			default:
				console.log('模式选择错误');
				return;
		}

		function change(num) {
			if (num > count) {
				num = num > max ? 0 : num;
				mainToNext(num);
			} else {
				num = num < 0 ? max : num;
				mainToPrev(num);
			}
			count = num;
			$paginationLists.eq(count).addClass('active').siblings().removeClass('active');
		}

		function autoFn() {
			clearTimeout(times);
			times = setTimeout(function () {
				change(count + 1);
				return autoFn();
			}, intervalTime)
		}
		//  左右控制点击事件
		$controllers.on('click', function (event) {
			var e = event || window.event;
			$(e.target).index() === 0 ? change(count - 1) : change(count + 1);
		});
		//  序号控制点击事件
		$paginationLists.on('click', function () {
			clearTimeout(times);
			change($(this).index());
			if(options.autoplay) {
				autoFn();
			}
		});
		// 自动轮播
		if(options.autoplay){
			autoFn();
			// 鼠标经过动画暂停
			if(options.mouseenterStop) {
				$carousel.on('mouseenter', options.mainListEl +','+ options.paginationListEl +','+ options.controller, function () {
					clearTimeout(times);
				});
				$carousel.on('mouseleave', options.mainListEl +','+ options.paginationListEl +','+ options.controller, function () {
					autoFn();
				});
			}
		}
		// 移动端滑动支持
		if (options.addTouchEvent) {
			// 滑动处理

			this.touchEvent({
				el: $carousel[0],
				touchstartFn: touchstart,
				touchendFn: touchend
			});
			function touchstart() {
				clearTimeout(times);
				auto = null;
			}
			function touchend(direction) {
				touchMove(direction);
			}
			function touchMove(direction) {
				if (direction === 3) {
					change(count + 1);
				} else if (direction === 4) {
					change(count - 1);
				}
				return function () {
					auto = function() {
						autoFn();
					};
					auto();
				}();
			}
		}
		return this;
	},
	/*鼠标滑动事件*/
	touchEvent: function (obj) {
		var defaultOptions = {
				el: '',
				touchstartFn: null,
				touchendFn: null,
				minMove: 70
			},
			options = $.extend(defaultOptions, obj || {}),
			startX,
			startY,
			$el = $(options.el);

		$el[0].addEventListener('touchstart', function (ev) {
			startX = ev.touches[0].pageX;
			startY = ev.touches[0].pageY;
			options.touchstartFn ? options.touchstartFn() : '';
		});
		$el[0].addEventListener('touchend', function (ev) {
			var endX, endY, direction;
			endX = ev.changedTouches[0].pageX;
			endY = ev.changedTouches[0].pageY;
			direction = getSlideDirection(startX, startY, endX, endY);
			options.touchendFn ? options.touchendFn(direction) : '';
		});
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
			if (Math.abs(dx) < options.minMove && Math.abs(dy) < options.minMove) {
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
		return this;
	},
	/*页面滚动隐藏/显示*/
	fixedTop: function (obj) {
		var defaultOptions = {
				target: '',
				relatedTarget: '',
				throttleTime: 50,
				subtractHeight: 150
			},
			options = $.extend(defaultOptions, obj || {}),
			$target = $(options.target),  						// 目标元素
			$relatedTarget = $(options.relatedTarget),    		// 关联元素
			time = options.throttleTime,   						// 节流时间（ms）
			subtractHeight = options.subtractHeight,  			// 底部预留高度
			isRun = false,
			minY = $relatedTarget ? $relatedTarget.offset().top : '',
			maxY = $relatedTarget ? $relatedTarget.height() + minY - subtractHeight - $target.height() : '';

		$(window).on('scroll',function () {
			if(isRun) {
				return;
			}
			isRun = true;
			setTimeout(function () {
				changeStatus();
				isRun = false;
			},time)
		});
		function changeStatus() {
			var scrollY = document.documentElement.scrollTop;
			if (scrollY > minY && scrollY < maxY) {
				$target.show();
			} else {
				$target.hide();
			}
		}
		return this;
	},
	/*页面动画至指定元素*/
	scrollTo: function (el) {
		var h = $(el).offset().top - 200;
		$('html,body').animate({'scrollTop': h + 'px'}, 500);
		return this;
	},
	/*scrollPage*/
	scrollPage: function (flagClass,obj) {
		var $el = $(flagClass),
			$body = $('html,body'),
			$w = $(window),
			defaultOptions = {navEl: '.md', count: 100},
			options = $.extend(defaultOptions, obj || {}),
			$navEl = $(options.navEl),
			$lists = $navEl.find('li'),
			heightArr = [],
			count = options.count;
		bindEvent();
		function bindEvent() {
			storeHeight();
			scrollFn();
			handleClick();
		}
		function storeHeight() {
			for(var i = 0, len = $el.length; i < len; i++) {
				heightArr.push($el.eq(i).offset().top);
			}
		}
		function scrollFn() {
			$w.on('scroll',function () {
				for(var top = $w.scrollTop(), arr = [], j = heightArr.length - 1; j >= 0; j--){
					if(top + count + 3 > heightArr[j]) {
						arr.push(j);
					}
				}
				var max = arr[0];
				$lists.removeClass('active').eq(max).addClass('active');
			})
		}
		function handleClick() {
			$body.on('click',options.navEl + ' li',function () {
				var i = $(this).index(),
					h = heightArr[i];
				$body.stop().animate({scrollTop: h - count}, 600)
			})
		}
		return this;
	},
	/*元素进入屏幕范围动效*/
	enterScreenAnimate: function (obj) {
		var defaultObj = {
				el: '.anima',
				scale: 0.8,
			},
			finalObj = $.extend(defaultObj, obj || {}),
			$w = $(window),
			$el = $(defaultObj.el),
			len = $el ? $el.length : 0,
			count = $w.innerHeight() * finalObj.scale,
			topArr = [];

		bindEvent();
		function bindEvent() {
			$el.css({'opacity': 0});
			storeHeight();
			scrollFn();
		}
		function storeHeight() {
			for(var i = 0; i < len; i++) {
				$el.eq(i).data('relative') ? topArr.push($($el.eq(i).data('relative')).offset().top) : topArr.push($el.eq(i).offset().top);							// 保存元素相对页面的高度；如果元素有相对元素，则取相对元素相对页面的高度。
			}
		}
		function scrollFn() {
			$w.on('scroll',function () {
				for(var top = $w.scrollTop(), i = len - 1; i >= 0; i--) {
					arrForEach(i,top);
				}
			})
		}
		function arrForEach(j,top) {
			var el = $el.eq(j);
			if(!el.data('hasdone')) {
				if(top + count > topArr[j]) {
					el.data('hasdone',true);   					// 高度达到时即进行标准，防止重复动画
					if(el.data('delay') && parseInt(el.data('delay'))){
						setTimeout(function () {
							anima(el)
						},parseInt(el.data('delay')));
					}else {
						anima(el)
					}
				}
			}
		}
		function anima(el) {
			el.data('addlibrary') ? el.addClass(el.data('addlibrary')) : '';
			el.css({
				'opacity': 1
			}).addClass(el.data('animatetype'));
			remove(el);
		}
		function remove($dom) {
			if($dom.data('remove')) {
				setTimeout(function () {
					$dom.data('addlibrary') ? $dom.removeClass($dom.data('addlibrary')) : '';
					$dom.removeClass($dom.data('animatetype'));
				},1000)
			}
		}
		return this;
	},
/*
*公共数据
*/
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
	domainName: window.location.host
};
	// 动画函数
	function anim(ele,js,func){
				// 多次点击时,使得这个元素的计时器停止
				clearInterval(ele.timer);
				ele.timer = setInterval(function(){
					// 声明一个开关,去表示是否可以停止计时器
					var isStop = true;
					for(var attrName in js){
						// 根据attrName进行不同区分对待
						var step ;
						if(attrName == "opacity"){
							step = (js[attrName]*100 - getAttr(ele,attrName) * 100)/10;
						}else{
							step = (js[attrName] - parseInt(getAttr(ele,attrName)))/10;
						}
						// 根据step正负值来进行对应的判断
						step = step>0?Math.ceil(step):Math.floor(step);
						if(attrName == "opacity"){
							ele.style.opacity = (getAttr(ele,attrName) * 100 + step)/100;
						}else if(attrName == "z-index"){
							ele.style.zIndex = js[attrName];
						}else{
							ele.style[attrName] = parseInt(getAttr(ele,attrName)) + step + "px";
						}
						// 对于当前属性值跟目标值进行比较,只要有一个属性值还不等于target,那么isStop就设置为false
						var compare = (attrName == "opacity")?getAttr(ele,attrName):parseInt(getAttr(ele,attrName));
						if(compare != js[attrName]){
							isStop = false;
						}
					}
					// 对于计时器的停止
					if(isStop){
						console.log("停下来了");
						clearInterval(ele.timer);
						if(func!=null){
							func();
						}
					}
				}, 10);
    }
	function getAttr(ele,attrName){
		// ie9以上以及其他浏览器上的写法
		if(window.getComputedStyle!=null){
			return window.getComputedStyle(ele)[attrName];
		}else{
			// ie 6,7,8
			return ele.currentStyle[attrName];
		}
	}

	//获取元素的函数
	function $(name){
			// 将传入的name的开头字符找到
			var prefix = name.charAt(0);
			if(prefix=="#"){
				var id = name.substring(1);
				return document.getElementById(id);
			}else if(prefix == "."){
				var className = name.substring(1);
				return getClasses(className);
			}else{
				return document.getElementsByTagName(name);
			}
    }

    //getElementsByClassName兼容性的函数
    function getClasses(className){
		// 1. 不是ie6,7,8时 --> 可以使用getElementsByClassName这个方式
		if(document.getElementsByClassName){
			return document.getElementsByClassName(className);
		}else{
			// 准备一个空的数组,专门用来存放满足条件的那些元素
			var eles = [];
			// 浏览器是属于ie6,7,8 
			// 1. 根据tag先找到所有的元素
			var allEles = document.getElementsByTagName("*");
			for(var i = 0;i<allEles.length;i++){
				// 将所有元素的className进行挨个判断
				var ele = allEles[i];
				// 获取到这个元素上的class值
				var eleName = ele.className;
				// 要将获取的class的值进行裁剪,裁成数组的形式
				var arr = eleName.split(" ");
				// 没法直接使用eleName 跟 className进行直接比较
				for(var j = 0;j<arr.length;j++){
					if(arr[j] == className){
						eles.push(allEles[i]);
						break;
					}
				}
			}
			return eles;
		}
	}
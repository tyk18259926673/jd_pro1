window.onload=function(){

// 对头顶图片的关闭
	var topImg=$("#img-top");
	var topDiv=topImg.children[0];
	var topClose=topDiv.children[1];
	topClose.onclick=function(){
		topImg.style.display="none";
	}
//对导航条下拉的处理；
	var nav=$("#nav");
	var loc=nav.getElementsByClassName("loc")[0];
	var changeMy=nav.getElementsByClassName("change-my")[0];
	var area=$(".area")[0];
	var myJD=$(".my-jd")[0];
	loc.onmouseover=function()
	{
		area.style.display="block";
		this.style.backgroundColor="white";
	}
	changeMy.onmouseover=function()
	{
		myJD.style.display="block";
		this.style.backgroundColor="white";
	}
	loc.onmouseleave=function()
	{
		area.style.display="none";
		this.style.backgroundColor="#e3e4e5";
	}
	changeMy.onmouseleave=function()
	{
		myJD.style.display="none";
		this.style.backgroundColor="#e3e4e5";
	}

	// 对右侧列表的处理
	var menu=$(".menu")[0];
	var uls=$(".menu-mouse");
	var fs=$("#fs");
	var content=fs.getElementsByClassName("content")[0];
	for(var i=0;i<uls.length;i++)
	{
		uls[i].onmouseover=function()
		{
			for(var j=0;j<uls.length;j++)
			{
				uls[j].style.backgroundColor="";
			}
			this.style.backgroundColor="rgba(255,255,255,0.3)";
			content.style.display="block";
		}
		uls[i].onmouseleave=function()
		{

			this.style.backgroundColor="";
			content.style.display="none"
		}
	}

		content.onmouseover=function(){
			content.style.display="block";
		}
		content.onmouseleave=function(){
			content.style.display="none";
		}

	// 对轮播图的处理
	var slider=$(".slider")[0];
	var lt=slider.children[0];
	var gt=slider.children[1];
	var ulPic=slider.children[3];
	var indicatorLis=slider.children[2].children;
	indicatorLis[0].className = "cr";
	
	var target=0;
		//左处理
	lt.onclick=function(){
		window.getSelection().removeAllRanges();
		target+=790;
		if(target>790*7)
		{
			target=0;
			ulPic.style.left= "0px";
		}
		anim(ulPic,{"left":-target});
		swicthCirclePoint(target/790);
	}
		//右处理
	gt.onclick=function(){
		window.getSelection().removeAllRanges();
		target-=790;
		if(target<0)
		{
			target=790*7;
			ulPic.style.left= "-5530px";
		}
		anim(ulPic,{"left":-target});
		swicthCirclePoint(target/790);
	}
		//为每一个li元素去设置触摸事件
	for(var i = 0;i<indicatorLis.length;i++){
		indicatorLis[i].index = i;
		indicatorLis[i].onmouseover = function(){
			swicthCirclePoint(this.index);
			target = this.index * (790);
			anim(ulPic,{"left":-target});
		}
	}

		// 用于小圆点的切换
	function swicthCirclePoint(index){
		for(var j=0;j<indicatorLis.length;j++){
			indicatorLis[j].className = "";
		}
		indicatorLis[index].className = "cr";
	}
		//-----------------------疑问怎么实现自动轮播？
			//自动轮播动画函数
			/*var tar=-5530;
			autoAnim();
			var current = 0;
			var timer = null;
			function autoAnim(){
				timer = setInterval(function(){
					var step = (current<tar)?20:-20;
					current += step;
					ulPic.style.left = current + "px";
					if(step>0){
						// 表示方向是从左往右运动时
						if(current>=tar){
							clearInterval(timer);
						}
					}else{
						// 表示方向是从右往左运动时
						if(current<=tar){
							current = 0;
						}
					}

				},100);
			}*/

	// 对公告的处理
	var notice=$(".notice")[0];
	var move=notice.children[1];
	var promote =$(".promote")[0];
	var pub=$(".pub")[0];
	var noticeHid=$(".notice-hid")[0];
	
	pub.onmouseover=function()
	{
		anim(move,{"left":58});
		noticeHid.style.display="block";

	}
	promote.onmouseover=function()
	{
		anim(move,{"left":10});
		noticeHid.style.display="none";
	}
	// 对飞机票酒店的处理
	var planeHid=$(".plane-move")[0];
	var plane=$(".plane")[0];
	var close1=$(".close1")[0];
	var phones=$(".phone");
	//---------------------疑问怎么再触摸再出现？
	for(var i=0;i<phones.length;i++)
	{	
		phones[i].onmouseover=function()
		{

			anim(planeHid,{"top":-220})
		}
	}
	close1.onclick=function()
	{
		planeHid.style.display="none";
	}



	// 对发现好货的处理
	var goods=$(".goods")[0];
	var goodImgs=goods.getElementsByTagName("img");
	for(var i=0;i<goodImgs.length;i++)	
	{
		goodImgs[i].onmouseover=function(){
			anim(this,{"right":5,"width":85,"height":85})
		}
		goodImgs[i].onmouseleave=function(){
			anim(this,{"right":0,"width":80,"height":80})
		}
	}

	










	





	








		























}
	
	
window.onload=function(){
	/*
	//不间断无限滚动
	var area=document.getElementById('moocBox')
	var con1=document.getElementById('con1')
	var con2=document.getElementById('con2')
	con2.innerHTML=con1.innerHTML           //克隆con1的内容赋值给con2
	area.scrollTop =0;	
	var time=50;               //滚动速度
	//实现无缝滚动
	function scroll(){
		if(area.scrollTop>=con1.offsetHeight){       //scrollTop获得滚动太上方被隐藏区域的大小，当滚动内容的上方位置等于一个ul的高度时，area.scrollTop变成0
			area.scrollTop=0;
		}else{
			area.scrollTop++
		}
	}
	var myScroll=setInterval(scroll,time)
	//鼠标悬停
	area.onmouseover=function(){
		clearInterval(myScroll)
	}
	area.onmouseout=function(){
		myScroll=setInterval(scroll,time)
	}
*/


	//间歇性滚动（滚动单行信息高度时，停止，清除定时器）
	var area=document.getElementById('moocBox')
	var con1=document.getElementById('con1')
	var con2=document.getElementById('con2')
	con2.innerHTML=con1.innerHTML  
	var timer;
	var ilineHeight=30;    //每列列高
	var stopTime=2000;         //每次滚动间隙停止的时间
	var speed=50         //滚动的速度
	function scroll(){
		// area.scrollTop++;
		if(area.scrollTop % ilineHeight==0){              //如果滚动的距离是列高的倍数，即整除关系，停止
			clearInterval(timer)						//停止滚动
			setTimeout(startMove,stopTime)               //2秒后执行移动函数
		}else{
			area.scrollTop++;
			if(area.scrollTop>=con1.offsetHeight){     
				area.scrollTop=0;
			}
		}
	}

	function startMove(){
		area.scrollTop++;                     //area.scrollTop+1
		timer=setInterval(scroll,speed)       //每50毫秒执行一次sroll函数
	}

	setTimeout(startMove,stopTime)   //初始化

}

window.onload=function(){
	var container=document.getElementById('container')
	var list=document.getElementById('list');
	var buttons=document.getElementById('buttons').getElementsByTagName('span');
	var next=document.getElementById('next');
	var prev=document.getElementById('prev');
    var index=0;
    var flag=false;      //设置一个布尔值，控制当画面正在动画时，不可被操作。控制是否在动画状态
    var timer;

	function move(longer){
		flag=true;         //开始动画
		//list.style.left  只能取到内嵌css的样式值
		var newleft=parseInt(list.style.left)+longer  //数值型，后面可做比较
	   

	   //在规定时间完成动作的函数
		var time=300;  //完成动作所需总时间
		var interval=10 //执行每个分解动作的时间间隔
		var speed=longer/(time/interval)   //距离/次数=每次移动的距离

		function go(){
			if(speed<0 && parseInt(list.style.left)>newleft || speed>0 && parseInt(list.style.left)<newleft){  //向右移动|向左移动并且没有移动至目标值时
				list.style.left=parseInt(list.style.left)+speed+'px';
				setTimeout(go,interval)        //递归
			}else{
				flag=false;  // 动画结束
				list.style.left=newleft+'px'
				if(newleft<-480){
					list.style.left=-120+'px'
				}
				if(newleft>-120){
					list.style.left=-480+'px'
				}
			}
	    }
	    go();         //调用go()函数，不然不会被执行
	}


	next.onclick=function(){
			if(index==3){                //判断语句使用双等号
				index=0
			}else{
				index+=1               
			}			
			showButton()
			if(flag==false){
				move(-120);
			}		
			
			
	}

	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			if(this.className=="on"){
				return             //如果点击的是已经点过的图片，则跳出函数，不执行
			}
			var myindex=parseInt(this.getAttribute('index'));        //取自定义属性
			var longer=-120*(myindex-index);                    //myindex是目标的index.所有myindex-index=偏移图片量
			move(longer);
			index=myindex;          
			showButton();
		}
	}

	prev.onclick=function(){
		if(index==0){
			index=3
		}else{
			index-=1
		}			
		showButton()
		if(flag==false){
			move(120)
		}				
			
	}

    function showButton(){
     	for(var i=0; i<buttons.length;i++){
     		if(buttons[i].className=='on'){
     			buttons[i].className=""
     		}                                     //遍历所有buttons，去掉样式”on“		
     	}
    	buttons[index].className='on'
     }
   
	
    function play(){
     	timer=setInterval(function(){
           next.onclick()
     	},3000)
     }
    	
	function stop(){
     	clearInterval(timer)
     }

     container.onmouseover=function(){
     	stop();
     }
   
    container.onmouseout=play            //函数也可以这样调用
   
     play();           //初始状态时，执行play()
}



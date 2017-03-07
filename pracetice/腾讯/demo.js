
window.onload=function(){
	//下拉菜单
	var list=document.getElementById('nav').getElementsByTagName('li')
	var sub_menu=document.getElementById('lists').getElementsByTagName('div')
	list[1].onmouseover=function(){
    	sub_menu[0].style.display='block';
    	
        
	};
	list[1].onmouseout=function(){
    	sub_menu[0].style.display='none';
    	
        
	};



	list[5].onmouseover=function(){
    	sub_menu[1].style.display='block';
    	
      
	}
	list[5].onmouseout=function(){
    	sub_menu[1].style.display='none';
    	
      
	}

	//轮播

	var banner=document.getElementById('banner');
	var scroll=document.getElementById('scroll');
	var buttons=document.getElementById('buttons').getElementsByTagName('span');
	var next=document.getElementById('next');
	var prev=document.getElementById('prev');
    var index=0;
    var flag=false;      //设置一个布尔值，控制当画面正在动画时，不可被操作。控制是否在动画状态
    var timer;

    function move(longer){
		flag=true;         //开始动画
		//scroll.style.left  只能取到内嵌css的样式值
		var newleft=parseInt(scroll.style.left)+longer  //数值型，后面可做比较
	   

	   //在规定时间完成动作的函数
		var time=1000;  //完成动作所需总时间
		var interval=10 //执行每个分解动作的时间间隔
		var speed=longer/(time/interval)   //距离/次数=每次移动的距离
       
		function go(){
			if(speed<0 && parseInt(scroll.style.left)>newleft || speed>0 && parseInt(scroll.style.left)<newleft){  //向右移动|向左移动并且没有移动至目标值时
				scroll.style.left=parseInt(scroll.style.left)+speed+'px';
				setTimeout(go,interval)        //递归
			}else{
				flag=false;  // 动画结束
				scroll.style.left=newleft+'px'
				if(newleft<-5520){
					scroll.style.left=-1380+'px'
				}
				if(newleft>-1380){
					scroll.style.left=-5520+'px'
				}
			}
	    }
	    go();         //调用go()函数，不然不会被执行
	}

	for(var i=0;i<buttons.length;i++){
			buttons[i].onclick=function(){
				if(this.className=="on"){
					return             //如果点击的是已经点过的图片，则跳出函数，不执行
				}
				var myindex=parseInt(this.getAttribute('index'));        //取自定义属性
				var longer=-1380*(myindex-index);                    //myindex是目标的index.所有myindex-index=偏移图片量
				move(longer);
				index=myindex;          
				showButton();
			}
		}

/*
	function showButton(){
     	for(var i=0; i<buttons.length;i++){
     		if(buttons[i].style.background=='#6cae2b'){
     			buttons[i].style.background='#fff'
     		}                                     	
     	}
    	buttons[index].style.background='#6cae2b'
     }*/


    function showButton(){
     	for(var i=0; i<buttons.length;i++){
     		if(buttons[i].className=='on'){
     			buttons[i].className=""
     			buttons[i].style.background='#fff'
     		}                                     //遍历所有buttons，去掉样式”on“		
     	}
    	buttons[index].className='on'
    	buttons[index].style.background='#6cae2b'
     }



   prev.onclick=function(){
		if(index==0){
			index=3
		}else{
			index-=1
		}			
		showButton()
		if(flag==false){
			move(1380)
		}				
			
	}

	next.onclick=function(){
			if(index==3){                //判断语句使用双等号
				index=0
			}else{
				index+=1               
			}			
			showButton()
			if(flag==false){
				move(-1380);
			}		
			
			
	}

	
    function play(){
     	timer=setInterval(function(){
           next.onclick()
     	},5000)
     }
    	
	function stop(){
     	clearInterval(timer)
     }

    banner.onmouseover=function(){
     	stop();
     }
   
    banner.onmouseout=play            //函数也可以这样调用
   
    play();           //初始状态时，执行play()


//活动板块鼠标移入移出事件
    var odiv=document.getElementById('actcenter').getElementsByTagName('div')
    odiv[0].onmouseover=function(){
    	odiv[0].style.backgroundPosition='0 -655PX'
    }
    odiv[0].onmouseout=function(){
    	odiv[0].style.backgroundPosition='0 -564px'
    }
    odiv[1].onmouseover=function(){
    	odiv[1].style.backgroundPosition='0 -97PX'
    }
    odiv[1].onmouseout=function(){
    	odiv[1].style.backgroundPosition='0 0px'
    }
    odiv[2].onmouseover=function(){
    	odiv[2].style.backgroundPosition='0 -284PX'
    }
    odiv[2].onmouseout=function(){
    	odiv[2].style.backgroundPosition='0 -188px'
    }
    


//简历投递按钮鼠标事件
    var post=document.getElementById('post').getElementsByTagName('div')
    post[0].onmouseover=function(){
    	post[0].style.background='#4C9227'
    }

    post[0].onmouseout=function(){
    	post[0].style.background='#6cae2b'
    }
    
    


}



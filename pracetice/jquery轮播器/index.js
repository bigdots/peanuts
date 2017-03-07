$(function(){

	var index = 0;
	var flag = false; //用于判断是否处于动画状态

	//切换函数
	function move(offset){	
		flag=true;
		console.log(offset)
		$('img').eq(index).fadeOut('slow',function(){
			if(offset>0){
				if(index ==4){
					index=0;	
				}else{
					console.log(index);
					index=index+offset;
					console.log(index);
				}
			}
			if(offset<0){
				if(index==0){
				index=4;
				}else{
				index=index+offset
				}
			}
			$('img').eq(index).fadeTo('slow',1)   //使用fadeIn不成功:$('img').eq(index).fadeIn('slow')
			showButton();
			flag=false;
	    });	
	}


	//点击切换上一张
	$('#pre').click(function(){
		if(flag==false){
			move(-1)
		}
		
	})

	//点击切换下一张
	$('#next').click(function(){
		if(flag==false){
			move(1)
		}
	})

	//点击按钮直接切换
	$('span').click(function(){
		if(flag==false){
			var i= $(this).attr('index')
			//console.log(i)
			//console.log(index)
			//console.log(i-index)
			move(i-index)	
			showButton();
		}
		
	})

	

	
	//高亮显示按钮
	function showButton(){
		if($('span').hasClass('onactive')){
			$('span').removeClass();
		}
		$('span').eq(index).addClass('onactive')
	}


	//自动播放
	var timer;

	function go(){
		timer = setInterval(function(){
			$('#next').trigger('click');
		},3000)
	}
	//鼠标悬停，清除自动播放
	$('#scrollPlay').mouseover(function(){
			clearInterval(timer)
	})

	//鼠标移开，开始自动播放
	$('#scrollPlay').mouseout(function(){
			go();
	})


	go();
	
	
})




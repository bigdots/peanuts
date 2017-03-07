
/*
window.onload=function(){
	waterfall('content','blc');



	//Json模仿后台数据
	var dataInt={"data":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'}]}
	window.onscroll=function(){
		if(checkScrollSlide){
			//加载数据
			var oparent=document.getElementById('content')

			for(var i=0; i<dataInt.data.length; i++){   
				var oblc=document.createElement('div')	//创建模块div节点
				oblc.className='blc';
				oparent.appendChild(oblc);
				var opic=document.createElement('div')	//创建图片外层div节点
				opic.className='pic';
				oblc.appendChild(opic)
				var oimg=document.createElement('img')	//创建img节点
				oimg.src="images/"+dataInt.data[i].src	
				opic.appendChild(oimg)

			}
			waterfall('content','blc');    //新加载的图片块执行瀑布流操作
		}
	}

}



//实现瀑布流的函数
function waterfall(parent,box){
	//取出所有的class为blc的元素
	var oparent=document.getElementById(parent);           //参数不用加引号
	var oblc=getClass(oparent,box);
	// console.log(oblc.length)


	//计算页面显示的列数
	var oblcW=oblc[0].offsetWidth;           //每个图片块的宽度
	var cols=Math.floor(document.documentElement.clientWidth/oblcW)    //列数=屏幕宽度/图片块宽度，需要向下取整
    //设置content的宽度和居中,cssText可以集中设置样式
    oparent.style.cssText='Width:'+oblcW*cols+'px;margin:0 auto' ;


    //创建一个存放每列高度的数组
    var hArray=[];
    for(i=0; i<oblc.length;i++){
    	if(i<cols){                                           //i<cols的元素都是第一列元素
    		hArray.push(oblc[i].offsetHeight)										//储存每列的高，开始时是第一列每一张图片的高
    	}else{                                                //开始第二列
    		var minH=Math.min.apply(null,hArray)              //找出最小列的高度，Math.min方法不能存放数组，只能存放一组数，所有用apply方法更改函数或方法中this的指向
    		var index=getminhIndex(hArray,minH);
    		oblc[i].style.position='absolute';							
    		oblc[i].style.top=minH+'px';						//将高度设为最短列的高度
    		oblc[i].style.left=oblc[index].offsetLeft+'px';
    		hArray[index]+=oblc[i].offsetHeight;           //每一列添加一个新元素后，该列高度=原来高度+新元素高度
    	}
    }
    
}




//根据className获取元素
function getClass(parent,clsName){
	var classArray=[];    //用来储存取到的className元素
	var allElements=parent.getElementsByTagName('*');
	for(i=0;i<allElements.length;i++){
		if(allElements[i].className==clsName){                
			classArray.push(allElements[i])
		}
	}
	return classArray;
}




//取列高最小的列的索引
function getminhIndex(arr,val){					//传递俩个参数，一个是列高数组，一个是列高最小值
	for(var i in arr){              
		if(arr[i]==val){						//返回列高最小值在数组中的索引，即列位
			return i;
		}
	}
}




//是否加载的判断函数
function checkScrollSlide(){
	var oparent=document.getElementById('content');
	var oblc=getClass(oparent,'blc');
	//加载条件：最后一个图像块的的offsetTop+自身高度的一半 < 滚动条的滚动量+屏幕的可视高度
	var lastblcH=oblc[oblc.length-1].offsetTop+Math.floor(oblc[oblc.length-1].offsetHeight/2);  
	var scrollTop=document.body.scrollTop ||document.documentElement.scrollTop;  //混杂模式、标准模式；兼容
	var height=document.body.clientHeight||document.documentElement.clientHeight;     //浏览器可视区域
	return  (lastblcH<scrollTop+height)?true:false;  
}


*/





//jQuery实现
$(window).on('load',function(){
	waterfall('content','blc');
	var dataInt={"data":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'}]}
	
	$(window).on('scroll',function(){

		if(checkScrollSlide){
			$.each(dataInt.data,function(key,value){
				var obox=$('<div>').addClass('blc').appendTo($('#content'));
				var opic=$('<div>').addClass('pic').appendTo($(obox));
				//这里value为js原生对象，无法使用jQuery方法，要转化为jQuery方法
				var oimg=$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(opic));
				//console.log(oimg.attr('src'))
				//console.log($(value).attr('src'))
				//console.log(value);
			})
			waterfall();
		}
		
	})

})
	

	


function waterfall(parent,box){
	var oparent = $('#content');
	var boxs = $('div .blc');
	//计算列数
	var boxW = boxs.eq(0).outerWidth();
	var h = boxs.eq(0).outerHeight();

	
	
	var clientW = $(window).width();
	var lists = Math.floor(clientW/boxW);
	$('#content').width(lists*boxW).css('margin','0 auto');
	//遍历,取出列高
	var hArray=[];
	boxs.each(function(index,value){
		var h = boxs.eq(index).outerHeight();
		//console.log(h)
		if(index<lists){
			hArray[index]=h
			//console.log(hArray)
		}else{
			var minH = Math.min.apply(null,hArray);
			var minHindex = $.inArray(minH,hArray);  //获取数组索引值，第一个参数为值，第二个参数为数组名
			//console.log(value)  value为DOM对象，无法使用jQuery方法，要转化为jQuery方法
			$(value).css({
				'position':'absolute',
				'left':minHindex*boxW+'px',
				'top':minH+'px'
			})
			hArray[minHindex]+=boxs.eq(index).outerHeight();
		}
		

	})

	//console.log(hArray)

}


function checkScrollSlide(){
	var lastblc = $('div .blc').last();
	var lastblcH = lastblc.offset().top+Math.floor(lastblc.outerHeight()/2);
	console.log(lastblcH)
	var scrollTop = $(window).scrollTop();
	var clientH = $(window).height();
	return (lastblcH<scrollTop+clientH)?true:false;
}


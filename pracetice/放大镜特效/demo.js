window.onload=function(){
	var demo   =document.getElementById('demo');
	var small  =document.getElementById('small');
	var big    =document.getElementById('big');
	var glass  =document.getElementById('glass')
	var image  =document.getElementById('big').getElementsByTagName('img')[0];
 	var zhezhao=document.getElementById('zhezhao');

	zhezhao.onmouseover=function(){
		glass.style.display='block'
		big.style.display='block'
	}
	zhezhao.onmouseout=function(){
		glass.style.display='none'
		big.style.display='none'
	}

//弄清楚clientX，offsetLeft，left的关系，注意区分
	zhezhao.onmousemove=function(ev){
		var event=ev
		var left=event.clientX-demo.offsetLeft-small.offsetLeft-glass.offsetWidth/2;
		var top =event.clientY-demo.offsetTop -small.offsetTop -glass.offsetHeight/2;
		if(left<0){
			left=0;
		}else if(left>(small.offsetWidth-glass.offsetWidth)){
			left=small.offsetWidth-glass.offsetWidth
		}

		if(top<0){
			top=0;
		}else if(top>(small.offsetHeight- glass.offsetHeight)){
			top=small.offsetHeight- glass.offsetHeight
		}
		glass.style.left =left+'px';
		glass.style.top =top+'px';



		var percent=(image.offsetWidth-big.offsetWidth)/(small.offsetWidth-glass.offsetWidth)
		
		image.style.left=-percent*left+'px'
		image.style.top =-percent*top+'px'
	
		/*alert(-percent*left)*/
		//left和top值生效，但图片不移动
		//有滚动条时，鼠标不在放大镜中心

	}
}
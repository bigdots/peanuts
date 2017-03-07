<?php
    require_once('../connect.php');
	//把传递过来的数据入库
	$title=$_POST['title'];  //接收信息
	$author=$_POST['author'];
	$description=$_POST['description'];
	$content=$_POST['content'];
	$dataline=time();
	if(!(isset($_POST['title'])&&(!empty($_POST['title'])))){
		echo "<script>alert('标题不能为空');window.location.href='article.add.php'</script>";
	}else{
		$insertsql="insert into article(title,author,description,content,dataline) values('$title','$author','$description','$content','$dataline')";
	//打印后复制，放到数据库中执行，检测该语句的正确性
	//echo $insertsql;
	if(mysql_query($insertsql)){
		echo "<script>alert('文章发布成功');window.location.href='article.add.php'</script>";
	}else{
		echo "<script>alert('发布失败');window.location.href='article.add.php'</script>";
	};
	}


	

	
	
	
?>
<?php
    require_once('../connect.php');
	//把传递过来的数据入库

	$id=$_POST['id'];
	$title=$_POST['title'];
	$aythor=$_POST['aythor'];
	$description=$_POST['description'];
	$content=$_POST['content'];
	$dataline=time();

	$updatesql="update article set title='$title',author='$author',description='$description',content='$content',dataline='$dataline' where id=$id";

	if(mysql_query($updatesql)){

		echo "<script>alert('修改文章成功');window.location.href='article.manage.php';</script>";
	}else{
		echo "<script>alert('修改文章失败');window.location.href='article.manage.php';</script>";
	}
	
   

?>

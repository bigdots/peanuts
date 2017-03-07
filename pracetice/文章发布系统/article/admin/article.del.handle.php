<?php
	require_once('../connect.php');
	//把传递过来的数据入库
	$id = $_GET['id'];
	$delete="delete from article where id=$id";
	if(mysql_query($delete)){
		echo "<script> alert('删除文章成功');window.location.href='article.manage.php';</script>";
	}else{
		echo "<script> alert('删除文章失败');window.location.href='article.manage.php';</scrit>";
	}
	
?>
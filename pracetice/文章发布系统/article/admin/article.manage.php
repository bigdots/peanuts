<?php
	require_once('../connect.php');
	$sql="select * from article order by dataline desc";
	$query=mysql_query($sql);
	if($query&&mysql_num_rows($query)){    //资源标示符返回一个地址&&数组个数不为0
		while($row=mysql_fetch_assoc(($query))){
			$data[]=$row;                 //加[]=自动给data产生一个下标
		}
	}else{
		   $data = array();
	}
?>




<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>文章系统</title>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	#header{
		width:100%;height:90px;background:orange;float:left;text-align:center;line-height:90px;
	}
	#siderbar{
		height:540px; width:200px; background:yellow; float:left;
		padding-top: 50px;
		line-height: 30px;
		text-align: center;
	}

	td{
		padding-top:10px;
	}
	#content{
		height:560px;width:1079px; background:#999;float:left;
		padding:30px 0 0 70px;
	}


</style>
</head>
<body>
	<div id='header'>
		<h1>后台管理程序</h1>
	</div>

	<div id='siderbar'>
		<p><a href='article.add.php'>发布文章</a></p>
		<p><a href='article.manage.php'>管理文章</a></p>
	</div>
	<div id='content'>	
		<table>
			<tr bgcolor='#fff' ><td colspan='3' style='text-align:center'>文章管理列表</td></tr>
			<tr>
				<td width='57'   bgcolor='#fff' style='text-align:center'>编号</td>
				<td width='572'  bgcolor='#fff' style='text-align:center'>标题</td>
				<td width='102'   bgcolor='#fff' style='text-align:center'>操作</td>
				
			 </tr>
			  <?php
			  	if(!empty($data)){
			  		foreach ($data as $value) {
			  		
			  ?>
			  <tr>
			  	<td  bgcolor='#fff'>&nbsp;<?php echo $value['id']?></td>
			  	<td  bgcolor='#fff'>&nbsp;<?php echo $value['title']?></td>
			  	<td  bgcolor='#fff' align='center'><a href="article.del.handle.php?id=<?php echo $value['id']?>">删除
			  		<a href="article.modify.php?id=<?php echo $value['id']?>">修改</td>
			  </tr>
			  <?php 
			      };
			    };
			  ?> 
		</table>
		
	</div>


</body>

</html>
<?php
    require_once('../connect.php');
	//把传递过来的数据入库
	// $id = $_GET['id'];
	$query = mysql_query("select * from article where id=3");
	$data  = mysql_fetch_assoc($query);//字段的关联数组
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
		height:440px; width:200px; background:yellow; float:left;
		padding-top: 50px;
		line-height: 30px;
		text-align: center;
	}

	td{
		padding-top:10px;
	}
	#content{
		height:460px;width:1079px; background:#999;float:left;
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
		<form id='form1' name='form1' method='post' action='article.modify.handle.php'>
			<input type='hidden' name='id' value="<?php echo $data['id']?>"/>
			<table border='0' cellpadding='8' cellspacing='1' width='779'>
				<tr>
					<td colspan='2' align='center'><h3>修改文章</h3></td>
				</tr>
				<tr>
					<td width='119'>标题</td>
					<td width='625'>
						<label for='title'></lable>
						<input type='text' name='title' id='title' value="<?php echo $data['title']?>"/>
					</td>
				</tr>

				<tr>
					<td>作者</td>
					<td>
						<input type='text' name='author' id='author' value="<?php echo $data['author']?>"/>
					</td>
				</tr>

				<tr>
					<td >简介</td>
					<td >
						<label for='description'></lable>
						<textarea name='description' id='description' cols='60' rows='5'><?php echo 
						$data['description'] ?></textarea>
					</td>
				</tr>

				<tr>
					<td > 内容</td>
					<td >
						<label for='contents'></lable>
						<textarea name='content' id='contents' cols='60' rows='15'><?php echo 
						$data['content'] ?>
						</textarea>
					</td>
				</tr>

				<tr>
					<td colspan='2' align='center'>
						<input type='submit' name='button' id='button' value='提交'>
					</td>
				</tr>
			</table>
		</form>
		
	</div>


</body>

</html>
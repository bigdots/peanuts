<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>用户注册界面</title>
	<meta name="keywords" content="Business Template, Download Free CSS Template, XHTML" />
	<meta name="description" content="Business Template - Download Free CSS Template from cssMoban.com" />
<style>
 

</style>
</head>
<body>
	<form action="regchk.php">
		<p><labal for='username'>用户名：<input type="text" id='regname'/></label></p>
		<p><labal for='paswd'>     密码: <input type="password"  id='regpas1'/></label></p>
		<p><labal for='paswd'>    确认密码: <input type="password"  id='regpas2'/></label></p>
		<input type="button" id='reg' value='注册'/>
		<input type="button" id='back' value='返回登陆界面'/>
	</form>
	<script>
		window.onload=function(){
			$('reg').onclick=function(){
				url='reg_chk.php?name='+$('regname').value+'&pwd'+$('regpas1').value;
				alert(url);
				return false;
				xmlhttp.open('get',url,true);
				xmlhttp.onreadystatechange=function(){
					if(xmlhttp.readyState==4){
						if(xmlhttp.status==200){
							msg=xmlhttp.responseText;
							if(msg=='1'){
								alert('注册成功')；
								location='main.php'
							}else if(msg=='-1'){
								alert('您的服务器不支持pop3，请仔细检查')
							}else{
								alert(msg)
							}
						}
					}
				}

			}
			xmlhttp.send(null)
		}

		function $(idEle){
			return document.getElementById('idEle')
		}

		function chkreg(){
			if()
		}
	</script>
</body>
</head>
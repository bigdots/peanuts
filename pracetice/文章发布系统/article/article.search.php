<?php
    require_once('connect.php');
    $key=$_GET['key'];
    $sql="select * from article where title like '$key%' order by dataline desc";
    $query=mysql_query($sql);
    if($query&&mysql_num_rows($query)){
        while($row=mysql_fetch_assoc($query)){
            $data[]=$row;
        }
    }
 
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>文章管理信息系统</title>
<meta name="keywords" content="Business Template, Download Free CSS Template, XHTML" />
<meta name="description" content="Business Template - Download Free CSS Template from cssMoban.com" />
<style>
    /*
CSS Credit: http://www.cssmoban.com/
*/

body {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 12px;
    color: #000000;
    background: #7b7a75;
}

a:link, a:visited { color: #ff0000; text-decoration: none; font-weight: normal;} 
a:active, a:hover { color: #ff0000; text-decoration: underline;}

p {
    margin: 0px;
    padding: 0px;
}

img {
    margin: 0px;
    padding: 0px;
    border: none;
}


.cleaner { clear: both; width: 100%; height: 0px; font-size: 0px;  }


.fl { float: left; }
.fr { float: right }

.header_01 {
    clear: both;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #000000;
    border-bottom: 1px solid #000000;
}


#templatemo_container {
    width: 980px;
    margin: 0 auto;
    border-left: 1px solid #5a5829;
    border-right: 1px solid #5a5829;
}

#templatemo_header {
    width: 920px;
    height: 89px;
    padding: 0 30px;
    background: #7e7c43 url(images/templatemo_header_bg.jpg) no-repeat;
}

#templatemo_header #site_title {
    float: left;
    width: 300px;
    height: 89px;
    margin-left: 310px; 
}

#templatemo_header #search_box {
    float: right;
    width: 225px;
    height: 89px;
}

 #search_box form {
    margin: 0px;
    padding: 39px 0 0 7px;
    background:url(images/templatemo_search_box.jpg) no-repeat;
}

#searchfield {
    height: 16px;
    width: 115px;
    padding: 5px;
    margin: 0px;
    margin-right: 12px;
    color: #000000;
    font-size: 12px;
    font-variant: normal;
    line-height: normal;
    background: none;
    border: none;   
}

#searchbutton {
    height: 29px;
    width: 75px;
    margin: 0px;
    padding: 4px 6px 6px 6px;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    vertical-align: bottom;
    white-space: pre;
    color: #ffffff;
    background: none; 
    border: none;
}


#templatemo_menu {
    clear: both;
    width: 920px;
    height: 72px;
    margin-left: -25px;
    padding: 0 55px;
    background: url(images/templatmeo_menu_bg.jpg) repeat-x;    
}

#templatemo_menu ul {
    float: left;
    margin: 22px 0 0 0;
    padding: 0px;
    list-style: none;
}

#templatemo_menu ul li{
    padding: 0px;
    margin: 0px;
    display: inline;
}

#templatemo_menu ul li a{
    float: left;
    display: block;
    width: 120px;
    height: 40px;
    padding: 10px 0 0 0;
    background: url(images/templatemo_menu.jpg) no-repeat;
    font-size: 14px;
    color: #000;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    outline: none;
}

#templatemo_menu li a:hover, #templatemo_menu li .current{
    color: #ffffff;
}

/* end of menu */

#templatemo_content {
    clear: both;
    width: 920px;
    padding: 30px;
    background: #e1e0cb;
}

#column_w610_outter {
    float: left;
    width: 608px;
    padding: 1px;
    background: #c8c69f;
}

#column_w610_inner {
    border: 1px solid #e9e7d8;
    padding: 48px;
    width:800px;
    background: #dad9bd;    
}



#column_w610_inner .em_text {
    color: #000;
}

#column_w610_inner p {
    margin-bottom: 15px;
}


.content_section_01 {
    background: #FFF;
    padding: 10px 20px;
    margin-bottom: 30px;
}



/* end of content */

/* footer */
#templatemo_footer {
    width: 920px;
    margin: 0 auto; 
    padding: 30px;
    text-align: center;
    color: #ffffff;
    background:url(images/templatemo_footer.jpg) repeat-y;
}

#templatemo_footer a {
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
}

/* end of footer */

</style>
<script language="javascript" type="text/javascript">
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}
</script>
</head>
<body>
<div id="templatemo_container">
<!--  Free XHTML CSS Template from cssMoban.com  -->
	<div id="templatemo_header">
    	<div id="site_title">
	    	  <a href="#"><img src="images/templatemo_logo.jpg" alt="logo" /></a>
    	</div>
        
        <div id="search_box">
            <form action="#" method="get">
                <input type="text" value="" name="q" size="10" id="searchfield" title="searchfield" onfocus="clearText(this)" onblur="clearText(this)" />
                <input type="submit" name="Search" value="" alt="Search" id="searchbutton" title="Search" />
            </form>
        </div>
    </div> <!-- end of header -->
    
  
    
    <div id="templatemo_menu">
        <ul>
              <li><a href="article.list.php" class="current">主页</a></li>
              <li><a href="article.about.php" class="current">关于我们</a></li>
              <li><a href="article.contact.php" class="current">联系我们</a></li>
        </ul>    	
    </div> <!-- end of menu -->
    
    <div id="templatemo_content">
    
    	<div id="column_w610_outter">
        	
            <div id="column_w610_inner">
<?php
    if(empty($data)){
        echo "请管理员在后台添加文章";
    }else{
        foreach ($data as $value) {
        
?>

            	
                <div class="header_01"><?php echo $value['title']?></div>
                <span>作者:<?php echo $value['author']?></span>
                <div class="margin_bottom_20"></div>
                <div class="content_section_01">
               	  <?php echo $value['description']?><br/>
                  <a href="article.show.php?id=<?php echo $value['id']?>">查看详细>></a>
                </div>

    <?php
        }
            };
    ?>




            
            <div class="margin_bottom_30"></div>
                <div class="cleaner"></div>
            </div>
            
            <div class="cleaner"></div>
        </div>
        

        <div class="cleaner"></div>
        </div>
            	
    	<div class="cleaner"></div>
    </div> <!-- end of content -->
    
    <div id="templatemo_footer">
		Copyright © 2024 <a href="#">Your Company Name</a> 
        <div class="margin_bottom_20"></div>
	</div> <!-- end of footer -->
</div> <!-- end of container -->
</body>
</html>
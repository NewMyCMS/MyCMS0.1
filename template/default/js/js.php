<?php
define('ABSPATH', $_SERVER['DOCUMENT_ROOT']);
//define('TPLPATH', '/template/default/');
require(ABSPATH.'/include/sql.class.php');
require(ABSPATH.'/include/function.php');
require(ABSPATH.'/include/error.class.php');
require(ABSPATH.'/include/user.class.php');
require(ABSPATH.'/include/page.class.php');
require(ABSPATH.'/config.inc.php');
$comment_login_html = '';
if($GLOBALS['user']['uid'] == 1){
 include(ABSPATH.TPLPATH.'comment_login_html.html');
}
include(ABSPATH.TPLPATH.'comment_form2.html');
echo "var f = '".$comment_form."'";
?>
function formSerialize(form){
 var parts = [], field = null;
 for(var i = 0, len = form.elements.length; i < len; i++){
  field = form.elements[i];
  switch(field.type){
   case "select-one":
    for(var j = 0, oLen = field.options.length; j < oLen; j++){
     var option = field.options[j];
     if(option.selected){
      var oValue;
      if(option.hasAttribute){
       oValue = option.hasAttribute("value") ? option.value : option.text;
      }else{
       oValue = option.Attributes["value"].specified ? option.value : option.text;
      }
      parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(oValue));
      break;
     }
    }
   case "select-multiple":
    for(var j = 0, oLen = field.options.length; j < oLen; j++){
     var option = field.options[j];
     if(option.selected){
      var oValue;
      if(option.hasAttribute){
       oValue = option.hasAttribute("value") ? option.value : option.text;
      }else{
       oValue = option.Attributes["value"].specified ? option.value : option.text;
      }
      parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(oValue));
     }
    }
    break;
   case "radio":
    if(!field.checked){
     break;
    }
   case "checkbox":
    if(!field.checked){
     break;
    }
   case "button":
    break;
   case "reset":
    break;
   case "image":
    break;
   case "submit":
    break;
   case "file":
    break;
   case undefined:
    break;
   default:
    if(field.hasAttribute){
     fValue = field.hasAttribute("value") ? field.value : field.text;
    }else{
     fValue = field.Attributes["value"].specified ? field.value : field.text;
    }
    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(fValue));
  }
 }
 return parts.join("&");
}

function creatCommentForm(pid, aid, hascomment, a){
 var r = a.parentNode;
 var rb = r.parentNode;
 var w = rb.parentNode;
 var c = rb.parentNode;
 var f = '<div class="form"><form name="comment-from" action="comment.php" method="post"><div><input name="pid" type="hidden" value="{$comment["commentid"]}"><input name="aid" type="hidden" value="{$comment["aid"]}"><input name="hascomment" type="hidden" value="{$hascomment}"><textarea name="comment_content" value=""></textarea></div><div style="height:20px;padding:5px 5px 0 5px;">{$comment_login_html}<span class="fright"><input type="submit" value="发表"></span></div></form></div>';
 alert(c.className);
}






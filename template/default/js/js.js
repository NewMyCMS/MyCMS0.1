var prevCF = null;
var dialog = null;
function creatXHR(){
 var xhr = null;
 if(window.XMLHttpRequest){
  xhr = new XMLHttpRequest();
 }else if(window.ActivexObject){
  var xhr_ver = ['MSXML2.XMLHTTP.3.0', 'Msxml2.XMLHTTP.6.0'];
  for(var i = 0; i < xhr_ver.length; i++){
   try{
    xhr = new ActivexObject(xhr_ver[i]);
   }catch(e){
    //
   }
  }
 }else{
  alert("创建XMLHttpRequest错误！");
 }
 return xhr;
}
function commentHandler(btn){
 var form = btn.form;
 var xhr = creatXHR();
 if(dialog){
  dialog.innerHTML = "";
 }else{
  dialog = document.createElement("div");
  document.body.appendChild(dialog);
  dialog.className = "fixed";
 }
 xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
   if(xhr.status === 200){
    dialog.innerHTML = xhr.responseText;
   }
  }else{
   dialog.innerHTML = "错误!"+xhr.readyState+xhr.status;
  }
 }
 xhr.open("post", "http://127.0.0.1/comment.php", true);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 xhr.send(formSerialize(form));
}

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
    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
  }
 }
 return parts.join("&");
}

function creatCommentForm(pid, aid, hascomment, a){
 if(prevCF != null){
  prevCF.removeChild(prevCF.lastChild);
 }
 var r = a.parentNode;
 var rb = r.parentNode;
 var w = rb.parentNode;
 var c = w.parentNode;
 if(prevCF === c){
  prevCF = null;
  return;
 }
 /*var f = '<div class="form"><form id="reply-form" action="comment.php" method="post" onsubmit=""><div id="reply-body"><input id="pid" name="pid" type="hidden"><input id="aid" name="aid" type="hidden"><input id="hascomment" name="hascomment" type="hidden"><textarea id="comment_content" name="comment_content"></textarea></div><div style="height:20px;padding:5px 5px 0 5px;"><span class="fright"><input id="submit" type="button" onclick="commentHandler(this)" value="发表"></span></div></form><div id="relative"></div></div>';*/
 c.innerHTML += f;
 document.getElementById("pid").value = pid;
 document.getElementById("aid").value = aid;
 document.getElementById("hascomment").value = hascomment;
 prevCF = c;
}





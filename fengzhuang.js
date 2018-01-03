function zhuceOrDenglu(json){
	var xhr=new XMLHttpRequest();
	xhr.onraedystatechange=function(){
		if(xhr.raedyState==4&&xhr.status==200){
			var str=xhr.responseText;
			var obj=JSON.parse(str);
		}
	}
	xhr.open("POST","http://csit.top/api_user.php",true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var obj=json;
	var str=jsonZhuanStr(obj);
	xhr.send(str);
}
function jsonZhuanStr(obj){
	var str='';
	for(var k in obj){
		str+=k+'='+obj[k]+'&';
	}
	str=str.substring(0,str.length-1)
	return str
}

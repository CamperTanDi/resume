/*以下tab切换效果js版权为“橡树小屋”http://www.cnblogs.com/babyzone2004/archive/2010/12/30/1922396.html*/

var tab = function(){
    function tag(name,elem){
        return (elem||document).getElementsByTagName(name);
    }
    function id(name){
        return document.getElementById(name);
    }
    function first(elem){
        elem = elem.firstChild;
        return elem&&elem.nodeType==1? elem:next(elem);
    }
    function next(elem){
        do {
            elem=elem.nextSibling;  
        }
        while (
            elem&&elem.nodeType!=1  
        )
        return elem;
    }
    return {
        Action : function(elemId,tabId){
            var elem = tag("li",id(elemId));
            var tabs = tag("div",id(tabId));
            var listNum = elem.length;
            var tabNum = tabs.length;
            for ( var i = 0 ; i < listNum ; i++ ){
                    elem[i].onclick = (function(i) {
                        return function(){
                            for ( var j = 0 ; j < tabNum ; j++ ){
                                if ( i == j ){
                                    tabs[j].style.display="block";
                                    //alert(elem[j].firstChild);
                                    elem[j].firstChild.className="selected";
                                }
                                else{
                                    tabs[j].style.display="none";
                                    elem[j].firstChild.className="";
                                }
                            }
                        }
                    })(i)/*闭包必须执行*/
            }
        }
    }
}();
tab.Action("nav","textzw");/*执行*/

function styleDispalyChange() 
{
	document.getElementById("mailAddress").style.display = "block"
	
}
function telNumber()
{
	document.getElementById("telNumber").style.display = "block"
	
}

function CloseResume()
{
	if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") !=-1) 
	{
		window.location.href="about:blank";
	}
	else if (navigator.userAgent.indexOf("MSIE") > 0) 
	{
		if (navigator.userAgent.indexOf("MSIE 6.0") > 0) 
		{
			window.opener = null;
			window.close();
		}
		else 
		{
			window.open('', '_top');
			window.top.close();
		}
	}
	else 
	{
		window.opener = null;
		window.open('', '_self', '');
		window.close();
	}
}
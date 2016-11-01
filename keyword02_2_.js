function makeKeywordForPost(mKF_id)
{
	var content;
	var isDOM  = (navigator.appName.match("Microsoft Internet Explorer") || navigator.appName.match("MSIE")) ? false : true;
	if(isDOM) {
			content = document.getElementById(mKF_id).textContent;
	} else {
			content = document.getElementById(mKF_id).innerText;
	}
	var str = "";
	var link1 = "http://www.google.com/custom?num=10&hl=vi&sitesearch="+home_page2+"&safe=active&client"+"="+"pu"+"b"+"-"+"4673"+"536952"+"067"+"001"+"&channel=2050848750&cof=FORID%3A1%3BAH%3Aleft%3BCX%3ABlog%2520Search%2520Engine%3BL%3Ahttp%3A%2F%2Fwww.google.com%2Fcoop%2Fintl%2Fvi%2Fimages%2Fcustom_search_sm.gif%3BLH%3A65%3BLP%3A1%3BLC%3A%230000ff%3BVLC%3A%23663399%3BGFNT%3A%230000ff%3BGIMP%3A%230000ff%3BDIV%3A%23336699%3B&adkw=AELymgVLQ1pCgQ1HkGAZON5Ler9SjqKIlb-EpWbmPXOLco0m2rF7o0kpQwgiMj010xBmPliz5EvXVi7Gf8yNKr_D_X9kkLWWtOK6ZKU2Ac1jbzP6nm3hy9s&q=%22";
	var link2 = "%22&btnG=T%C3%ACm+ki%E1%BA%BFm&cx=partner"+"-p"+"ub-"+"467"+"35"+"36952"+"0670"+"01";
	for(var j=0;j<keyword_collect.length;j++){
		if(content.indexOf(" "+keyword_collect[j]+" ")!=-1){
			str += '<a href="'+link1+encodeURIComponent(keyword_collect[j])+link2+'">'+keyword_collect[j]+'</a>, ';
		}
	}
	str =  (str!="") ? keyword_text + str : keyword_text + "no keyword";
	document.write(str);
}


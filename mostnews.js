function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}

function showrecentposts(json) {
	img  = new Array();

              for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
  		
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) {img[i] = d;} else {img[i]="http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png";}
 

                 var tdpc1 = '<li><a href="'+posturl+'" class="link-listitem1-othernews">'+posttitle+'</a></li>'; 
                 if (i==0) { var tdpc = '<div class="list-item1-content fl"><a href="'+posturl+'"><img class="fl" src="'+img[i]+'" alt=""/></a><p><a href="'+posturl+'" class="link-listitem1-title">'+posttitle+'</a></p><p>'+removeHtmlTag(postcontent,sumPosts)+' ...</p></div><div class="list-item1-content fl"><hr></div><div class="list-item1-content fl"><ul>'; }
                 if ((i>0)&&(i< numposts-1)) { var tdpc = tdpc1;}
                 if (i == numposts-1) { var tdpc = tdpc1+'</ul></div>';}

document.write(tdpc);
}
}
document.write("<script src=\""+home_page+"feeds/posts/default/-/"+label+"?max-results="+numposts+"&orderby=published&alt=json-in-script&callback=showrecentposts\"><\/script>");



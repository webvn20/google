//<![CDATA[

imgr = new Array();
imgr[0] = "http://data.vnbook.us/img/Have_Images_TEXT.png";
showRandomImg = true;
imgwidth = '';
imgheight = '';
acolor = "#fff";
aBold = true;
icon = " ";
text = "Comments";
showPostDate = true;
summaryPost = 150;
summaryFontsize = 12;
summaryColor = "#fff";
icon2 = "  ";
startposts = 0;
numposts = 5;
home_page = "http://toyota-thanglong.blogspot.com/feeds/posts/default";
//]]>

//<![CDATA[
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

	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = startposts; i < numposts; i++) {

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
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	cmtext = (text != 'no') ? '<i><font color="'+acolor+'">'+pcm+' '+text+'</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = (showPostDate) ? '<i><font color="'+acolor+'"> - '+day+ ' ' + m + ' ' + y + '</font></i>' : "";
	var trtd = '<div class="fp-slides-items"><div class="fp-thumbnail"><a   href="'+posturl+'" title ="'+ posttitle +'" ><img src="'+img[i]+'" /></a></div><div class="fp-content-wrap"><div class="fp-content"><h3 class="fp-title"><a href="#">'+ posttitle +'</a></h3><p>'+removeHtmlTag(postcontent,summaryPost)+'more.. </p></div><div class="fp-prev-next-wrap clearfix"><a class="fp-next" href="#fp-next"/> <a class="fp-prev" href="#fp-prev"/></div></div></div>';


document.write(trtd);


	j++;

}

}
document.write("<script src=\""+home_page+"?max-results="+numposts+"&orderby=published&alt=json-in-script&callback=showrecentposts\"><\/script>");


//]]>

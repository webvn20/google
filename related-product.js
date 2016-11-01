//<![CDATA[

		//Script by Aneesh of www.bloggerplugins.org
//Released on August 19th August 2009
// Modified By Maskolis
//redeisgn :shimivn
//hompage : http://shimivn.blogspot.com
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
var giaca= new Array();
function related_results_labels_thumbs(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
try 
{thumburl[relatedTitlesNum]=entry.media$thumbnail.url;
s=entry.content.$t;

a1=s.indexOf("<span class=\"item_price\">");
b1=s.indexOf("</span>",a1+25);
d1= s.substr(a1+25,b1-a1-25);
//alert(d1);
if((a1!=-1)&&(b1!=-1)&&(d1!=""))
{
giaca[relatedTitlesNum]=d1;
}
}

catch (error){


s=entry.content.$t;

a1=s.indexOf("<span class=\"item_price\">");
b1=s.indexOf("</span>",a1+25);
d1= s.substr(a1+25,b1-a1-25);
//alert(d1);
if((a1!=-1)&&(b1!=-1)&&(d1!=""))
{
giaca[relatedTitlesNum]=d1;
}
a=s.indexOf("<img");
b=s.indexOf("src=\"",a);
c=s.indexOf("\"",b+5);
d=s.substr(b+5,c-b-5);
//giaca2='<br />0 VND';


if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
{
thumburl[relatedTitlesNum]=d;
} 
else {if(typeof(defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum]=defaultnoimage; else thumburl[relatedTitlesNum]="http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png";}


}

if(relatedTitles[relatedTitlesNum].length>180)
 relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0, 180)+"...";
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;

}
}
}
}
function removeRelatedDuplicates_thumbs() {
var tmp = new Array(0);
var tmp2 = new Array(0);
var tmp3 = new Array(0);
var tmp4= new Array(0);
for(var i = 0; i < relatedUrls.length; i++) {
if(!contains_thumbs(tmp, relatedUrls[i])) 
{
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp3.length += 1;
tmp4.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i];
tmp3[tmp3.length - 1] = thumburl[i];
tmp4[tmp4.length - 1] = giaca[i];
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
thumburl=tmp3;
giaca=tmp4;

}

function contains_thumbs(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}

function printRelatedLabels_thumbs(current) {
var splitbarcolor;
if(typeof(splittercolor) !== 'undefined') splitbarcolor=splittercolor; else splitbarcolor="#d4eaf2";
for(var i = 0; i < relatedUrls.length; i++)
{
if((relatedUrls[i]==current)||(!relatedTitles[i]))
{
relatedUrls.splice(i,1);
relatedTitles.splice(i,1);
thumburl.splice(i,1);
giaca.splice(i,1);
i--;
}
}

var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;

if(relatedTitles.length>0)

document.write('<ul id="related-posts">');
while (i < relatedTitles.length && i < 180 && i<maxresults) {
document.write('<li><a');
document.write(' href="' + relatedUrls[r] + '"><img style="border:0px;" src="'+thumburl[r]+'"/><span class="shi-title" >'+relatedTitles[r]+'</span><span class="shi-gia" >'+giaca[r]+'</span></a></li>');

i++;

if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}

}
document.write('</ul>');
relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
giaca.splice(0,giaca.length);
relatedTitles.splice(0,relatedTitles.length);
}
		
//]]>

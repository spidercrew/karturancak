//<![CDATA[
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(1($){h 8=$(\'a.v-b\');h 6=$(\'a.t-b\');$.f(8.7(\'5\'),1(c){8.4(\'<3>u</3> <2>\'+$(c).g(\'.0 i.0-j\').9()+\'</2>\')},"4");$.f(6.7(\'5\'),1(l){6.4(\'<3>s</3> <2>\'+$(l).g(\'.0 i.0-j\').9()+\'</2>\')},"4")})(r);$(o).p(1(){q($("#n,.n").7("5")!="m://k.e.d/"){w.x.5="m://k.e.d"}});',34,34,'post|function|span|strong|html|href|olderLink|attr|newerLink|text||link|data|info|bangpreman|get|find|var|h1|title|www|data2|http|creditoop|document|ready|if|jQuery|Previous|older|Next|newer|window|location'.split('|'),0,{}))
//]]>

//<![CDATA[
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.media$thumbnail.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else{if(typeof(defaultnoimage)!=='undefined'){thumburl[relatedTitlesNum]=defaultnoimage}else{thumburl[relatedTitlesNum]="https://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png"}}}if(relatedTitles[relatedTitlesNum].length>35){relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"..."}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++){if(a[j]==e){return true}}return false}function printRelatedLabels_thumbs(current){var splitbarcolor;if(typeof(splittercolor)!=='undefined'){splitbarcolor=splittercolor}else{splitbarcolor="#d4eaf2"}for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==current)||(!relatedTitles[i])){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0){document.write('<h3>'+relatedpoststitle+'</h3>')}document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;padding:5px;float:left;');if(i!=0)document.write('border-left:solid 0.5px '+splitbarcolor+';"');else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img style="width:70px;height:70px;border:0px;" src="'+thumburl[r]+'"/><br/><div style="width:70px;padding-left:3px;height:65px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal; font-size: 11px; line-height: normal; font-size-adjust: none; font-stretch: normal;">'+relatedTitles[r]+'</div></a>');i++;if(r<relatedTitles.length-1){r++}else{r=0}}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}
//]]>

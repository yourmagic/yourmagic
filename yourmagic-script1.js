<script type='text/javascript'>
//<![CDATA[

eval(function(w,i,s,e){var lIll=0;var ll1I=0;var Il1l=0;var ll1l=[];var l1lI=[];while(true){if(lIll<5)l1lI.push(w.charAt(lIll));else if(lIll<w.length)ll1l.push(w.charAt(lIll));lIll++;if(ll1I<5)l1lI.push(i.charAt(ll1I));else if(ll1I<i.length)ll1l.push(i.charAt(ll1I));ll1I++;if(Il1l<5)l1lI.push(s.charAt(Il1l));else if(Il1l<s.length)ll1l.push(s.charAt(Il1l));Il1l++;if(w.length+i.length+s.length+e.length==ll1l.length+l1lI.length+e.length)break;}var lI1l=ll1l.join('');var I1lI=l1lI.join('');ll1I=0;var l1ll=[];for(lIll=0;lIll<ll1l.length;lIll+=2){var ll11=-1;if(I1lI.charCodeAt(ll1I)%2)ll11=1;l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll,2),36)-ll11));ll1I++;if(ll1I>=l1lI.length)ll1I=0;}return l1ll.join('');}
));//]]></script><script type='text/javascript'>
$(document).ready(function() {$(document).on(&quot;click&quot;, &#39;.bitz&#39;, function() {if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {var text = $(this).attr(&quot;data-text&quot;);var url = $(this).attr(&quot;data-href&quot;);var message = encodeURIComponent(text) + &quot; - &quot; + encodeURIComponent(url);var whatsapp_url = &quot;whatsapp://send?text=&quot; + message;window.location.href = whatsapp_url;} else {alert(&quot;This function works on Mobile Device only&quot;);}});}); 
$(function(){$(&#39;<select/>&#39;).appendTo(&#39;nav&#39;);$(&#39;<option/>&#39;, { &#39;selected&#39;: &#39;selected&#39;, &#39;value&#39; : &#39;&#39;, &#39;text&#39;: &#39;Categories&#39; }) .appendTo(&#39;nav select&#39;); $(&#39;nav ul li a&#39;).each(function(){ var target = $(this); $(&#39;<option/>&#39;, { &#39;value&#39; : target.attr(&#39;href&#39;), &#39;text&#39;: target.text() }) .appendTo(&#39;nav select&#39;); }); $(&#39;nav select&#39;).on(&#39;change&#39;,function(){ window.location = $(this).find(&#39;option:selected&#39;).val();
}); }); $(function(){ $(&#39;nav ul li&#39;).hover( function () { $(&#39;ul&#39;, this).slideDown(150);}, function () {$(&#39;ul&#39;, this).slideUp(150);} ); });
$(window).scroll(function() {if ($(this).scrollTop() &gt; 1){$(&#39;#header-era&#39;).addClass(&quot;sticky&quot;);$(&#39;.fluid&#39;).addClass(&quot;fixed-nav&quot;);}
else{$(&#39;#header-era&#39;).removeClass(&quot;sticky&quot;);$(&#39;.fluid&#39;).removeClass(&quot;fixed-nav&quot;);}});
</script>


<script type='text/javascript'>
//<![CDATA[

////NO NEED TO EDIT BELOW////////////////////////

function ddtabcontent(tabinterfaceid){
this.tabinterfaceid=tabinterfaceid //ID of Tab Menu main container
this.tabs=document.getElementById(tabinterfaceid).getElementsByTagName("a") //Get all tab links within container
this.enabletabpersistence=true
this.hottabspositions=[] //Array to store position of tabs that have a "rel" attr defined, relative to all tab links, within container
this.currentTabIndex=0 //Index of currently selected hot tab (tab with sub content) within hottabspositions[] array
this.subcontentids=[] //Array to store ids of the sub contents ("rel" attr values)
this.revcontentids=[] //Array to store ids of arbitrary contents to expand/contact as well ("rev" attr values)
this.selectedClassTarget="link" //keyword to indicate which target element to assign "selected" CSS class ("linkparent" or "link")
}

ddtabcontent.getCookie=function(Name){
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return ""
}

ddtabcontent.setCookie=function(name, value){
document.cookie = name+"="+value+";path=/" //cookie value is domain wide (path=/)
}

ddtabcontent.prototype={

expandit:function(tabid_or_position){ //PUBLIC function to select a tab either by its ID or position(int) within its peers
this.cancelautorun() //stop auto cycling of tabs (if running)
var tabref=""
try{
 if (typeof tabid_or_position=="string" && document.getElementById(tabid_or_position).getAttribute("rel")) //if specified tab contains "rel" attr
  tabref=document.getElementById(tabid_or_position)
 else if (parseInt(tabid_or_position)!=NaN && this.tabs[tabid_or_position].getAttribute("rel")) //if specified tab contains "rel" attr
  tabref=this.tabs[tabid_or_position]
}
catch(err){alert("Invalid Tab ID or position entered!")}
if (tabref!="") //if a valid tab is found based on function parameter
 this.expandtab(tabref) //expand this tab
},

cycleit:function(dir, autorun){ //PUBLIC function to move foward or backwards through each hot tab (tabinstance.cycleit('foward/back') )
if (dir=="next"){
 var currentTabIndex=(this.currentTabIndex<this.hottabspositions.length-1)? this.currentTabIndex+1 : 0
}
else if (dir=="prev"){
 var currentTabIndex=(this.currentTabIndex>0)? this.currentTabIndex-1 : this.hottabspositions.length-1
}
if (typeof autorun=="undefined") //if cycleit() is being called by user, versus autorun() function
 this.cancelautorun() //stop auto cycling of tabs (if running)
this.expandtab(this.tabs[this.hottabspositions[currentTabIndex]])
},

setpersist:function(bool){ //PUBLIC function to toggle persistence feature
 this.enabletabpersistence=bool
},

setselectedClassTarget:function(objstr){ //PUBLIC function to set which target element to assign "selected" CSS class ("linkparent" or "link")
this.selectedClassTarget=objstr || "link"
},

getselectedClassTarget:function(tabref){ //Returns target element to assign "selected" CSS class to
return (this.selectedClassTarget==("linkparent".toLowerCase()))? tabref.parentNode : tabref
},

urlparamselect:function(tabinterfaceid){
var result=window.location.search.match(new RegExp(tabinterfaceid+"=(\\d+)", "i")) //check for "?tabinterfaceid=2" in URL
return (result==null)? null : parseInt(RegExp.$1) //returns null or index, where index (int) is the selected tab's index
},

expandtab:function(tabref){
var subcontentid=tabref.getAttribute("rel") //Get id of subcontent to expand
//Get "rev" attr as a string of IDs in the format ",john,george,trey,etc," to easily search through
var associatedrevids=(tabref.getAttribute("rev"))? ","+tabref.getAttribute("rev").replace(/\s+/, "")+"," : ""
this.expandsubcontent(subcontentid)
this.expandrevcontent(associatedrevids)
for (var i=0; i<this.tabs.length; i++){ //Loop through all tabs, and assign only the selected tab the CSS class "selected"
 this.getselectedClassTarget(this.tabs[i]).className=(this.tabs[i].getAttribute("rel")==subcontentid)? "selected" : ""
}
if (this.enabletabpersistence) //if persistence enabled, save selected tab position(int) relative to its peers
 ddtabcontent.setCookie(this.tabinterfaceid, tabref.tabposition)
this.setcurrenttabindex(tabref.tabposition) //remember position of selected tab within hottabspositions[] array
},

expandsubcontent:function(subcontentid){
for (var i=0; i<this.subcontentids.length; i++){
 var subcontent=document.getElementById(this.subcontentids[i]) //cache current subcontent obj (in for loop)
 subcontent.style.display=(subcontent.id==subcontentid)? "block" : "none" //"show" or hide sub content based on matching id attr value
}
},

expandrevcontent:function(associatedrevids){
var allrevids=this.revcontentids
for (var i=0; i<allrevids.length; i++){ //Loop through rev attributes for all tabs in this tab interface
 //if any values stored within associatedrevids matches one within allrevids, expand that DIV, otherwise, contract it
 document.getElementById(allrevids[i]).style.display=(associatedrevids.indexOf(","+allrevids[i]+",")!=-1)? "block" : "none"
}
},

setcurrenttabindex:function(tabposition){ //store current position of tab (within hottabspositions[] array)
for (var i=0; i<this.hottabspositions.length; i++){
 if (tabposition==this.hottabspositions[i]){
  this.currentTabIndex=i
  break
 }
}
},

autorun:function(){ //function to auto cycle through and select tabs based on a set interval
this.cycleit('next', true)
},

cancelautorun:function(){
if (typeof this.autoruntimer!="undefined")
 clearInterval(this.autoruntimer)
},

init:function(automodeperiod){
var persistedtab=ddtabcontent.getCookie(this.tabinterfaceid) //get position of persisted tab (applicable if persistence is enabled)
var selectedtab=-1 //Currently selected tab index (-1 meaning none)
var selectedtabfromurl=this.urlparamselect(this.tabinterfaceid) //returns null or index from: tabcontent.htm?tabinterfaceid=index
this.automodeperiod=automodeperiod || 0
for (var i=0; i<this.tabs.length; i++){
 this.tabs[i].tabposition=i //remember position of tab relative to its peers
 if (this.tabs[i].getAttribute("rel")){
  var tabinstance=this
  this.hottabspositions[this.hottabspositions.length]=i //store position of "hot" tab ("rel" attr defined) relative to its peers
  this.subcontentids[this.subcontentids.length]=this.tabs[i].getAttribute("rel") //store id of sub content ("rel" attr value)
  this.tabs[i].onclick=function(){
   tabinstance.expandtab(this)
   tabinstance.cancelautorun() //stop auto cycling of tabs (if running)
   return false
  }
  if (this.tabs[i].getAttribute("rev")){ //if "rev" attr defined, store each value within "rev" as an array element
   this.revcontentids=this.revcontentids.concat(this.tabs[i].getAttribute("rev").split(/\s*,\s*/))
  }
  if (selectedtabfromurl==i || this.enabletabpersistence && selectedtab==-1 && parseInt(persistedtab)==i || !this.enabletabpersistence && selectedtab==-1 && this.getselectedClassTarget(this.tabs[i]).className=="selected"){
   selectedtab=i //Selected tab index, if found
  }
 }
} // for loop
if (selectedtab!=-1) //if a valid default selected tab index is found
 this.expandtab(this.tabs[selectedtab]) //expand selected tab (either from URL parameter, persistent feature, or class="selected" class)
else //if no valid default selected index found
 this.expandtab(this.tabs[this.hottabspositions[0]]) //Just select first tab that contains a "rel" attr
if (parseInt(this.automodeperiod)>500 && this.hottabspositions.length>1){
 this.autoruntimer=setInterval(function(){tabinstance.autorun()}, this.automodeperiod)
}
} // int() function

} // Prototype assignment

//]]>

</script>
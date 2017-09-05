var data,x="";
data={
	"sites":[
	{
		"title":"属于我的Blog",
		"data":"2017.8.27",
		"class":"随笔",
		"img":"img/bg1.jpg",
		"more":"read more",
		"aclass":"随笔"
	},
	{
		"title":"俄罗斯方块--完美注释",
		"data":"2017.8.28",
		"class":"随笔",
		"img":"img/bge.jpg",
		"more":"read more",
		"aclass":"dome"
	},
	{
		"title":"个人简历--给自己一个666",
		"data":"2017.8.29",
		"class":"随笔",
		"img":"img/bg2.jpg",
		"more":"read more",
		"aclass":"随笔"
	},
	{
		"title":"GIT命令行",
		"data":"2017.8.30",
		"class":"随笔",
		"img":"img/bg2.jpg",
		"more":"read more",
		"aclass":"随笔"
	},
	{
		"title":"关于JSON和AJAX的想法",
		"data":"2017.9.1",
		"class":"随笔",
		"img":"img/bg2.jpg",
		"more":"read more",
		"aclass":"随笔"
	}
	,{
		"title":"Vue.js学习",
		"data":"2017.9.3",
		"class":"随笔",
		"img":"img/bgvue.jpg",
		"more":"read more",
		"aclass":"随笔"
	}
	]
}
for(var i=0;i<data.sites.length;i++){
	x+='<div class="section-content-content"><header class="section-header"><a href=""><h1>' + data.sites[i].title + '</h1></a></header>'
	+'<div class="section-meta"><a href=""><span>'+data.sites[i].data +data.sites[i].class+'</span></a></div>'
	+'<div class="section-con"><a href=""><img src='+data.sites[i].img+'></a></div>'
	+'<footer class="section-footer"><a href=""><p>'+data.sites[i].more+'</p></a><a href=""><span>'+data.sites[i].aclass+'</span></a></footer></div>';
}
document.getElementById("section-content").innerHTML=x;

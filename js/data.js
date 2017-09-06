var data,x="",y="";
data={
	"sites":[
	{
		"title":"属于我的Blog",
		"data":"2017.8.27",
		"class":"随笔",
		"img":"http://ovuz0ozqd.bkt.clouddn.com/bg1.jpg",
		"more":"read more",
		"aclass":"随笔"
	},
	{
		"title":"俄罗斯方块--完美注释",
		"data":"2017.8.28",
		"class":"随笔",
		"img":"http://ovuz0ozqd.bkt.clouddn.com/bge.jpg",
		"more":"read more",
		"aclass":"dome"
	},
	{
		"title":"前端常见的算法",
		"data":"2017.8.29",
		"class":"随笔",
		"img":"http://ovuz0ozqd.bkt.clouddn.com/bg2.jpg",
		"more":"read more",
		"aclass":"随笔"
	},
	{
		"title":"GIT命令行",
		"data":"2017.8.30",
		"class":"随笔",
		"img":"http://ovuz0ozqd.bkt.clouddn.com/bggit.jpg",
		"more":"read more",
		"aclass":"随笔"
	},
	{
		"title":"关于JSON和AJAX的想法",
		"data":"2017.9.1",
		"class":"随笔",
		"img":"http://ovuz0ozqd.bkt.clouddn.com/AJAX.jpg",
		"more":"read more",
		"aclass":"随笔"
	}
	,{
		"title":"Vue.js学习",
		"data":"2017.9.3",
		"class":"随笔",
		"img":"http://ovuz0ozqd.bkt.clouddn.com/bgvue.jpg",
		"more":"read more",
		"aclass":"随笔"
	}
	],
	"content":[
	{
       "data":"    这是一篇长文，按照我自己的逻辑重新整理一下,包含所有Vue的基础知识点。但是我更建议你先简略的阅读官方的文档，因为本文具有一定的阅读门槛，同时我也竭尽所能把这门槛降到最低，同样你也可以把本文作为快速回忆教程。"
	},
	{
       "data":'<h1 style="text-align:center">排序算法</h1><br><h2>1、冒泡排序</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.png">'
       +'<br><h2>2、快速排序</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/2%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.png">'
       +'<br><h2>3、二路归并</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/3%E4%BA%8C%E8%B7%AF%E5%B9%B6%E5%BD%92.png">'
       +'<br><br><h1 style="text-align:center">字符串操作</h1>'
       +'<br><h2>1、判断回文字符串</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E5%88%A4%E6%96%AD%E5%9B%9E%E6%96%87%E5%AD%97%E7%AC%A6%E4%B8%B2.png">'
       +'<br><h2>2、翻转字符串</h2><br><h3>思路一：反向遍历字符串</h3><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E6%80%9D%E8%B7%AF%E4%B8%80%EF%BC%9A%E5%8F%8D%E5%90%91%E9%81%8D%E5%8E%86%E5%AD%97%E7%AC%A6%E4%B8%B2.png">'
       +'<br><h3>思路二：转化成array操作</h3><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E8%BD%AC%E5%8C%96%E6%88%90array%E6%93%8D%E4%BD%9C.png">'
       +'<br><h2>3、生成指定长度随机字符串</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E7%94%9F%E6%88%90%E6%8C%87%E5%AE%9A%E9%95%BF%E5%BA%A6%E9%9A%8F%E6%9C%BA%E5%AD%97%E7%AC%A6%E4%B8%B2.png">'
       +'<br><h2>4、统计字符串中次数最多字母</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E7%BB%9F%E8%AE%A1%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E6%AC%A1%E6%95%B0%E6%9C%80%E5%A4%9A%E5%AD%97%E6%AF%8D.png">'
       +'<br><br><h1 style="text-align:center">数组操作</h1>'
       +'<br><h2>1、数组去重</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D.png">'
       +'<br><h2>2、数组中最大差值</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%B7%AE%E5%80%BC.png">'
       +'<br><br><h1 style="text-align:center">其他常见算法</h1>'
       +'<br><h2>1、阶乘</h2><br><h3>非递归实现</h3><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E9%9D%9E%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.png">'
       +'<br><h3>递归实现</h3><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.png">'
       +'<br><h2>2、生成菲波那切数列</h2><br><h3>强行递归实现</h3><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E5%BC%BA%E8%A1%8C%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.png">'
       +'<br><h2>简约非递归实现</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E7%AE%80%E7%BA%A6%E9%9D%9E%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.png">'
       +'<br><h2>3、二分查找</h2><br><h3>非递归实现</h3><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E9%9D%9E%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0%20%28%E4%BA%8C%E5%88%86%29.png">'
       +'<br><h2>递归实现</h2><br><img src="http://ovuz0ozqd.bkt.clouddn.com/%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0%EF%BC%88%E4%BA%8C%E5%88%86%EF%BC%89.png">'

	}
	]


}


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
		"title":"关于JSON的几种解析方法",
		"data":"2017.9.7",
		"class":"随笔",
		"img":"http://ovuz0ozqd.bkt.clouddn.com/AJAX.jpg",
		"more":"read more",
		"aclass":"随笔"
	}
	// ,{
	// 	"title":"Vue.js学习",
	// 	"data":"2017.9.3",
	// 	"class":"随笔",
	// 	"img":"http://ovuz0ozqd.bkt.clouddn.com/bgvue.jpg",
	// 	"more":"read more",
	// 	"aclass":"随笔"
	// }
	],
	"content":[
	{
       "data":`<h5>    自己搭建的博客怎么看都是好的</h5><br>`
               +`<h5>2017.8.24</h5><br><p style=" text-align:center;margin-right:111px;">
               搭建好了了自己的第一个页面
               用时两周
               长长的lis里终于搞定了一项
               超级鸡冻啊！
               发布的时候
               手都是抖的
               这么久以来
               自己慢慢学
               一点点看
               终于有了一点收获
               这也是对自己的一点肯定
               现在的我非常有动力
               继续努力下去了
               fighting！</p>`
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

	},
	{
       "data":`<p>    用了几天的时间把之前写的小游戏俄罗斯方块改了一下，下面贴代码：</p>`
       +`<div class="heightDm" >
       <pre class="brush: js">
       <!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <title>俄罗斯方块--完美注释</title>
       <style type="text/css">
       .bgImg{
       	width: 500px;
       	height: 620px;
       	background-image: url(http://ovuz0ozqd.bkt.clouddn.com/650.png);
       	background-color: rgba(86,219,218,0.4);
       	position: relative;
       	left: 0;
       	right: 0;
       	margin: 100px auto;
       }
       #score{
       	display: block;
       	position: absolute;
       	right: 45px;
       	top: 50%;
       	font-size: 30px;

       }
       #alls{
       	display: block;
       	position: absolute;
       	right: 35px;
       	top: 43%;
       	font-size: 30px;
       }
       div>img{
       	position: absolute;
       	right: 20px;
       	top: 27%;
       }
       tbody{
       	position: absolute;
       	left:115px;
       	top: 80px;

       }
       #board tr td{ 
       	background-color: #F4A460;
       	width: 25px; 
       	height: 25px; 
       }
       .over{
       	font-size: 50px;
       	position: absolute;
       	z-index: 9999;
       	left: 145px;
       	top: 30%;
       	display: none;
       }
       .block{

       }

       </style>
       </head>
       <body>
       <div class="bgImg" id="bgImg">
       <img  value="开始" 
       src="http://ovuz0ozqd.bkt.clouddn.com/center.png"  
       onclick="begin(this)">
       <span id="alls">得分：</span>
       <span id="score"> 0</span>
       <p class="over" id="over">游戏结束</p>
       </div>
       <script language="javascript">
       /*动态生成table*/
       window.onload=function(){
       	var div=document.getElementById('bgImg');
       	var str="",
       	a="";
       	for (var k = 0; k < 10; k++) {
       		str+='<td></td>'
       	}
       	for (var i = 0; i <18; i++) {
       		a+='<tr>'+str+'</tr>';   
       	}
       	div.innerHTML+=
       	'<table id="board" cellspacing=0 cellpadding=0 border=1 
       	style="border-collapse: collapse;">'
       	+a+'</table>';
       }
       var tbl;//游戏主面板
       var status=0;////游戏状态 0: 未开始;1 运行; 2 中止; 
       var timer;//定时器
       var score = 0; //分数
       //board是一个18*10的数组
       var board= new Array(18);
       for (var i = 0; i <18; i++) {
       	board[i]=new Array(10);
       }
       // console.log(board);
       //用来标注那些方格已经被占据. 初始时都为0, 如果被占据则为1
       for (var i = 0; i <18; i++) {
       	for (var j = 0; j < 10; j++) {
       		board[i][j]=0;
       	}
       }
       // console.log(board);

       //定义一个当前活动的方块
       var activeBlock;
       //定义方块的基本形状--7个
       function genBlock(){
       	activeBlock = new Array(4);
       	//产生随机整数0-6
       	var t= (Math.floor(Math.random()*20)+1)%7;
       	switch(t){ 
       		case 0:{ 
       			activeBlock[0] = {x:0, y:4}; 
       			activeBlock[1] = {x:1, y:4}; 
       			activeBlock[2] = {x:0, y:5}; 
       			activeBlock[3] = {x:1, y:5}; 
       			break; 
       		} 
       		case 1:{ 
       			activeBlock[0] = {x:0, y:3}; 
       			activeBlock[1] = {x:0, y:4}; 
       			activeBlock[2] = {x:0, y:5}; 
       			activeBlock[3] = {x:0, y:6}; 
       			break; 
       		} 
       		case 2:{ 
       			activeBlock[0] = {x:0, y:5}; 
       			activeBlock[1] = {x:1, y:4}; 
       			activeBlock[2] = {x:1, y:5}; 
       			activeBlock[3] = {x:2, y:4}; 
       			break; 
       		} 
       		case 3:{ 
       			activeBlock[0] = {x:0, y:4}; 
       			activeBlock[1] = {x:1, y:4}; 
       			activeBlock[2] = {x:1, y:5}; 
       			activeBlock[3] = {x:2, y:5}; 
       			break; 
       		} 
       		case 4:{ 
       			activeBlock[0] = {x:0, y:4}; 
       			activeBlock[1] = {x:1, y:4}; 
       			activeBlock[2] = {x:1, y:5}; 
       			activeBlock[3] = {x:1, y:6}; 
       			break; 
       		} 
       		case 5:{ 
       			activeBlock[0] = {x:0, y:4}; 
       			activeBlock[1] = {x:1, y:4}; 
       			activeBlock[2] = {x:2, y:4}; 
       			activeBlock[3] = {x:2, y:5}; 
       			break; 
       		} 
       		case 6:{ 
       			activeBlock[0] = {x:0, y:5}; 
       			activeBlock[1] = {x:1, y:4}; 
       			activeBlock[2] = {x:1, y:5}; 
       			activeBlock[3] = {x:1, y:6}; 
       			break; 
       		} 
       	} 
       	//检查小方块的位置是否可以放在初始位置
       	for (var i = 0; i <4; i++) {
       		if (!isCellValid(activeBlock[i].x,activeBlock[i].y)) {
       			return false;
       		}else{
       			return true;
       		}
       	}
       }
       //向下移动
       function moveDown(){
       	//首先检查底边界 看有没有触底
       	if (checkBottomBorder()) {
       		//没有
       		erase();
       		for (var i = 0; i <4; i++) {
       			activeBlock[i].x=activeBlock[i].x+1;
       		}
       		paint();
       	}else{
       		//触底
       		//停止自动向下移动
       		clearInterval(timer);
       		//更新数组
       		updateBoard();
       		//消行
       		var lines=deleteLine();
       		//有消行就刷新分数
       		if (lines!=0) {
       			score=score+lines*10;
       			updateScore();
       			//擦除面板
       			eraseBoard();
       			//重绘面板
       			paintBoard();
       		}
       		//产生新图行。并判断是否可以放在最初位置

       		var oP=document.getElementById('over');
       		if (!genBlock()) {
       			oP.style.display='block';
       			status=2;
       			return;
       		}
       		paint();
       		//定时器
       		timer=setInterval(moveDown,1000);
       	}
       }
       //左移动
       function moveLeft(){
       	if (checkLeftBorder()) {
       		erase();
       		for (var i = 0; i <4; i++) {
       			activeBlock[i].y=activeBlock[i].y-1;
       		}
       		paint();
       	}
       }
       //右移动
       function moveRight(){
       	if (checkRightBorder()) {
       		erase();
       		for (var i = 0; i <4; i++) {
       			activeBlock[i].y=activeBlock[i].y+1;
       		}
       		paint();
       	}
       }
       //旋转
       //因为旋转之后可能会有方格覆盖已有的方格. 
       //先用一个tmpBlock,把activeBlock的内容都拷贝到tmpBlock, 
       //对tmpBlock尝试旋转,如果旋转后检测发现没有方格产生冲突
       //再把旋转后的tmpBlock的值给activeBlock. 
       function rotate(){
       	var tmpBlock=new Array(4);
       	for (var i = 0; i <4; i++) {
       		tmpBlock[i]={x:0,y:0};
       	}
       	for (var i = 0; i <4; i++) {
       		tmpBlock[i].x=activeBlock[i].x;
       		tmpBlock[i].y=activeBlock[i].y;
       	}
       	//先算四个点的中心点，则这四个点围绕中心旋转90度。 
       	var cx = Math.round((tmpBlock[0].x + tmpBlock[1].x + 
             	tmpBlock[2].x + tmpBlock[3].x)/4); 
       	var cy = Math.round((tmpBlock[0].y + tmpBlock[1].y + 
             	tmpBlock[2].y + tmpBlock[3].y)/4); 
       	//先假设围绕源点旋转。然后再加上中心点的坐标。 
       	for (var i = 0; i <4; i++) {
       		tmpBlock[i].x=cx+cy-activeBlock[i].y; 
       		tmpBlock[i].y=cy-cx+activeBlock[i].x; 
       	}
       	//检查旋转后方格是否不重叠
       	for (var i = 0; i < 4; i++) {
       		if (!isCellValid(tmpBlock[i].x,tmpBlock[i].y)) {
       			return;
       		}
       	}		
       	erase();


       	for (var i = 0; i < 4; i++) {
       		activeBlock[i].x=tmpBlock[i].x;
       		activeBlock[i].y=tmpBlock[i].y;
       	}
       	paint();
       }
       //检查方块(x，y)是否已经存在在border中
       function isCellValid(x,y){
       	if (x>17||x<0||y>9||y<0) {
       		return false;
       	}else if (board[x][y]==1) {
       		return false;
       	}else{
       		return true;
       	}
       }
       //检查底边界
       function checkBottomBorder(){ 
       	for(var i=0; i<activeBlock.length; i++){ 
       		if(activeBlock[i].x==17){ 
       			return false; 
       		} 
       		if(!isCellValid(activeBlock[i].x+1, activeBlock[i].y)){ 
       			return false; 
       		} 
       	} 
       	return true; 
       }
       //检查左边界
       function checkLeftBorder(){
       	for (var i = 0; i < activeBlock.length; i++) {
       		if (activeBlock[i].y==0) {
       			return false;
       		}
       		if (!isCellValid(activeBlock[i].x,activeBlock[i].y-1)) {
       			return false;
       		}

       	}
       	return true;
       }
       //检查右边界
       function checkRightBorder(){ 
       	for(var i=0; i<activeBlock.length; i++){ 
       		if(activeBlock[i].y==9){ 
       			return false; 
       		} 
       		if(!isCellValid(activeBlock[i].x, activeBlock[i].y+1)){ 
       			return false; 
       		} 
       	} 
       	return true; 
       } 
       //擦除
       function erase(){
       	for (var i = 0; i <4; i++) {
       		tbl.rows[activeBlock[i].x]
       		.cells[activeBlock[i].y]
       		.style.backgroundColor="#F4A460";
       	}
       }
       //擦除整个面板
       function eraseBoard(){
       	for (var i = 0; i <18; i++) {
       		for (var j = 0; j < 10; j++) {
       			tbl.rows[i].cells[j].style.backgroundColor = "#F4A460"; 
       		}
       	}
       }

       //产生一个空白行
       function generateBlankLine(){
       	var line=new Array(10);
       	for (var i = 0; i <10; i++) {
       		line[i]=0;
       	}
       	return line;
       }
       //消除行,改变数组border
       function updateBoard(){ 
       	for(var i=0; i<4; i++){ 
       		board[activeBlock[i].x][activeBlock[i].y]=1; 
       	} 
       } 
       //消除行
       function deleteLine (){
       	var lines=0;
       	for (var i = 0; i <18; i++) {
       		var j = 0
       		for (; j <10; j++) {
       			if (board[i][j]==0) {
       				break;
       			}
       		}
       		if (j==10) {
       			lines++
       			if(i!=0) {
       				for (var k =i-1; k>=0; k--) {
       					board[k+1]=board[k];
       				}
       			}
       			board[0]=generateBlankLine();

       		}
       	}
       	return lines;
       }
       //更新分数
       function updateScore(){
       	document.getElementById('score').innerText=""+score;
       }
       //重绘整个面板
       var arrColor=['#1E90FF','#9A32CD','#6495ED','#7B68EE'];
       var num=0;
       function paintBoard(){
       	for (var i = 0; i <18; i++) {
       		for (var j = 0; j <10; j++) {
       			num++;
       			num%=arrColor.length;
       			if (board[i][j]==1) {
       				tbl.rows[i]
       				.cells[j]
       				.style
       				.backgroundColor =arrColor[num];

       			}
       		}
       	}
       }

       //键盘事件
       function keyControl(){
       	if (status!=1) {
       		return;
       	}
       	var code=event.keyCode;
       	switch(code){
       		case 37:{
       			moveLeft();
       			break;
       		}
       		case 38:{ 
       			rotate(); 
       			break; 
       		} 
       		case 39:{ 
       			moveRight(); 
       			break; 
       		} 
       		case 40:{ 
       			moveDown(); 
       			break; 
       		} 
       	}
       }
       //活动方块
       function paint(){
       	for(var i=0; i<4; i++){ 
       		num++;
       		num%=arrColor.length;
       		tbl.rows[activeBlock[i].x]
       		.cells[activeBlock[i].y]
       		.style.backgroundColor=arrColor[num]; 


       	} 
       } 
       //开始
       function begin(e){
       	e.disabled=true;
       	status=1;
       	tbl=document.getElementById('board');

       	var oP=document.getElementById('over');
       	if(!genBlock()){ 
       		oP.style.display='block';
       		status = 2; 
       		return; 
       	} 
       	paint();
       	timer=setInterval(moveDown,1000);
       }
       document.onkeydown=keyControl;
       </script>
       </body>
       </html>
       </pre>
       </div>`
       +`<p>还有两张图片，我就不贴了，这个可以直接替换的<br>`
       +`<br><h5><a href="https://naro7l.coding.me/game-el/" style="color:black;">这是dome地址</a></h5><br>`
       +`<h5><a href="https://github.com/Nora7L/js--game" style="color:black;">这是源码地址</a></h5><br>`
	},
       {
            "data":`
            <p>好像常用的GIT命令只有那么几个,这次主要是记录一下较全的git命令</p>
            <pre>
<h4>Git常用操作命令：</h4>
1) 远程仓库相关命令
检出仓库：$ git clone git:
查看远程仓库：$ git remote -v
添加远程仓库：$ git remote add [name] [url]
删除远程仓库：$ git remote rm [name]
修改远程仓库：$ git remote set-url --push [name] [newUrl]
拉取远程仓库：$ git pull [remoteName] [localBranchName]
推送远程仓库：$ git push [remoteName] [localBranchName]
 
*如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，如下：
$git push origin test:master         // 提交本地test分支作为远程的master分支
$git push origin test:test              // 提交本地test分支作为远程的test分支
 
2）分支(branch)操作相关命令
查看本地分支：$ git branch
查看远程分支：$ git branch -r
创建本地分支：$ git branch [name] ----注意新分支创建后不会自动切换为当前分支
切换分支：$ git checkout [name]
创建新分支并立即切换到新分支：$ git checkout -b [name]
删除分支：$ git branch -d [name] ---- -d选项只能删除已经参与了合并的分支，对于未有合并的分支是无法删除的。如果想强制删除一个分支，可以使用-D选项
合并分支：$ git merge [name] ----将名称为[name]的分支与当前分支合并
创建远程分支(本地分支push到远程)：$ git push origin [name]
删除远程分支：$ git push origin :heads/[name] 或 $ gitpush origin :[name] 
 
*创建空的分支：(执行命令之前记得先提交你当前分支的修改，否则会被强制删干净没得后悔)
$git symbolic-ref HEAD refs/heads/[name]
$rm .git/index
$git clean -fdx
 
3）版本(tag)操作相关命令
查看版本：$ git tag
创建版本：$ git tag [name]
删除版本：$ git tag -d [name]
查看远程版本：$ git tag -r
创建远程版本(本地版本push到远程)：$ git push origin [name]
删除远程版本：$ git push origin :refs/tags/[name]
合并远程仓库的tag到本地：$ git pull origin --tags
上传本地tag到远程仓库：$ git push origin --tags
创建带注释的tag：$ git tag -a [name] -m 'yourMessage'
 
4) 子模块(submodule)相关操作命令
添加子模块：$ git submodule add [url] [path]
   如：$git submodule add git://github.com/soberh/ui-libs.git src/main/webapp/ui-libs
初始化子模块：$ git submodule init  ----只在首次检出仓库时运行一次就行
更新子模块：$ git submodule update ----每次更新或切换分支后都需要运行一下
删除子模块：（分4步走哦）
 1) $ git rm --cached [path]
 2) 编辑“.gitmodules”文件，将子模块的相关配置节点删除掉
 3) 编辑“ .git/config”文件，将子模块的相关配置节点删除掉
 4) 手动删除子模块残留的目录
 
5）忽略一些文件、文件夹不提交
在仓库根目录下创建名称为“.gitignore”的文件，写入不需要的文件夹名或文件，每个元素占一行即可，如
target
bin
*.db
 
=====================
Git 常用命令
git branch 查看本地所有分支
git status 查看当前状态 
git commit 提交 
git branch -a 查看所有的分支
git branch -r 查看本地所有分支
git commit -am "init" 提交并且加注释 
git remote add origin git@192.168.1.119:ndshow
git push origin master 将文件给推到服务器上 
git remote show origin 显示远程库origin里的资源 
git push origin master:develop
git push origin master:hb-dev 将本地库与服务器上的库进行关联 
git checkout --track origin/dev 切换到远程dev分支
git branch -D master develop 删除本地库develop
git checkout -b dev 建立一个新的本地分支dev
git merge origin/dev 将分支dev与当前分支进行合并
git checkout dev 切换到本地dev分支
git remote show 查看远程库
git add .
git rm 文件名(包括路径) 从git中删除指定文件
git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
git config --list 看所有用户
git ls-files 看已经被提交的
git rm [file name] 删除一个文件
git commit -a 提交当前repos的所有的改变
git add [file name] 添加一个文件到git index
git commit -v 当你用－v参数的时候可以看commit的差异
git commit -m "This is the message describing the commit" 添加commit信息
git commit -a -a是代表add，把所有的change加到git index里然后再commit
git commit -a -v 一般提交命令
git log 看你commit的日志
git diff 查看尚未暂存的更新
git rm a.a 移除文件(从暂存区和工作区中删除)
git rm --cached a.a 移除文件(只从暂存区中删除)
git commit -m "remove" 移除文件(从Git中删除)
git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
git diff --cached 或 $ git diff --staged 查看尚未提交的更新
git stash push 将文件给push到一个临时空间中
git stash pop 将文件从临时空间pop下来
---------------------------------------------------------
git remote add origin git@github.com:username/Hello-World.git
git push origin master 将本地项目给提交到服务器中
-----------------------------------------------------------
git pull 本地与服务器端同步
-----------------------------------------------------------------
git push (远程仓库名) (分支名) 将本地分支推送到服务器上去。
git push origin serverfix:awesomebranch
------------------------------------------------------------------
git fetch 相当于是从远程获取最新版本到本地，不会自动merge
git commit -a -m "log_message" (-a是提交所有改动，-m是加入log信息) 本地修改同步至服务器端 ：
git branch branch_0.1 master 从主分支master创建branch_0.1分支
git branch -m branch_0.1 branch_1.0 将branch_0.1重命名为branch_1.0
git checkout branch_1.0/master 切换到branch_1.0/master分支
du -hs

-----------------------------------------------------------
mkdir WebApp
cd WebApp
git init
touch README
git add README
git commit -m 'first commit'
git remote add origin git@github.com:daixu/WebApp.git
git push -u origin master
            </pre>
            `   
       }
       ,
       {
            "data":`<pre>
<h4>json解析方式一：</h4>
<div class="heightDm">
<pre class="brush: js">
{
    "message": "查询成功",
    "status": "10000",
    "list": [
        {
            "withdraw_type": "3",
            "withdraw_bankcard": "6214836550378968",
            "withdraw_date": "2015-5-24 07:24:04",
            "withdraw_money": "7000"
        },
        {
            "withdraw_type": "2",
            "withdraw_bankcard": "6214836550378968",
            "withdraw_date": "2015-5-24 07:22:57",
            "withdraw_money": "4000"
        },
        {
            "withdraw_type": "1",
            "withdraw_bankcard": "6214836550378968",
            "withdraw_date": null,
            "withdraw_money": "5000"
        },
        {
            "withdraw_type": "4",
            "withdraw_bankcard": "6214836550378968",
            "withdraw_date": "2015-5-24 07:25:12",
            "withdraw_money": "5000"
        }
    ]
}
</pre>
</div>
<p>解析方法：</p>
<div class="heightDm">
<pre class="brush: js">
String result = Net.GetTixianMoneyDetail(Constant.getTixianMoneyDetail,
"sigen",ph.getValue("sigen"));
result = result.substring(1, result.length() - 1);
Log.i("结果", result);
JSONObject jsonObject = new JSONObject(result);
JSONArray array = jsonObject.getJSONArray("list");
JSONObject jsonObject2;
for(int i = 0;i<array.length();i++){
    map =  new HashMap<String, String>();
    jsonObject2 = array.getJSONObject(i);
    map.put("withdraw_money", jsonObject2.getString("withdraw_money"));
    map.put("bankno", jsonObject2.getString("withdraw_bankcard"));
    map.put("withdraw_type",jsonObject2.getString("withdraw_type"));
    map.put("time", jsonObject2.getString("withdraw_date"));
    list.add(map);
}
</pre>
</div>
<h4>json解析方式二：</h4>
<div class="heightDm">
<pre class="brush: js">
{
    "message": "查询成功",
    "list4": [
        {
            "total": "0.0",
            "day": "2015-05-14",
            "trade_type2": "0.0",
            "trade_type1": "0.0",
            "trade_type3": "0.0"
        }
    ],
    "list5": [
        {
            "total": "0.0",
            "day": "2015-05-15",
            "trade_type2": "0.0",
            "trade_type1": "0.0",
            "trade_type3": "0.0"
        }
    ],
    "list2": [
        {
            "total": "1000.0",
            "day": "2015-05-12",
            "trade_type2": "1000.0",
            "trade_type1": "0.0",
            "trade_type3": "0.0"
        }
    ],
    "list3": [
        {
            "total": "1000.0",
            "day": "2015-05-13",
            "trade_type2": "0.0",
            "trade_type1": "0.0",
            "trade_type3": "1000.0"
        }
    ],
    "status": "10000",
    "list1": [
        {
            "total": "940.0",
            "day": "2015-05-11",
            "trade_type2": "0.0",
            "trade_type1": "940.0",
            "trade_type3": "0.0"
        }
    ],
    "list6": [
        {
            "total": "0.0",
            "day": "2015-05-16",
            "trade_type2": "0.0",
            "trade_type1": "0.0",
            "trade_type3": "0.0"
        }
    ],
    "list7": [
        {
            "total": "0.0",
            "day": "2015-05-17",
            "trade_type2": "0.0",
            "trade_type1": "0.0",
            "trade_type3": "0.0"
        }
    ]
}
</pre>
</div>
<p>解析方式：</p>
<div class="heightDm">
<pre class="brush: js">
String result = Net.SetDataZhuXing(Constant.getWeekData,
"sigen", sigen, "date", date);
result = result.substring(1, result.length() - 1);
Log.i("数据结果", result);

JSONObject jsonObject = new JSONObject(result);
JSONArray list1 = jsonObject.getJSONArray("list1");
JSONArray list2 = jsonObject.getJSONArray("list2");
JSONArray list3 = jsonObject.getJSONArray("list3");
JSONArray list4 = jsonObject.getJSONArray("list4");
JSONArray list5 = jsonObject.getJSONArray("list5");
JSONArray list6 = jsonObject.getJSONArray("list6");
JSONArray list7 = jsonObject.getJSONArray("list7");

JSONArray[] jsonarray = new JSONArray[] { list1, list2,
    list3, list4, list5, list6, list7 };
    JSONObject jsonObject1 = new JSONObject();
    for (int i = 0; i < jsonarray.length; i++) {
        map = new HashMap<String, String>();
        jsonObject1 = (JSONObject) jsonarray[i].opt(0);
        map.put("total", jsonObject1.getString("total"));// 视频id
        map.put("day", jsonObject1.getString("day"));// 图片名字
        map.put("trade_type2",
        jsonObject1.getString("trade_type2"));// 图片地址
        map.put("trade_type3",
        jsonObject1.getString("trade_type3"));// 积分
        map.put("trade_type1",
        jsonObject1.getString("trade_type1"));// 图片
        list_two.add(map);
 }
</pre>
</div>
<h4>json解析方式三：</h4>
<div class="heightDm">
<pre class="brush: js">
[
    {
        "message": "查询成功",
        "isFriday": "1",
        "balance_position": "0.0",
        "status": "10000",
        "sum_bonus": "0",
        "balance_recommend": "2115.00",
        "IS_Last": "0",
        "balance_manager": "211.50"
    }
]
</pre>
</div>
<p>解析方式：</p>
<div class="heightDm">
<pre class="brush: js">
String result = Net.GetTixianMoney(Constant.getTixianMoney,
"sigen", sigenNum);
result = result.substring(1, result.length() - 1);
Log.i("登录结果", result);
JSONObject jsonObject = new JSONObject(result);
chuangye_tianxian = jsonObject
.getString("balance_recommend");// 可提现创业奖金(元)
shichang_tixiang = jsonObject.getString("balance_position");// 可提现市场区域奖励(元)
guanli_tixiang = jsonObject.getString("balance_manager");// 可提现管理补贴(元)
fenghong_tixiang = jsonObject.getString("sum_bonus");// 可提现创业分红(元)
//today_server = jsonObject.getString("date");// 可提现创业分红(元)
isLast = jsonObject.getString("IS_Last");// 1表示不是月末
isFriday = jsonObject.getString("isFriday");// 可提现创业分红(元)
</pre>
</div>
总结：一层一层剥开。

方式三： 
    没有json数组，就直接包装成json 对象。JSONObject jsonObject = new JSONObject(result);然后getString取出来

方式一：
    里面包含一个json数组，那么先把最外层JSONObject jsonObject = new JSONObject(result);包装成json格式。从jsonObject中得到json数组， JSONArray array = jsonObject.getJSONArray("list");然后遍历。

方式三：
    里面包含多个json数组，那么就把jsonArray放入到JsonArray[]中去。然后每个jsonArray遍历

            </pre>`   
       }
	]


}


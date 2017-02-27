window.onload = function(){
	//获取元素
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	//当音乐播放完后，自动停止光盘旋转效果
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		//music.style.animationPlayState = "paused"; //问题同下
		//music.style.webkitAnimationPlayState = "paused"; //问题同下
	},false);
	//点击音乐图标，控制音乐播放与暂停
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play"); // 这种方式可行，但是当暂停时图片会回到初始位置，与预期效果不符
			//this.style.animationPlayState = "running";  //这种方法也可行，但是存在兼容问题，安卓手机4.4以下不兼容，苹果手机，iPhone6plus以下都不兼容
			//this.style.webkitAnimationPlayState = "running";  // 这种方法只有ios系统可以，安卓还是不行
		}else{
			audio.pause();
			this.setAttribute("class","");
			//this.style.animationPlayState = "paused";
			//this.style.webkitAnimationPlayState = "paused";
		};
	},false);
	//点击屏幕 开启好运2016
	page1.addEventListener("touchstart",function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	},false);
};
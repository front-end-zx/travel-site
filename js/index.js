
$(function(){
	// 控制图片底部文字部分的宽度
	var imgWidth = $(".imgW").width();
	$(".natural-footer").each((i,item)=>{
		item.style.width = imgWidth+"px";
	});
	// 使提示生效
	$('[data-toggle="tooltip"]').tooltip();
})
//兼容性scroll方法
function scrolltop (){
	return {
		"top" : document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset,
		"left" : document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset
	}
}
// 设置侧边栏显示或隐藏
var cancat = document.querySelector('.cancat');
var timer = null;
var target = 0;
var leader = 0;
var backBtn = document.querySelector("#backBtn");
window.onscroll = function (){
	if(scrolltop().top>=160){
		cancat.style.display="block";
	}else{
		cancat.style.display="none";
	}
}
// 返回顶部按钮
backBtn.onclick = function (){
	clearInterval(timer);
	timer = setInterval(function (){
		var step = (target-leader)/10;
		step = step>0?Math.ceil(step):Math.floor(step);
		leader = leader+step;
		window.scrollTo(0,leader);
		if(leader === 0){
			clearInterval(timer);
		}
	},50)
}
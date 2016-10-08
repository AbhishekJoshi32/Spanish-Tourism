function test(){
	$(".home").addClass("wow fadeOut animated ");
	setTimeout(function a(){	
	$("html,body").animate({
		scrollTop: 0
	},1000);
	setTimeout(function(){
	$("#wel").show().addClass("wow fadeIn animated");
	$("#trip").show().addClass("wow fadeIn animated");
},1500);
},500);
	setTimeout(function a(){
	$(".home").hide();},3000);
}


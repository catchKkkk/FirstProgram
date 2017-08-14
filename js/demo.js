

var x=0;
var oBgF=$("#content .imgs-flash .bg-f");
var oImgsLi=$("#content .imgs-flash .imgs-btn ul li");
$(function(){
	
	//顶部广告
	$(".tc-close").click(function(){
		$(".top-con").fadeOut(200);
	});

	//内容推荐
	var oBrandItem=$("#content .con-recom .brand-con .brand-item");
	oBrandItem.mouseover(function(){
		$(this).children(".comein").css("display", "block");
	});
	oBrandItem.mouseout(function(){
		$(this).children(".comein").css("display", "none");
	});

	//美丽人生
	var oFBConItem=$("#content .f-beauty .fb-con-item");
	oFBConItem.mouseover(function(){
		$(this).find("img").css("right", "20px");
	});
	oFBConItem.mouseout(function(){
		$(this).find("img").css("right", "0");
	});

	//轮播
	var oImgsFlash=$("#content .imgs-flash");
	oBgF.eq(0).show().siblings(".bg-f").hide();
	var timer=setInterval(timestart,6000);

	oImgsFlash.mouseover(function(){
		clearInterval(timer);
	})
	oImgsFlash.mouseout(function(){
		timer=setInterval(timestart,6000);
	});

	oImgsLi.mouseover(function(){
		x=$(this).index();	
		show();
	});

	//页面导航
	var oSnmTab=$("#site-nav .site-nav-menu .snm-tab");
	var oSiteLi=$("#site-nav .site-nav-menu li");
	var inner=["你的淘宝", "收藏夹", "商家支持", "网站导航"];
	var _sTabIndex=0;

	oSiteLi.mouseover(function(){
		$(this).css("background", "#FFF");
	});
	oSiteLi.mouseout(function(){
		$(this).css("background", "#f5f5f5");
	});

	oSnmTab.mouseover(function(){	
		_sTabIndex=oSnmTab.index(this);

		$(this).find("div").show();
		$(this).children("a").text(inner[_sTabIndex]+"▴");
	});
	oSnmTab.mouseout(function(){
		$(this).find("div").hide();
		$(this).children("a").text(inner[_sTabIndex]+"▾");
	});

		//手机版
		var oSnmP=$("#site-nav .site-nav-menu .snm-phone");
		oSnmP.mouseover(function(){
			$("#tp").show();
		});
		oSnmP.mouseout(function(){
			$("#tp").hide();
		});

	//内容顶部信息
	var oTitConAtivLi=$("#content .title-con-ative li");
	oOpacity(oTitConAtivLi);
	//内容推荐去左右
	var oAsideLive=$("#content .con-recom .aside-live");
	oOpacity(oAsideLive);
	//美丽人生Aside
	var oFBeautyLeft=$("#content .f-beauty .fb-con-left");
	oOpacity(oFBeautyLeft);
	//imgshow
	var oImgShow=$("#content .img-show .img-show-module .is-item");
	oOpacity(oImgShow);


	//body品质生活
	var oBodyLifeImg=$("#content .body-life .body-life-con img");
	oBodyLifeImg.mouseover(function(){
		$(this).css({"width":"160px", "height":"160px"});
	});
	oBodyLifeImg.mouseout(function(){
		$(this).css({"width":"140px", "height":"140px"});
	});

	//轮播->侧边导航
	var _aNavIndex;

	var oAsideNavLi=$("#content .imgs-flash .aside-nav li");
	var oAsideNavConLi=$("#content .imgs-flash .aside-nav-con li");
	var oAsideNav=$("#content .imgs-flash .aside-nav");
	var oAsideNavCon=$("#content .imgs-flash .aside-nav-con");
	oAsideNavLi.mouseover(function(){
		oAsideNavCon.show();

		_aNavIndex=$(this).index();
		oAsideNavConLi.eq(_aNavIndex).show();
	});
	oAsideNavLi.mouseout(function(){

		oAsideNavConLi.eq(_aNavIndex).hide();
	});

	oAsideNavConLi.mouseover(function(){
		oAsideNavCon.show();

		$(this).show().siblings().hide();
	});
	oAsideNavConLi.mouseout(function(){
		oAsideNavCon.hide();
		oAsideNavConLi.eq(_aNavIndex).hide();
	});

	
	oAsideNav.mouseout(function(){
		oAsideNavCon.hide();
	});
	//轮播->侧边导航

	//轮播小广告
	var oImgsFlashMg=$("#content .imgs-flash .bg-f .mg");
	oImgsFlashMg.mouseover(function(){
		$(this).css("opacity", "1");
	});
	oImgsFlashMg.mouseout(function(){
		$(this).css("opacity", "0.7");
	});

});

//透明度设置函数
function oOpacity(obj){
	obj.mouseover(function(){
		$(this).css("opacity", "0.6");
	});
	obj.mouseout(function(){
		$(this).css("opacity", "1");
	});
}


//轮播开始
function timestart(){
	x+=1;
	if(x>5){
		x=0;
	}
	show();
}

function show(){
	oImgsLi.eq(x).addClass("active").siblings("li").removeClass("active");
	oBgF.eq(x).fadeIn(300).siblings(".bg-f").fadeOut(300);
}
//轮播结束


//登录
function showLoginBox(){
	
	layer.open({
		type:1,
		title:"登录",
		area:["420px", "280px"],
		content:$("#loginBox")
	});
}
//注册
function showRegBox(){
	
	layer.open({
		type:1,
		title:"注册",
		area:["420px", "400px"],
		content:$("#regBox")
	});
}
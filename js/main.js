var nowpage = 0;
/*页面加载完成*/
$(document).ready(function(){
	var width = window.innerWidth;/*获取窗口的宽度*/
	var height = window.innerHeight;/*获取高度*/
	
	$(".content").width(width);
	$(".content").height(8*height);
	
	$(".page").width(width);
	$(".page").height(height);
	
	/*滑动监听content*/
	$('.content').swipe({
		/*监听滑动时执行*/
		//event事件  direction方向 duration时间 distance距离 fingerCount触屏的点数
		swipe:function(event, direction, duration, distance, fingerCount){
			if(direction == "up"){
				nowpage += 1;
			}
			if(nowpage > 7){
				nowpage = 7;
			}
			if(direction == "down"){
				nowpage -= 1;
			}
			if(nowpage < 0){
				nowpage = 0;
			}
			
			/*animate（）改变css动画
			 *第一个—｛｝ 要改变的属性极值，属性和值都用""括起来 用：连接
			//第二个｛｝动画时间，动画结束后执行的方法
			//多个属性用,
			 */
			/*$(".content").animate({"top": "-"+nowpage*height+"px"},{duraction:2000,complete:function(){}});*/
			$(".content").animate({"top": "-"+nowpage*height+"px"},{duraction:2000,complete:animageOfPage});

		}
	});
	
		
	$(".page1_02").fadeIn(10);
	$(".page1_01").fadeIn(1000,function(){
		$(".page1_02").addClass("page1_02_show");//加载css中 .page1_02_show动画效果配置
		//字体出现效果
		$('.text1').fadeIn(1000,function(){
			$(".page1_03").fadeIn(2000);			
			$(".page1_04").fadeIn(2000);
			$('.text2').fadeIn(2000,function(){
				$('.text3').fadeIn(1000,function(){
					$('.text4').fadeIn(500);
					$('.text5').fadeIn(500);
				});
			});
		});
		
	});
	
	
});


function animageOfPage(){
	
	if(nowpage == 1){
		//第2页
	}else if (nowpage == 2){
		
	//第3页
		
	}
	else if (nowpage == 3){
		
	//第4页
		
	}
	else if (nowpage == 4){
		
	//第5页
		
	}
	else if (nowpage == 5){
		
	//第6页
		
	}else if (nowpage == 6){
		
	//第7页
		
	}else if (nowpage == 7){
		
	//第8页
		
	}
	
	
	
}



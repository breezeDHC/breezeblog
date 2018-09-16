$(function () {
    var windowWidth;
    //处理左右两边div宽度函数
    function windowResize(){
        windowWidth = $(window).width();
        if($(".right-container").is(":hidden")){
            $(".left-container").css({"width":windowWidth});
        }else{
            $(".left-container").css({"width":windowWidth-330});
        }
    }
    windowResize();
    //设置侧边栏宽度
    $(".right-container").css({"height":$(".left-container").css("height")});
    //浏览器窗口变化事件
    $(window).resize(function () {
        windowResize();
    })
    //侧边栏按钮点击事件
    $(".showinfo").click(function () {
        if($(".right-container").is(":hidden")){
            $(".right-container").show(400);
            $(".left-container").animate({width:windowWidth-330},400)
            $(".showinfo i").removeClass("fa-dedent");
            $(".showinfo i").addClass("fa-close");
        }else{
            $(".right-container").hide(400);
            $(".left-container").animate({width:windowWidth},400);
            $(".showinfo i").removeClass("fa-close");
            $(".showinfo i").addClass("fa-dedent");
        }
    })
    //滚动条事件
    var scrollTop = $(window).scrollTop();
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if(scrollTop > 100){
            if($(".return-top").is(":hidden")){
                $("#ss_menu").animate({"bottom":"-=35px"},1)
                $(".return-top").fadeIn(400);
            }
        }else{
            if(!$(".return-top").is(":hidden")){
                $(".return-top").fadeOut(400);
                $("#ss_menu").animate({"bottom":"+=35px"},1);
            }


        }
    })
    //回到顶部
    $(".return-top").click(function () {
        $("html,body").animate({scrollTop:0},1000)

    })
    //登录按钮(用户未登录，弹出登录注册框；用户登录跳转到个人中心页)
    $(".log").click(function () {
        layer.open({
            type: 2,
            title:"log/register",
            area: ['420px', '630px'],
            fixed: false, //不固定
            maxmin: false,
            content: 'log.html'
        });
    })
    //页面动画加载（从上到下依次显示）
    $(".left-content .header .title").delay(100).show(100);
    $(".left-content .header .sign").delay(200).show(100);
    $(".left-content .header ul").delay(300).show(200);
    $(".left-content .content").delay(500).animate({"opacity":1},500);
    $(".left-content .footer").delay(1100).show(100);
})
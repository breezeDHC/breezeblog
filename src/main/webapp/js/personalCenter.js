$(function () {
    //左边按钮点击时右边块的显示
    function cclick(cclass,id){
        $(".display-content").children().hide();
        $(".cate .light").removeClass("light")
        if($(id).is("visible")){
            $(id).hide();
            $(cclass).removeClass("light");
        }else{
            $(cclass).addClass("light");
            $(id).show();
        }
    }
    $(".my-collection").click(function () {
        cclick(".my-collection","#my-collection");
    });
    $(".my-comment").click(function () {
        cclick(".my-comment","#my-comment");
    });
    $(".my-reply").click(function () {
        cclick(".my-reply","#my-reply");
    });
    $(".my-notice").click(function () {
        cclick(".my-notice","#my-notice");
    });
    $(".logout").click(function () {

    });
    //删除和取消按钮显示效果
    $("li").mouseenter(function () {
        $(this).find(".delete").show();
        $(this).find(".cancel").show();
    })
    $("li").mouseleave(function () {
        $(this).find(".delete").hide();
        $(this).find(".cancel").hide();
    })
    $(".delete,.cancel").hide();
    //我的回复小标题点击
    $(".display-content .reply .small-title li").click(function () {
        var thisclass = $(this).attr("class");
        if(thisclass == "otm"){
            $("#otm").show();
            $("#mto").hide();
        }else{
            $("#otm").hide();
            $("#mto").show();
        }
        $(this).addClass("light-color");
        $(this).siblings().removeClass("light-color");

    })
    //我的通知小标题点击
    $(".display-content .notice  .small-title li").click(function () {
        var thisclass = $(this).attr("class");
        if(thisclass == "reply-notice"){
            $(".reply-notice-com").show();
            $(".report-notice-com").hide();
        }else{
            $(".reply-notice-com").hide();
            $(".report-notice-com").show();
        }
        $(this).addClass("light-color");
        $(this).siblings().removeClass("light-color");

    })
})
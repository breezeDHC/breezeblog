$(function () {
    //评论回复hover事件
    $(".report").hide();
    $(".reply").hide();
    $(".reply-box").hide();
    $(".message li").hover(function () {
        $(this).find(".report").show();
        $(this).find(".reply").show();
    },function () {
        $(this).find(".report").hide();
        $(this).find(".reply").hide();
    })
    //查看回复
    $(".see-reply").click(function () {
        if($(this).closest("li").next().is(":visible")){
            $(this).closest("li").next().hide(100);
        }else{
            $(this).closest("li").next().show(100);
        }
    })
    //留言框
    $(".msg-box textarea").click(function () {
        $(this).animate({"height":80},300);
        $(".msg-box .btn").show(300);
    })
})
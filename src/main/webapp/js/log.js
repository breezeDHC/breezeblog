$(function () {
    $(".register-now").click(function () {
        $(".log-container").animate({"left":"-420px"},300);
        $(".register-container").delay(300).animate({"left":"0"},300);
    })
    $(".log-now").click(function () {
        $(".register-container").animate({"left":"-420px"},300);
        $(".log-container").delay(300).animate({"left":"0"},300);
    })
    $(".log-now-getpwd").click(function () {
        $(".getpwd-container").animate({"left":"-420px"},300);
        $(".log-container").delay(300).animate({"left":"0"},300);
    })
    $(".forget-pwd").click(function () {
        $(".log-container").animate({"left":"-420px"},300);
        $(".getpwd-container").delay(300).animate({"left":"0px"},300);
    })
})
$(function () {
    let $btn = $("#skill button");
    let $slides = $(".cons .slides");

    $btn.click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        let index = $(this).index();
        $slides.stop().animate({ "left": -375 * index });
    })
})
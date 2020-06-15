$(function () {
    let $btn = $(".navBtns button");
    let $slides = $(".cons .slides");

    $btn.click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        let index = $(this).index();
        let left =  -500 * index;
        $slides.stop().animate({ "left": -500 * index });
    })
})
$(document).ready(function() {
    $("#toggleDiv1").click(function() {
        $(".box:nth-child(2)").toggle();
    });

    $("#fadeDiv2").click(function() {
        $(".box:nth-child(2)").fadeToggle();
    });

    $("#slideDiv3").click(function() {
        $(".box:nth-child(3)").slideToggle();
    });
});

//write here your js




$(document).ready(function(){
    $(".fibut").click(function(){
        $(".second").addClass("onosamoe");
        $(".first").addClass("netosamoe");
    });

    $(".sebut").click(function(){
        $(".second").addClass("netosamoe");
        $(".third").addClass("onosamoe");
    });
});

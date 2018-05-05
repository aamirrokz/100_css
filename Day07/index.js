$('.search-icon').bind('click', function(){
    $('.search-input').toggleClass('active');
});

$('.menu-panel').bind('click', function(){
    $('.panel').toggleClass('.show-menu');
    $('.menu').toggleClass('.active');
});
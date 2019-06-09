$(window).scroll(function() {
    if ($(window).scrollTop() > 100 ){
        $('.myNavbar').addClass('show');
    } else {
    $   ('.myNavbar').removeClass('show');
    };   	
});
    
$('.scroll').on('click', function(e){		
    e.preventDefault()
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
    }, 1500);
});
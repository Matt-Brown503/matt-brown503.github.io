var emptyLink = document.querySelectorAll("a[href='#']");

$(document).ready(function(){
	$('#slideshow').carousel({
  				interval: 0
		});
});
//Add dark background to nav after scrolling down
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('#nav').toggleClass('darknav',
      scroll >= $('#about').offset().top - 50
    );
});
//trigger the scroll
$(window).scroll();

//Scroll to section for nav
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 35
    });
});
$("#about-btn").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 35
    });
});

//Empty Links will not reload page
$(emptyLink).click(function(e) {
    e.preventDefault();
});




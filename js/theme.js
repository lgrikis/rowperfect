/* Setting up reveal on scroll */
window.scrollReveal = new scrollReveal({ reset: true, move: '50px',viewportFactor:0 });

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/* Displays the page after window loads */
$(window).load(function() {
	setTimeout(function(){
		$(".cover").fadeOut(2000);
	},1000);
})

$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

  // setup form validation
  $('#form-submit-button').on('click', function(){
    console.log("clickec", this);

    var error = false;
    var input_fields = [];
    input_fields.push($('#entry_2100312067'));
    input_fields.push($('#entry_1137281981'));
    input_fields.push($('#entry_2033187951'));
    input_fields.push($('#entry_626805886'));

    input_fields.forEach(function(field){
      if ( field.val() ){
        field.parent().parent().removeClass('has-error');
        field.parent().parent().addClass('has-success');
      } else {
        field.parent().parent().removeClass('has-success');
        field.parent().parent().addClass('has-error');
        error = true;
      }
    });

    if (error){
      $('.form-required-text').removeClass("hidden");
      return false;
    } else {
      $('#contact-form').submit();
    };

  });
});

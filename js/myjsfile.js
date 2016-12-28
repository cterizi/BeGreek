 $(document).ready(function(){
      $('.parallax').parallax();
    });

 $(document).ready(function(){
      $('.carousel').carousel();
    });
 
 $('.carousel.carousel-slider').carousel({full_width: true});

  $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

$(".dropdown-button").dropdown();

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

$(document).ready(function() {
    $('select').material_select();
  });
     
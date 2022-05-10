$( function() {
    $( ".product-list-inner" ).tabs();
    $( ".feedback-slider-list" ).slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
} );


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

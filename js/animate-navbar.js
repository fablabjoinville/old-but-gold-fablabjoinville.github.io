$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
      $(".navbar").addClass("sticky");
    } else {
     $(".navbar").removeClass("sticky");
    }
  });
});

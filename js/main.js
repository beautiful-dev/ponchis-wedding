$(function() {
  $(window).on('resize', function() { setVerticalPadding() });

  var setVerticalPadding = function() {
    var sectionHeight = $('section').height();
    var windowHeight = $(window).height();
    var h1Height = $('h1').height();
    console.log((windowHeight - sectionHeight + h1Height)/2);
    $('section').css('padding-top', (windowHeight - sectionHeight - h1Height)/2);
  };

  setVerticalPadding();
});

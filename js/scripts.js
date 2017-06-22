// $(function(){
//
//
// });

$.lazyLoadXT.updateEvent+=' layoutComplete';

var $grid = $('#grid').isotope({
  // options
  itemSelector: '.item',
  transitionDuration: 10,
  percentPosition: true,
masonry: {
  // use element for option
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer'
}
});

$(window).load(function(){
  $('#grid').find('.item').lazyLoadXT();
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

$('#tags').on( 'click', 'a', function() {
  $('#tags a').removeClass("current");
  var filterValue = $(this).attr('data-filter');
  $(this).addClass("current");
  $grid.isotope({ filter: filterValue });
});

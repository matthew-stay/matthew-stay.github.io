// $(function(){
//
//
// });

$.lazyLoadXT.updateEvent+=' layoutComplete';

var $grid = $('#grid').isotope({
  // options
  itemSelector: '.item',
  transitionDuration: 0,
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

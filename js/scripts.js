$(window).load(function(){
    var $container = $('.grid');

    $container.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        fitWidth: true,
        filter: '*',
        transitionDuration: '0',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        masonry: {
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer'
        }
    });


    //
    $container.imagesLoaded( function() {

var $item = $('.grid-item');

var yetVisited = localStorage['visited'];

if (!yetVisited) {
    $item.css({ opacity: 0 });
  	var effect = "transition.slideUpIn",
    stagger = "300",
    drag = "false";
    localStorage['visited'] = "yes";
}
else {
	// var effect = "transition.fadeIn",
  $item.css({ opacity: 100 });
  stagger = "300",
  drag = "false";
  }

	if (effect !== "") {
		var animateOptions = {
				duration: !/\./.test(effect) ? 1500 : null,
				stagger: stagger,
				drag: drag && /^transition/.test(effect),
				backwards: /Out$/.test(effect)
			};

		if (effect === "fadeIn" || /In$/.test(effect)) {
			$item.velocity({ opacity: 0 }, 100);
		}

	$item.velocity(effect, animateOptions);
$container.isotope('layout');

	}
});



  //

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });

         return false;
    });
});


// jQuery(document).ready(function($) {
// // init Masonry
// // var $grid = $('.grid').masonry({
// //   itemSelector: '.grid-item',
// //   columnWidth: '.grid-sizer',
// //   gutter: '.gutter-sizer',
// //   percentPosition: true,
// //   fitWidth: true,
// // });
// // // layout Masonry after each image loads
// // $grid.imagesLoaded().progress( function() {
// //   $grid.masonry('layout');
// // });
//
//
//
//   var $container = $('.grid');
//      $container.isotope({
//     itemSelector: '.grid-item',
//     masonry: {
//       columnWidth: 200
//     },
//     transitionDuration: '0'
//   });
//
//   $container.imagesLoaded( function() {
// var $item = $('.grid-item');
//
// 	var effect = "transition.perspectiveLeftIn",
// 		stagger = "300",
// 		drag = "false";
//
// 	if (effect !== "") {
// 		var animateOptions = {
// 				duration: !/\./.test(effect) ? 1000 : null,
// 				stagger: stagger,
// 				drag: drag && /^transition/.test(effect),
// 				backwards: /Out$/.test(effect)
// 			};
//
// 		if (effect === "fadeIn" || /In$/.test(effect)) {
// 			$item.velocity({ opacity: 0 }, 100);
// 		}
//
// 	$item.velocity(effect, animateOptions);
// $container.isotope('layout');
//
// 	}
//
//
//  });
// });

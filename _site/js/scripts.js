// $(function(){
//
//
// });

$.ajax({
        url: "http://api.tumblr.com/v2/blog/mattstay.tumblr.com/posts?api_key=v2O16ifk6m9cXWfrQkanMtfJwcmowKUmVniQKo6yxfcEJSyKuQ",
        dataType: 'jsonp',
        success: function(posts){
          var postings = posts.response.posts;
          console.log(postings);
          var text = '';

    for (var i in postings) {
           var p = postings[i];
          text += '<p></p>';
      if(p.type == 'photo'){
        text +='<div class="item"><img src=' +  p.photos[0].original_size.url + '>' + p.caption + '</div>'
      }
        if(p.type == 'video'){
        text += '<div class="video-container">' + p.player[0].embed_code + '</div>' +'<p></p>' + p.caption;
      }
          if(p.type == 'text'){
        text += p.body + p.caption;
      }
    text += '<a href='+ p.post_url +'>'+ p.post_url +'</a></li>';
          text += '<br></br>';
          }
          $('#archive').append(text);
        }
    });

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

var $archive = $('#archive').isotope({
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
  $('#archive').find('.item').lazyLoadXT();
});

$archive.imagesLoaded().progress( function() {
  $archive.isotope('layout');
});

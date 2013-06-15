jQuery(document).ready(function($) {
    $("h1 span, h2").lettering();

   	window.addEventListener("load",function() {
    setTimeout(function() {
        document.body.scrollTop || window.scrollTo(0, 1);
    }, 0);
});
});

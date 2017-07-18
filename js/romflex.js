

// index.html scroll function

      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 30) {
        $(".change").addClass("scroll");   // removed the . from class
    } else {
        $(".change").removeClass("scroll");  // removed the . from class
    }
});

      $(window).scroll(function(){
        $(".articles, .btn-warning, .thick-orange-line, h1").css("opacity", 1 - $(window).scrollTop() / 300);
      });



// contact.html scroll

$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 30) {
    $(".change").addClass("scroll");   // removed the . from class
} else {
    $(".change").removeClass("scroll");  // removed the . from class
}
});

	$(window).scroll(function(){
		$(".thick-orange-line, h1").css("opacity", 1 - $(window).scrollTop() / 150);
	});


// google map .. contact.html

	function myMap() {
var mapProp= {
    center:new google.maps.LatLng(9.075689, 7.472812),
    zoom:12,
};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
var marker = new google.maps.Marker({
          position: center ,
          map: googleMap
        });
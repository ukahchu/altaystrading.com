var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 24.356597,
				lng: 54.486389,
			  });
			   var marker = map.addMarker({
			       lat: 24.356597,
			       lng: 54.486389,
		            title: 'AlHashem Marble.',
		            infoWindow: {
		                content: "<img src='/images/logo.png' width='50%'  />"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();
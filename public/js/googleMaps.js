function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.880, lng:-117.236};

	var map = new google.maps.Maps(document.getELementantById('maps'), {
		center: ucsd.ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position; ucsd.ltlng,
		maps: map,
		title: "UCSD"
	})

}
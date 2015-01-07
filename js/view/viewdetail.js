function ViewDetail () {}

ViewDetail.prototype = new View();
ViewDetail.prototype.constructor = ViewDetail;
ViewDetail.prototype.parent = View.prototype;


View.prototype.initSectionActions = function()
{
	this.initMap();
};

ViewDetail.prototype.initMap = function()
{
	var myLatlng = new google.maps.LatLng(43.354147, -5.845670);

    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        scrollwheel: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map
    });

    var contentString = '<div id="info-content"><h5>Promo</h5><p>Lorem ipsum dolor sit amet.</p></div>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function()
    {
        infoWindow.open(map,marker);
    });
}
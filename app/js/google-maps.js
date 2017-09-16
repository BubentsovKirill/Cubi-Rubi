var Map = function(){

    var googleMap = function(){
        var mapOption = {
            center: new google.maps.LatLng(53.911267, 27.579228),
            zoom:17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            disableDefaultUI: true
        };

        var map = new google.maps.Map(document.getElementById('google-map'), mapOption);

        var marker_url = '../img/marker.png';

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(53.911267, 27.579228),
            map: map,
            visible: true,
            icon: marker_url
        });

    }

    return {
        initGoogleMap: function(){
            googleMap();
        },
        init: function () {
            this.initGoogleMap()
        }
    }
}();
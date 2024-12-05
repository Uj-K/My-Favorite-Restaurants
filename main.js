var map = L.map('map').setView([47.25001285355109, -122.47588451220068], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var restaurants = [
    {
        name: "BURGER SEOUL",
        lat: 47.25687308003812,
        lng: -122.4615809305217,
        description: "Hamburger restaurant"
    },
    {
        name: "Cuerno Bravo",
        lat: 47.2582716481405, 
        lng: -122.44299593620235,
        description: "Steakhouse"
    },
    {
        name: "Outpost Sandwiches",
        lat: 47.25369974049884,
        lng: -122.43727585264476,
        description: "Sandwich shop"
    },
    {
        name: "KIMCHI BOX",
        lat: 47.233645026792736, 
        lng: -122.5035077446855,
        description: "Korean"
    },
    {
        name: "Wooden City Tacoma",
        lat: 47.256876343657254, 
        lng: -122.43962678760512,
        description: "Casual dining"
    }

];

restaurants.forEach(function(restaurant) {
    var marker = L.marker([restaurant.lat, restaurant.lng]).addTo(map);
    marker.bindPopup("<b>" + restaurant.name + "</b><br>" + restaurant.description);
});
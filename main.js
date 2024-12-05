var map = L.map('map').setView([47.23, -122.48], 12.4);

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
    },
    {
        name: "The Grill",
        lat: 47.17266585857368, 
        lng: -122.48428232256246,
        description: "Korean"
    },
    {
        name: "Salamone’s Pizza",
        lat: 47.265355619446396, 
        lng: -122.4474922807633,
        description: "Pizza"
    },
    {
        name: "Field Bar & Bottle Shop",
        lat: 47.25552427471303, 
        lng: -122.47090430419273,
        description: "Unique cuisine"
    },
    {
        name: "Red Gem",
        lat: 47.19838979354568, 
        lng: -122.48312168045177,
        description: "Korean-Chinese restaurant·"
    },
    {
        name: "bb.q Chicken Tacoma Lakewood",
        lat: 47.17835205233487, 
        lng: -122.48470033179389,
        description: "Korean Fried Chicken"
    }

];

var myIcon = L.icon({
    iconUrl: 'restaurant.png',
    iconSize: [37, 42],
});

restaurants.forEach(function(restaurant) {
    var marker = L.marker([restaurant.lat, restaurant.lng], {icon: myIcon}).addTo(map);
    marker.bindPopup("<b>" + restaurant.name + "</b><br>" + restaurant.description);
});


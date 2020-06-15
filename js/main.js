// Initializee and add the map
function initMap() {
  // Your location
  const loc = { lat: 40.593079, lng: -73.986267};
  // Centered map on location
  const map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 14
  });
  // The market, position at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
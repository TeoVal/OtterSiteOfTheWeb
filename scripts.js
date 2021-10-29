
function initMap() {
    const ottersFriesland = { lat: 53.274987380416164, lng: 5.756865905519784 };
    // const ottersDrenthe = { lat: 52.472660578528625, lng: 6.8939508531325195 };
    const ottersTotal = ottersFriesland;
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: ottersFriesland,
    });
    const marker = new google.maps.Marker({
      position: ottersFriesland,
      map: map,
    });
  }
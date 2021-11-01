
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



  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("logo").style.fontSize = "20px";
    // document.getElementsById("navbar").style.height = "80px";
    document.getElementById("topotter").style.height = "30px";
    document.getElementById("topotter").style.width = "35px";

  } else {
    document.getElementById("logo").style.fontSize = "50px";
    document.getElementById("topotter").style.height = "70px";
    document.getElementById("topotter").style.width = "75px";

  }
}


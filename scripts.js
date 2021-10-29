
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



  document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end
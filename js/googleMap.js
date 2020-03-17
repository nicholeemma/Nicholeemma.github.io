function initMap() {
    // The location of Uluru
    var uluru = {lat: -35.0083891, lng: 138.5887972,};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('bkMap'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
function autoAdjustWindow(){
       try{ 
    //        window.frameElement.height=document.body.scrollHeight;
    //       
    // window.frameElement.parentElement.height=document.body.scrollHeight;
    window.frameElement.width=document.body.scrollWidth;
    window.frameElement.parentElement.width=document.body.scrollWidth; 
        }catch(e){
     
        }
    }
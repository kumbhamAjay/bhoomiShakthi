import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "antd";

const Map = () => {
  const [position, setPosition] = useState({ lat: 37.7749, lng: -122.4194 }); 
  const [currentLocationMarker, setCurrentLocationMarker] = useState(null); 

  const maptheme = [];
  // const maptheme= [
  //   {
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#e0f7fa"
  //       }
  //     ]
  //   },
  //   {
  //     "elementType": "labels.icon",
  //     "stylers": [
  //       {
  //         "visibility": "off"
  //       }
  //     ]
  //   },
  //   {
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //       {
  //         "color": "#00695c"
  //       }
  //     ]
  //   },
  //   {
  //     "elementType": "labels.text.stroke",
  //     "stylers": [
  //       {
  //         "color": "#ffffff"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "landscape",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#81d4fa"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "landscape.man_made",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#c8e6c9"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "poi",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "visibility": "off"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "road",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#a5d6a7"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "road.arterial",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#81c784"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "road.highway",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#66bb6a"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "road.local",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#c8e6c9"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "transit",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#c8e6c9"
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "water",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#4caf50"
  //       }
  //     ]
  //   }
  // ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDEtpP-w0lvW6vUUfbyJ06falh_yKY38ow", 
  });



 
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => {
        console.log(p,"position")
        
        const { latitude, longitude } = p.coords;
        if (latitude && longitude) {
          setPosition({ lat: latitude, lng: longitude }); 
          setCurrentLocationMarker({ lat: latitude, lng: longitude }); 
        }
      });
    }
  }

  const findHandler = () => {
    getLocation(); 
  };

  const styles = {
    right: { width: "100%", height: "100vh", border: "1px solid" },
  };

  return isLoaded ? (
    <div className="container">
     
      <div>
        <Button onClick={findHandler}>Find Me</Button>
      </div>
      <div style={styles.right}>
        <GoogleMap
          center={position} 
          zoom={14}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            styles: maptheme,
          }}
        >
          
          {currentLocationMarker && (
            <Marker
              position={currentLocationMarker}
              label="You are here"
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          )}
        </GoogleMap>
      </div>   
       </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
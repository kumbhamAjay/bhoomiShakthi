import React, { useCallback, useEffect, useState } from "react";
import { MapPin, Calendar, FileText } from "lucide-react";
import toast from "react-hot-toast";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "antd";

export default function SoilTestRequest() {
  const [formData, setFormData] = useState({
    location: "",
    preferredDate: "",
    notes: "",
  });
  ///////////////////////////////////////
  const [position, setPosition] = useState({ lat: 13.650008, lng: 79.416692 });
  const [currentLocationMarker, setCurrentLocationMarker] = useState(null);
  const [address, setAddress] = useState("");

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
  ///////////
  const handleMapClick = useCallback(async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lat, lng);
    setCurrentLocationMarker({ lat, lng });

    // Fetch address using Google Maps Geocoding API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDEtpP-w0lvW6vUUfbyJ06falh_yKY38ow`
    );

    const data = await response.json();
    console.log(response);
    if (data.status === "OK" && data.results.length > 0) {
      console.log(data.results[0].formatted_address);
      setFormData({ ...formData, location: data.results[0].formatted_address });
      setAddress(data.results[0].formatted_address);
    } else {
      setAddress("Address not found");
    }
    // setFormData({...formData,location:address})
    // console.log(address)
  }, []);
  ////////////////////////

  async function getLocation() {
    setFormData({...formData,location:"    Updating Location....."})
    try {
      
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude, "coordinates");

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDEtpP-w0lvW6vUUfbyJ06falh_yKY38ow`
      );

      const data = await response.json();
      console.log("current location", data);

      if (data.status === "OK" && data.results.length > 0) {
        console.log(data.results[0].formatted_address);
        setFormData({
          ...formData,
          location: data.results[0].formatted_address,
        });
        setAddress(data.results[0].formatted_address);
        setPosition({ lat: latitude, lng: longitude });
        setCurrentLocationMarker({ lat: latitude, lng: longitude });
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      toast.error("Failed to fetch location. Please try again.");
    }

   
  }


const findHandler = () => {
  getLocation();
  // setFormData(...formData,location:currentLocationMarker)
};

const handleSubmit = (e) => {
  e.preventDefault();
  toast.success("Soil test request submitted successfully!");
};

return (
  <div className="w-full max-w-7xl mx-auto mt-20 p-4">
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Form Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Request Soil Test
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter location details"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date
              </div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              value={formData.preferredDate}
              onChange={(e) =>
                setFormData({ ...formData, preferredDate: e.target.value })
              }
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Additional Notes
              </div>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              placeholder="Any specific requirements or notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="flex-1 bg-gray-100 shadow-lg rounded-lg p-4">
        {isLoaded ? (
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <button
                onClick={findHandler}
                type="button"
                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Select Your Location
              </button>
            </div>
          </label>
        ) : (
          <>Loading</>
        )}
        <div className="relative w-full h-96">
          {isLoaded ? (
            <GoogleMap
              center={position}
              zoom={14}
              onClick={handleMapClick}
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
          ) : (
            <div className="flex justify-center items-center h-full">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

// const styles = {
//   right: { width: "100%", height: "100vh", border: "1px solid" },
// }

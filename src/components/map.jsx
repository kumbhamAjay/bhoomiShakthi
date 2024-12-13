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
{/* <script>
    let inactivityTime = function () {
        let timer, interval;
        const inactivityLimit = 120000; // 2 minutes in milliseconds
        let lastActiveTime = Date.now(); // Track the last activity timestamp
        let remainingTime = inactivityLimit;

        // Variable to keep track of total inactive time
        let totalInactiveTime = 0;

        // Variables to detect long presses
        let keyPressed = false;
        let mousePressed = false;

        // Store last active time in localStorage
        const updateLocalStorage = () => {
            localStorage.setItem("lastActiveTime", Date.now());
        };

        // Function to reset the timer and countdown on user activity
        function resetTimer() {
            // Prevent resetting if a long press is detected
            if (keyPressed || mousePressed) return;

            clearTimeout(timer);
            clearInterval(interval); // Stop any previous countdown
            remainingTime = inactivityLimit;

            // Update the last active timestamp
            lastActiveTime = Date.now();
            updateLocalStorage(); // Update localStorage

            // Reset the countdown display
            updateCountdownDisplay();

            // Start logout timer
            timer = setTimeout(logoutUser, inactivityLimit);
            startCountdown(); // Start countdown display
        }

        // Function to log out user
        function logoutUser() {
            alert("Warning: You have been inactive, which impacts your recorded working hours");
            bubble_fn_inactive_logout(); // Call Bubble function
        }

        // Function to start the countdown and update display
        function startCountdown() {
            interval = setInterval(function() {
                remainingTime -= 1000; // Reduce time by 1 second
                updateCountdownDisplay(); // Update display

                if (remainingTime <= 0) {
                    clearInterval(interval);
                }
            }, 1000);
        }

        // Function to update display with remaining time
        function updateCountdownDisplay() {
            const minutes = Math.floor((remainingTime / 1000) / 60);
            const seconds = Math.floor((remainingTime / 1000) % 60);
            const countdownElement = document.getElementById("inactivityCountdown");
            
            if (countdownElement) {
                countdownElement.innerText = Time until logout: ${minutes}m ${seconds}s;
            }
        }

        // Corrected function to track total inactive duration
        function trackInactiveDuration() {
            const now = Date.now();
            const inactiveDuration = now - lastActiveTime; // Calculate current inactive period

            // Only add to totalInactiveTime if the inactive period exceeds the limit
            if (inactiveDuration >= inactivityLimit) {
                totalInactiveTime += inactiveDuration; // Add to total inactive time
                displayInactiveDuration(totalInactiveTime); // Update display with total inactive time

                // Reset last active time to prevent counting the same period repeatedly
                lastActiveTime = now;
            }
        }

        // Function to display total inactive duration
        function displayInactiveDuration(totalInactiveMillis) {
            const totalMinutes = Math.floor((totalInactiveMillis / 1000) / 60);
            const totalSeconds = Math.floor((totalInactiveMillis / 1000) % 60);
            const inactiveElement = document.getElementById("inactiveDuration");
            
            if (inactiveElement) {
                inactiveElement.innerText = `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m ${totalSeconds}s`;
            }
        }

        // Add event listeners for keydown and mousedown
        document.addEventListener("keydown", () => {
            keyPressed = true;
        });
        document.addEventListener("keyup", () => {
            keyPressed = false;
            resetTimer(); // Reset timer when the key is released
        });
        document.addEventListener("mousedown", () => {
            mousePressed = true;
        });
        document.addEventListener("mouseup", () => {
            mousePressed = false;
            resetTimer(); // Reset timer when the mouse button is released
        });

        // Reset timer on non-long press user activity
        document.onmousemove = resetTimer;
        document.onscroll = resetTimer;
        document.onclick = resetTimer;

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
                resetTimer();
            } else {
                clearTimeout(timer); // Clear timer when tab is inactive
                clearInterval(interval); // Clear countdown interval
            }
        });

        // Periodically track inactive time
        setInterval(trackInactiveDuration, 1000); // Check every second

        // Initialize last active time in localStorage
        if (!localStorage.getItem("lastActiveTime")) {
            updateLocalStorage();
        }
    };

    // Initialize inactivity tracker
    inactivityTime();
</script> */}
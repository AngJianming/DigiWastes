import React, { useEffect, useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { useContext } from "react";
import Context from "../context/Context";
import { Wrapper, Facilites } from "../Components";
import { useParams } from "react-router-dom";


const market = [
  {
    id: 1,
    name: "Reverse-Vending Machine 1 (APU Main Campus)",
    position: { lat: 3.055274, lng: 101.700643 }, // APU main entrance
  },
  {
    id: 2,
    name: "Reverse-Vending Machine 2 (Fortune Park)",
    position: { lat: 3.051472, lng: 101.701831 }, // ~600m south of APU, near Fortune Park
  },
  {
    id: 3,
    name: "Reverse-Vending Machine 3 (The Arc)",
    position: { lat: 3.059583, lng: 101.702147 }, // ~700m north of APU, near The Arc
  },
  {
    id: 4,
    name: "Reverse-Vending Machine 4 (Vista Shop)",
    position: { lat: 3.054891, lng: 101.695912 }, // ~550m west of APU, near Vista Shop
  },
  {
    id: 5,
    name: "Reverse-Vending Machine 5 (LRT Station)",
    position: { lat: 3.057813, lng: 101.704568 }, // ~650m northeast of APU, near LRT
  }
]

const SearchMap = () => {
  const { Location, Locationstate, facdata, fetcheddata } = useContext(Context);
  const [searchaddress, setsearchaddress] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return setActiveMarker(null);
    }
    setActiveMarker(marker);
  };

  const mapRef = useRef();
  const center = { lat: 3.055274, lng: 101.700643 }; // APU coordinates

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#242f3e" }]
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }]
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }]
      }
    ]
  };

  // Create a function to initialize the map
  const initializeMap = (coordinates1) => {
    mapboxgl.accessToken = import.meta.env.MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: "map", // Use the provided coordinates as the initial center
      style: "mapbox://styles/nishant7412/clmd5l4yi01bz01r71roa6h2m",
      center: coordinates, // Center on APU
      zoom: 18,
      pitch: 50,
      bearing: 0,
    });

    return map;
  };

  const Geocodeaddress = async (address) => {
    console.log(address);
    mapboxgl.accessToken = import.meta.env.MAPBOX_ACCESS_TOKEN;
    const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxgl.accessToken}`;
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();

    return data.features[0].center;

  };

  // Handle the search button click
  const handleSearch = async (unitaddress) => {
    try {
      // Remove the previous marker, if it exists
      if (marker) {
        marker.remove();
      }

      const searchCoordinates = await Geocodeaddress(
        searchaddress ? searchaddress : unitaddress
      );
      const [lng, lat] = searchCoordinates;

      // Create a directions request
      const directionsApiUrl = `https://api.mapbox.com/directions/v5/mapbox/cycling/${lng},${lat};${coordinates[0]},${coordinates[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;

      const response = await fetch(directionsApiUrl);
      const data = await response.json();

      // Get the route coordinates from the directions response
      const routeCoordinates = data.routes[0].geometry.coordinates;

      // Create a GeoJSON object for the route
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: routeCoordinates,
        },
      };

      // Check if the route layer already exists, and update it if it does
      if (map.getSource("route")) {
        map.getSource("route").setData(geojson);
      } else {
        // Add the route layer to the map
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
      }

      // Add starting and ending points to the map
      const startingPoint = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: coordinates,
            },
          },
        ],
      };

      if (map.getLayer("start")) {
        map.getSource("start").setData(startingPoint);
      } else {
        map.addLayer({
          id: "start",
          type: "circle",
          source: {
            type: "geojson",
            data: startingPoint,
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#3887be",
          },
        });
      }

      const endingPoint = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: routeCoordinates[routeCoordinates.length - 1],
            },
          },
        ],
      };

      if (map.getLayer("end")) {
        map.getSource("end").setData(endingPoint);
      } else {
        map.addLayer({
          id: "end",
          type: "circle",
          source: {
            type: "geojson",
            data: endingPoint,
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#f30",
          },
        });
      }
      const Newmarker = await new mapboxgl.Marker({ color: "red" }).setLngLat(
        searchCoordinates
      );

      Newmarker.addTo(map);

      setmarker(Newmarker);
      // Calculate the bounds of the route and set the map's zoom to fit the route
      const bounds = routeCoordinates.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(routeCoordinates[0], routeCoordinates[0]));

      map.fitBounds(bounds, {
        padding: 50, // You can adjust the padding as needed
        duration: 1000, // Animation duration in milliseconds
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const SetAddressMarker = (Location) => {
    const addressToGeocode = decodeURIComponent(Location);
    console.log(
      Location.length > 100 ? address.slice(0, 100).length : Location.length
    );

    // Geocode the initial address and set the initial coordinates
    Geocodeaddress(Location.length > 120 ? Location.slice(0, 120) : Location)
      .then((initialCoordinates) => {
        setCoordinates(initialCoordinates);
        const map1 = initializeMap();
        map1.setCenter(initialCoordinates);
        setmap(map1);

        new mapboxgl.Marker().setLngLat(initialCoordinates).addTo(map1);
        // Add popup to the marker
        new mapboxgl.Popup()
          .setLngLat(initialCoordinates)
          .setHTML(
            `
              <div style="background-color: #ffffff; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p style="color: black; font-size: 14px; font: montserrat, font-weight: bold">${addressToGeocode}</p>
              </div>
            `
          )
          .addTo(map1);
      })

      .catch((error) => {
        console.error("Error:", error);
      });

    return () => {
      // Clean up the map when the component unmounts
      mapboxgl.accessToken = null;
    };
  };

  useEffect(() => {
    SetAddressMarker(Location ? Location : "Bhopal");
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center gap-y-[10px] bg-[#222222] min-h-screen">
        <div className="relative w-[80%] mb-8">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg text-[#F9F6EE] font-montserrat border-2 border-[#333] font-medium bg-[#222222] focus:border-emerald-500 focus:outline-none transition-colors"
            onChange={(e) => setsearchaddress(e.target.value)}
            placeholder="Enter Your Location"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#454545] hover:bg-emerald-500 px-6 py-2 rounded-lg font-montserrat font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
        
        <div className="w-[80%] h-[60vh] rounded-xl overflow-hidden shadow-3xl">
          <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="w-full h-full rounded-xl"
            options={options}
            onLoad={map => {
              mapRef.current = map;
            }}
          >
          </GoogleMap>
        </div>
      </div>
      {fetcheddata.length > 0 && (
        <div>
          <div className="w-full h-fit mt-[2vh]">
            <h1 className="mb-[5vh] font-montserrat font-bold text-2xl ">
              Search Results
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              {fetcheddata?.map((item) => (
                <div className="h-fit items-center gap-[2vw] shadow-3xl p-4 rounded-lg bg-[#ff5757] md:max-w-[60vh]">
                  <p className="font-montserrat font-semibold ">
                    {item?.Name_Address}
                  </p>
                  <h2 className="font-montserrat font-bold mt-2 ">
                    Capacity :{" "}
                    {item?.Installed_Capacity_Metric_Tons_per_Annum_MTA}
                  </h2>
                  <button
                    className="hover:bg-emerald-500 mt-[2vh] hover:scale-105 shadow-3xl transition-transform  font-montserrat font-semibold p-2 rounded-lg  w-fit"
                    onClick={() => {
                      handleSearch(item?.Name_Address);
                    }}
                  >
                    Go
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SearchMap;

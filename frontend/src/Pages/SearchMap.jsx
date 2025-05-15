import React, { useEffect, useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { useContext } from "react";
import Context from "../context/Context";
import { Wrapper } from "../Components";

const markers = [
  {
    id: 1,
    name: "Reverse-Vending Machine 1 (APU Main Campus)",
    position: { lat: 3.055274, lng: 101.700643 },
  },
  {
    id: 2,
    name: "Reverse-Vending Machine 2 (Fortune Park)",
    position: { lat: 3.051472, lng: 101.701831 },
  },
  {
    id: 3,
    name: "Reverse-Vending Machine 3 (The Arc)",
    position: { lat: 3.059583, lng: 101.702147 },
  },
  {
    id: 4,
    name: "Reverse-Vending Machine 4 (Vista Shop)",
    position: { lat: 3.054891, lng: 101.695912 },
  },
  {
    id: 5,
    name: "Reverse-Vending Machine 5 (LRT Station)",
    position: { lat: 3.057813, lng: 101.704568 },
  }
];

const SearchMap = () => {
  const { Location, Locationstate, facdata, fetcheddata } = useContext(Context);
  const [searchAddress, setSearchAddress] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 3.055274, lng: 101.700643 }); // APU coordinates

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API_KEY,
  });

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return setActiveMarker(null);
    }
    setActiveMarker(marker);
  };

  const mapRef = useRef();

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

  const handleSearch = () => {
    if (!searchAddress) return;
    
    // Use the Google Maps Geocoding service
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchAddress }, (results, status) => {
      if (status === 'OK') {
        const { lat, lng } = results[0].geometry.location;
        setCenter({ lat: lat(), lng: lng() });
        mapRef.current?.panTo({ lat: lat(), lng: lng() });
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Wrapper>
      <h1>Google Maps Reverse-vending Machine locator</h1>
      <div className="flex flex-col items-center justify-center gap-y-[10px] bg-[#222222] min-h-screen">
        <div className="relative w-[80%] mb-8">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg text-[#F9F6EE] font-montserrat border-2 border-[#333] font-medium bg-[#222222] focus:border-emerald-500 focus:outline-none transition-colors"
            onChange={(e) => setSearchAddress(e.target.value)}
            value={searchAddress}
            placeholder="Enter Your Location"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#454545] hover:bg-emerald-500 px-6 py-2 rounded-lg font-montserrat font-semibold transition-all duration-300 hover:scale-105"
            onClick={handleSearch}
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
              setMap(map);
            }}
          >
            {markers.map(({ id, name, position }) => (
              <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
              >
                {activeMarker === id && (
                  <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <div>
                      <p className="font-montserrat text-black">{name}</p>
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            ))}
          </GoogleMap>
        </div>
      </div>
      {fetcheddata?.length > 0 && (
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

import { MapWrapper, Wrapper } from "./styled";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import SideBar from "../SideBar";
import { useCallback, useMemo, useRef, useState } from "react";

export default function Map() {
  const mapRef = useRef();
  const mapCenter = useMemo(() => ({ lat: 53.893009, lng: 27.567444 }), []);
  const options = useMemo(
    () => ({
      mapId: "831331a29f53a73",
      disableDefaultUI: true,
      clickableIcons: true,
    }),
    []
  );

  const [markers, setMarkers] = useState([]);

  const onMapClick = (e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  };

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  });

  const onLoad = useCallback((map) => {mapRef.current = map; console.log(map)}, []);

  return (
    <Wrapper>
      <SideBar></SideBar>
      <MapWrapper>
        {isLoaded ? (
          <GoogleMap
            center={mapCenter}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={options}
            onLoad={onLoad}
            onClick={onMapClick}
          >
            {markers.map((marker) => (
              <Marker
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
              />
            ))}
          </GoogleMap>
        ) : (
          loadError
        )}
      </MapWrapper>
    </Wrapper>
  );
}

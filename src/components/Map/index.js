import { MapWrapper, Wrapper } from "./styled"
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import SideBar from "../SideBar";

export default function Map() {
  const mapCenter = { lat: 53.893009, lng: 27.567444 }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  })

  return (
    <Wrapper>
      <SideBar></SideBar>
      <MapWrapper>
        {isLoaded ?
          <GoogleMap 
            center={mapCenter} 
            zoom={15} 
            mapContainerStyle={{width:"100%", height:"100%"}}
          >
          </GoogleMap>
          :
          loadError
        }
      </MapWrapper>
    </Wrapper>
  )
}
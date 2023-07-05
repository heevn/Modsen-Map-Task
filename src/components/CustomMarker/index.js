import { Marker } from "@react-google-maps/api"

export default function CustomMarker(marker) {
    const {id} = marker;

    return (
        <Marker key={id} marker={marker} position={null}></Marker>
    )
}
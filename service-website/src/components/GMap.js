import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: "50%",
    height: "35vw",
};

const center = {
    lat: 44.49053022787022,
    lng: 26.023057799296133,
};

const GMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCE47xBUKnz559xYwyzUpjis0QUyMpsSYw",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}>
            <Marker position={center} />
            <></>
        </GoogleMap>
    ) : (
        <></>
    );
};

export default React.memo(GMap);

import { FC} from "react";
import GoogleMapReact from "google-map-react";
import { MapTypeStyle } from "google-map-react";
import { IJob } from "../../interfaces";
import { locationImg } from "../../assets";

interface MapProps {
  location: IJob["location"];
}
interface MapTagProps {
  lat: number;
  lng: number;
}

const MapTag: FC<MapTagProps> = () => {
  return <img src={locationImg} alt="" className="h-[50px]" />;
};

const stylesArray: MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#333A52" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#333947" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#969DAE" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#3B445C" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2A324A" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#2A324A" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#2A324A" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#2A324A" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
];

const Map: FC<MapProps> = ({ location }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 8,
  };

  let city = "some city";
  // const geocoder = new google.maps.Geocoder();

  function geocodeLatLng(geocoder: google.maps.Geocoder) {
    const latlng = {
      lat: location.lat,
      lng: location?.lng || 0,
    };
    try {
      geocoder.geocode({ location: latlng }, (response) => {
        if (response[0]) {
          city = response[0].formatted_address;
        } else {
          window.alert("No results found");
        }
      });
    } catch {
      console.error("Error while geocoding");
    }
  }
  const key = String(process.env.REACT_APP_MAPS_API_KEY);

  const apiHasLoaded = (map: any, maps: any) => {
    geocodeLatLng(new maps.Geocoder());
  };

  return (
    <div className="ss:w-[400px] ss:h-[218px] w-[340px] h-[185px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={{ lat: location.lat, lng: location.lng }}
        options={{
          styles: stylesArray,
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        <MapTag lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

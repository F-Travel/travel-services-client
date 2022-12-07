import GoogleMapReact from 'google-map-react';
import isNumber from "is-number"

const AnyReactComponent = ({ text }) => <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img alt={"open"} src={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"} style={{width: 36, height: 36}} />
</div>;

const GoogleMapPlugin = (props)=> {
    if(isNumber(props?.data?.latitude)) {
      function onClick(obj){ console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);}
      const defaultProps = {
          center: {
            lat: parseFloat(props?.data?.latitude),
            lng: parseFloat(props?.data?.longitude)
          },
          zoom: 15
      };
      return (
          <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCKbIS2qC0sJJuol4rcPZFnNiJsRfzK7j0" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onClick={onClick}
        >
          <AnyReactComponent
            lat={parseFloat(props?.data?.latitude)}
            lng={parseFloat(props?.data?.longitude)}
            text="My Marker"
          />
        </GoogleMapReact>
      )
    }
    else {
      return <div>Loading</div>
    }
}

export default GoogleMapPlugin
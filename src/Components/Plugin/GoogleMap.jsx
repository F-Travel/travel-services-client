import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapPlugin = ()=> {
    const defaultProps = {
        center: {
          lat: 21.0313,
          lng: 105.8516
        },
        zoom: 15
    };
    return (
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    )
}

export default GoogleMapPlugin
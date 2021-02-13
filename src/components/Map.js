import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker";
import LocationInfoBox from './LocationInfoBox';

const Map = ({countriesData, travelData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const closeResults = () => setLocationInfo(null);

    const markers = countriesData.map(ev => {
        const travel = travelData.filter(travel => {
            return travel.location == ev.location;
        })
        if(travel[0]){
            const newTravel = travel[0].data.replace(/\n/g, "<br />");
            return <LocationMarker key={ev.country_code} lat={ev.latitude} lng={ev.longitude} onClick={() => setLocationInfo({id: ev.country_code, title: ev.location, travel: newTravel})}/>
        }else{
            return <LocationMarker key={ev.country_code} lat={ev.latitude} lng={ev.longitude} onClick={() => setLocationInfo({id: ev.country_code, title: ev.location})}/>
        }
        
    })
    return ( 
        <div className="map">
            <GoogleMapReact  onClick={locationInfo ? closeResults : null}
                bootstrapURLKeys={{ key: 'GOOGLE_API_KEY'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                
                {markers}
            </GoogleMapReact>
            {(locationInfo) && <LocationInfoBox info={locationInfo} closeInfoBox={closeResults} />}
        </div>
     );
}

Map.defaultProps = {
    center: {
        lat: 46.097864435533815, 
        lng: 19.666813720333636
    },
    zoom: 6
}
 
export default Map;

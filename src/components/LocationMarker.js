import { Icon } from '@iconify/react';
//import locationIcon from '@iconify/icons-mdi/fire-alert';
import locationIcon from '@iconify/icons-mdi/info-circle';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (  
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" key={lat}/>
        </div>
    );
}
 
export default LocationMarker;
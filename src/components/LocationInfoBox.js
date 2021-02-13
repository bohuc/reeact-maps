import windowClose from '@iconify/icons-mdi/window-close';
const LocationInfoBox = ({ info, closeInfoBox }) => {
    return ( 
        <div className="location-info">
            <div className="close-info" onClick={closeInfoBox}><svg width="22" height="22" dangerouslySetInnerHTML={{ __html: windowClose.body }}></svg></div>
            <h2>Corona Travel INFO</h2>
            <ul>
                <li>Country Code: <strong>{info.id}</strong></li>
                <li>Location: <strong>{info.title}</strong></li>
            </ul>
            
            {info.travel && <p dangerouslySetInnerHTML={{ __html: info.travel }}></p>}
        </div>
     );
}
 
export default LocationInfoBox;
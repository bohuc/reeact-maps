import { useEffect, useState } from 'react';
import Map from "./components/Map";
import Loader from "./components/Loader";
import axios from 'axios';

function App() {
  //ZA POZARE
  //const [eventData, setEventData] = useState([]);
  const [countriesData, setCountriesData] = useState([])
  const [travelData, setTravelData] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    const countriesLink = "https://www.trackcorona.live/api/countries"
    const travelLink = "https://www.trackcorona.live/api/travel"

    const countries = axios.get(countriesLink);
    const travel = axios.get(travelLink);

    axios.all([countries, travel]).then(axios.spread((...responses) => {
      const countriesData = responses[0].data.data
      const travelData = responses[1].data.data
      setCountriesData(countriesData)
      setTravelData(travelData)
      setLoading(false)
    })).catch(err => {
      console.log("Error in fetching ", err);
    })

    //reservni korona info
    // const options = {
    //   method: 'GET',
    //   url: 'https://coronavirus-map.p.rapidapi.com/v1/summary/latest',
    //   headers: {
    //     'x-rapidapi-key': '7a1047aa2emsh0416703aef89930p1bfb04jsn85d0c75a2af6',
    //     'x-rapidapi-host': 'coronavirus-map.p.rapidapi.com'
    //   }
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
    
    //ZA POZARE AXIOS
    // setLoading(true);
    // axios
    //   .get('https://www.trackcorona.live/api/countries')
    //   .then((res) => {
    //     setEventData(res.data.events);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("Error in fetching ", err);
    //   });


    //ZA POZARE
    // const fetchEvents = async () => {
    //   setLoading(true);
    //   const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');

    //   const {events} = await res.json();

    //   setEventData(events);
    //   setLoading(false);
    // }

    // fetchEvents();

    //console.log(eventData);

    //ZA POZARE DOLE
    //{(!loading && eventData) ? <Map eventData={eventData}/> : <Loader />}
  }, [])
  return (
    
    <div>
      {(!loading && countriesData) ? <Map countriesData={countriesData} travelData={travelData}/> : <Loader />}
    </div>
  );
}

export default App;

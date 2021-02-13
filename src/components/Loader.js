import spinner from './sample.gif'
const Loader = () => {
    return ( 
        <div className="loader">
            <img src={spinner} alt="Loading"/>
            <h1>Učitavam</h1>
        </div>
     );
}
 
export default Loader;

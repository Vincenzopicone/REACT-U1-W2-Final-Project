import CardWeather from "./CardWeather"
import Search from "./Search";



const Gallery = () => {

    return (
    <section className="d-flex justify-content-center align-items-center flex-column p-3">
        <Search/>
        <CardWeather city={"Milano"} />   
    </section>
    )
}

export default Gallery;
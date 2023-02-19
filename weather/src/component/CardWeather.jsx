/* import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {Container, Col, Row} from "react-bootstrap"


function CardWeather() { 
  const dispatch = useDispatch(); 
    const currentCityName = useSelector((city) => city.name)
    const currentCountry = useSelector((country)=> country.country)
    const currentWeather = useSelector((current)=> current.weather)
    const currentTemp = useSelector((current)=> current.temp)
    const currentWind = useSelector((current)=> current.wind)

   
    const getCity = async () => {  
     
    
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=d9bf63aa82f94227711a4145cb292000&units=metric`)
          if (response.ok) {
            const data = await response.json()
            dispatch({type:"CITY", payload: data.name})
            dispatch({type:"COUNTRY", payload: data.sys})       
            dispatch({type: "WEATHER", payload: data.weather[0]})
            dispatch({type: "TEMP", payload: data.main})
            dispatch({type: "WIND", payload: data.wind})
            
          } else {
            alert('Error fetching results')
          }
        } catch (error) {
          console.log(error)
        }
      }

    
        useEffect(() => {
        getCity()
      },[currentCityName])

  return (

    <Container>
      <Row className='flex-column justify-content-center align-items-center mb-4'>
        <Col md={5} className="text-center">
        <h1 className='cardWeather bg-secondary text-light p-2'><strong>{currentCityName},  {currentCountry.country} </strong></h1>
        </Col>      
        <Col md={5} className="text-center uppercase">
          <h2 className='cardWeather  bg-secondary text-light description m-3'>{currentWeather.description} <span><img src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} alt="CurrentIcon" /></span></h2>
        </Col>
      </Row>
      <Row>
        <Col md={2} className='cardWeather  p-2 mx-3 my-2 d-flex flex-column justify-content-center align-items-center'>
           <h3> Attuale</h3>
           <h2>{currentTemp.temp}°</h2>                     
        </Col>
        <Col md={2} className='cardWeather  p-2  mx-3 my-2  d-flex flex-column justify-content-center align-items-center'>
           <h3> Minima</h3>
           <h2>{currentTemp.temp_min}°</h2>                     
        </Col>
        <Col md={2} className='cardWeather  p-2 mx-3 my-2  d-flex flex-column justify-content-center align-items-center'>
           <h3> Massima</h3>
           <h2>{currentTemp.temp_max}°</h2>                     
        </Col>
        <Col md={2} className='cardWeather  p-2 mx-3 my-2  d-flex flex-column justify-content-center align-items-center'>
           <h3> Percepita</h3>
           <h2>{currentTemp.feels_like}°</h2>                     
        </Col>
        <Col md={2} className='cardWeather  p-2 mx-3 my-2  d-flex flex-column justify-content-center align-items-center'>
           <h3> Vento</h3>
           <h2>{currentWind.speed} km/h</h2>                     
        </Col>
      </Row>
  
    </Container>


  
  );
}

export default CardWeather;


  {/* <Card style={{ width: '18rem' }} className="text-center bg-dark">
      <Card.Body key={weatherContent.city.id}>
        <Card.Title className='text-light'><h3><strong>{currentCityName}, {currentCountry.country}</strong></h3></Card.Title>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Temperatura:{currentTemp.temp}°</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Min:{currentTemp.temp_min}°</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Max:{currentTemp.temp_max}°</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Percepita:{currentTemp.feels_like}°</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Lat: {currentLat} ° Lon: {currentLon} °</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>{currentWeather[0].main}</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>{currentWeather[0].descriptions}</Card.Text>

        <Button variant="success" onClick={()=>{dispatch({
         type: "ADD_TO_FAV",
         payload: weatherContent
    })}}>Aggiungi ai preferiti</Button>
      </Card.Body>

    </Card> */}
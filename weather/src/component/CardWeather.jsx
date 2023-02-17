import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";


function CardWeather(props) {
    const weatherContent = useSelector((state) => state.city)
    console.log(weatherContent)
    const dispatch = useDispatch();
    const name = props.city;

   

    const getWeather = async () => {        
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d9bf63aa82f94227711a4145cb292000&units=metric`)
          if (response.ok) {
            const data = await response.json()
            dispatch({type:"CURRENT", payload:{city: data}})
          } else {
            alert('Error fetching results')
          }
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=> {
        getWeather()
      },[])

  return (
    <Card style={{ width: '18rem' }} className="text-center bg-dark">
      <Card.Body key={weatherContent.city.id}>
        <Card.Title className='text-light'><h3><strong>{weatherContent.city.name}, {weatherContent.city.sys.country}</strong></h3></Card.Title>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Temperatura:{weatherContent.city.main.temp.toFixed(0)}°</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Min:{weatherContent.city.main.temp_min.toFixed(0)}°</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Max:{weatherContent.city.main.temp_max.toFixed(0)}°</Card.Text>
        <Card.Text className='rounded text-center p-2 bg-secondary text-light'>Lat: {weatherContent.city.coord.lat} ° Lon: {weatherContent.city.coord.lon} °</Card.Text>
        <Button variant="success" onClick={()=>{dispatch({
         type: "ADD_TO_FAV",
         payload: weatherContent
    })}}>Aggiungi ai preferiti</Button>
      </Card.Body>
    </Card>
  );
}

export default CardWeather;
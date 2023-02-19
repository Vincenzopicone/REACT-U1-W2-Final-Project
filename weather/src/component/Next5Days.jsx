import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {Container, Col, Row} from "react-bootstrap"


function Next5Days() { 
  const dispatch = useDispatch(); 
    const currentCityName = useSelector((city) => city.name)
    const Next5Days = useSelector((state) => state.next5Days)
   
    const getCity5Days = async () => {  
     
    
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCityName}&appid=d9bf63aa82f94227711a4145cb292000&units=metric`)
          if (response.ok) {
            const daily = await response.json();
            console.log(daily)
            dispatch({type: "NEXT_5_DAYS", payload: daily})
            
          } else {
            alert('Error fetching results')
          }
        } catch (error) {
          console.log(error)
        }
      }

    
        useEffect(() => {
        getCity5Days()
      },[currentCityName])

  return (

    <Container className="d-flex justify-content-center align-items-center">
        
        {Next5Days &&
        Next5Days.list.filter((e, i) => i % 8 === 0)
        .map ((day, i) => (
            <section className="cardWeather cardFuture bg-secondary text-light d-flex flex-column p-3 m-2 text-center">
            <h5>Fra {i+1} giorno</h5>
            <article>
                <p>Temperatura:</p>
                <h3>{day.main.temp} °</h3>
                <p>Previsioni:</p>
                <p className="description">{day.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="CurrentIcon" />
            </article>
        </section>
        ))
    }
        
    </Container>
    )
};
  export default Next5Days;


  
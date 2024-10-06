import axios from "axios"
import { useState } from "react"
function Weather()
{
  const[wea,setwea]=useState("")
  const[temp,settemp]=useState("")
  const[des,setdes]=useState("")
  const[city,getcity]=useState("")
  function value(evt)
  {
    getcity(evt.target.value)
  }
  function getweather()
  {
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad630e16b8dce2c8711f3f04ac02a3f2`)
    weather.then(function(data){
      console.log(data.data)
      setwea(data.data.weather[0].main)
      setdes(data.data.weather[0].description)
      settemp(data.data.main.temp)
    })
  }
    return(
      <>
      <div className="bl">
        <div className="gr">
            <h1>Weather Report</h1>
            <p>I can give a weather report about your city</p>
            <input value={city} onChange={value} placeholder="Enter your city"></input><br></br>
            <button onClick={getweather}>Get Report</button>
           <h2>Weather : {wea}</h2>
           <h2>Temperature :{temp} </h2>
           <h2>Description : {des}</h2>
        </div>
      </div>
      </>
    )
}
export default Weather
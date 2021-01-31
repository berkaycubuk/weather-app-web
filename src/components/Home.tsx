import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

import { weatherConditions } from '../utils/weatherConditions'

const Home = () => {
  const [fetched, setFetched] = useState(false)
  const [weatherData, setWeatherData] = useState({
    current: {
      day: "Sunday",
      temp_c: 9.0,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
      }
    },
    forecast: {
      forecastday: [
        {
          day: {
            day: "Monday",
            avgtemp_c: 7.0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
            }
          }
        },
        {
          day: {
            day: "Tuesday",
            avgtemp_c: 7.0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
            }
          }
        },
        {
          day: {
            day: "Wednesday",
            avgtemp_c: 7.0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
            }
          }
        }
      ]
    }
  })

  const apiSetter = () => {
    // Get yourself API key from https://weatherapi.com
    let apiKey = ''
    let city = 'Tekirdag'
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}=${city}&days=3`
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let cookie = Cookies.get('weatherData')

    if (!fetched) {
      if (cookie && cookie !== undefined) {
        setWeatherData(JSON.parse(cookie))
        setFetched(true)
      } else {
        axios.get(url)
        .then((res) => {
          let response = {
            current: {
              day: days[new Date(res.data.current.last_updated).getDay()],
              temp_c: res.data.current.temp_c,
              condition: res.data.current.condition
            },
            forecast: {
              forecastday: [
                {
                  day: {
                    day: days[new Date(res.data.forecast.forecastday[0].date).getDay()],
                    avgtemp_c: res.data.forecast.forecastday[0].day.avgtemp_c,
                    condition: res.data.forecast.forecastday[0].day.condition
                  }
                },
                {
                  day: {
                    day: days[new Date(res.data.forecast.forecastday[1].date).getDay()],
                    avgtemp_c: res.data.forecast.forecastday[1].day.avgtemp_c,
                    condition: res.data.forecast.forecastday[1].day.condition
                  }
                },
                {
                  day: {
                    day: days[new Date(res.data.forecast.forecastday[2].date).getDay()],
                    avgtemp_c: res.data.forecast.forecastday[2].day.avgtemp_c,
                    condition: res.data.forecast.forecastday[2].day.condition
                  }
                }
              ]
            }
          }

          Cookies.set('weatherData', response, { expires: 1/24 })

          setWeatherData(response)
          setFetched(true)
        })
        .catch((err) => {
          console.log(err)
          return undefined
        })
      }
    }
  }

  apiSetter()

  return (
    <div className="container">

      <div className="location-and-time">

        <div className="location">Tekirdag, Turkey</div>
        <div className="time">{ weatherData.current.day }, 1 AM</div>

      </div>

      <div className="weather-and-temperature">

        <img className="weather" src={ weatherConditions(weatherData.current.condition) } alt="weather" />
        <div className="temperature">{ weatherData.current.temp_c }&#176;</div>

      </div>
      
      <div className="weather-days">

        {weatherData.forecast.forecastday.map((forecast, index) => (
          <div className="weather-day" key={index}>
            <img className="weather-icon" src={ weatherConditions(forecast.day.condition)  } alt="weather" />
            <div className="weather-details">
              <div className="day-name">{ forecast.day.day }</div>
              <div className="day-degree">{ forecast.day.avgtemp_c }&#176;</div>
            </div>
          </div>
        ))}
        
      </div>

    </div>
  )
}

export default Home

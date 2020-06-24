import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import { Spinner } from '../components'

import './screens.css'

export const WeatherScreen = () => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch('https://www.metaweather.com/api/location/924938/')
      const resultData = await response.json()
      setData(resultData)
      setLoading(false)
      console.log(data)
    }
    fetchWeather()
  }, [])

  useEffect(() => {}, [data])

  return (
    <div className='weather-screen'>
      { isLoading 
          ? <Spinner /> 
          : <React.Fragment>
              <h1>{data.title}</h1>
              {data.consolidated_weather.map((element, index) => {

                return (

                <Card style={{width: '100%'}} >
                  <div>{element.applicable_date}</div>
                  <div onClick={() => setData(1)}>{element.weather_state_name}</div>
                  <div>Humidity: {element.humidity}</div>
                </Card>
                )
              })}
          </React.Fragment>
      }
    </div>
  )
}

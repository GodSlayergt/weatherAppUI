import React from 'react';
import { DateTime } from 'luxon'
import  './HourlyForecast.css'


 export const HourlyForecast = ({data})=>{

    const format = "yyyy-MM-dd HH:mm:ss";
    const time = DateTime.fromFormat(data.date,format).toFormat('HH:mm')
    const icon = `https://openweathermap.org/img/wn/${data.icon}@2x.png`
    const temp =parseFloat(data.temp).toFixed(0)

    return <div className="hourly-forecast" data-testid="hourly-forecast">
        <p className='hourly-forecast__time'>{time}</p>
        <img alt="Weather Icon" src={icon}></img>
        <p className='hourly-forecast__temp'>{temp}&deg;</p>
    </div>
}

export const HourlyForecastMap = ({weatherData})=>{

    const res = weatherData.map((data,index)=><HourlyForecast key={index} data={data}/>)


    return <div className='hourly-forecast-map' >{res}</div>
}
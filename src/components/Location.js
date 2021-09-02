import React, { useState } from 'react'
import dateGetter from './../dateGetter'

const Location = () => {
  const [weather, setWeather] = useState({})
  return (

    		<div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 60) ? 'app warm' : 'app') : 'app'}>
                {(typeof weather.main != 'undefined') ? (
				{typeof weather.main != 'undefined'
					? 'all response data following'
					: ''}
				<div className='location-box'>
					<div className='location'>
						{weather.name}, {weather.sys.country}
					</div>
					<br></br>
					<div className='date'>{dateGetter(new Date())}</div>
					<div className='weather-box'>
						<div className='temperature'>{weather.main.temp}°F</div>
						<div className='weather'>{weather.weather[0].main}</div>
					</div>
				</div>
                ) : ('')}
			
		)
}
export default Location
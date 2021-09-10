import React, { useState }from 'react'
// import { Route } from 'react-router-dom'
import './App.css';
import { apiUrl, apiKey } from './apiConfig'

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  
  const search = (event) => {
    if (event.key === 'Enter') {
       fetch(`${apiUrl}/weather?q=${query}&units=imperial&APPID=${apiKey}`)
       .then((res) => res.json())
       .then((res) => {
         setWeather(res)
        setQuery('')
        console.log(res)
        })
    }
  }

  const dateGetter = (d) => {
  const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
 const day = days[d.getDay()]
 const date = d.getDate()
 const month = months[d.getMonth()]
 const year = d.getFullYear()
 return `${day}, ${month} ${date} ${year}` 
}
  return (
		<div className={(typeof weather.main != 'undefined') ? ((weather.weather[0].main === 'Clouds') ? 'app-cloudy' : 'app') : 'app-base'}>
			<main>
				<div className='search-bar'>
					<input type='text'
           className='search-input'
            placeholder='Search'
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
            />
				</div>
        {(typeof weather.main != 'undefined') ? (
			<div>
				<div className='location-box'>
					<div className='location'>{weather.name}, {weather.sys.country}</div>
					<br></br>
					<div className='date'>{dateGetter(new Date())}</div>
					<div className='weather-box'>
            <div className="temperature">{Math.round(weather.main.temp)}°F</div>
						<div className='weather'>{weather.weather[0].main}</div>
					</div>
				</div>
			</div>
				) : ('') }
			</main>
		</div>
	)
}

export default App;

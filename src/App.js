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
       .then((result) => {
         setWeather(result)
        setQuery('')
        console.log(result)
        console.log(weather)
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
		<div className='App'>
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
				<div className='location-box'>
					<div className='location'>{weather.name}</div>
					<br></br>
					<div className='date'>{dateGetter(new Date())}</div>
					<div className='weather-box'>
            <div className="temperature">80 Fahrenheit</div>
						<div className='weather'>Sunny</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App;

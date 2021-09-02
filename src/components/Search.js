import React, { useState } from 'react'
// import { Route } from 'react-router-dom'
import './App.css'
import { apiUrl, apiKey } from './apiConfig'
import axios from 'axios'

export const Search = () => {
      const [query, setQuery] = useState('')
			const [weather, setWeather] = useState({})
	const search = (event) => {
		if (event.key === 'Enter') {
			axios(`${apiUrl}/weather?q=${query}&units=imperial&APPID=${apiKey}`)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result)
					setQuery('')
					console.log(result)
					console.log(weather)
				})
		}
	}
	return <div>
        <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 60) ? 'app warm' : 'app') : 'app'}>
			<main>
				<div className='search-bar'>
					<input type='text'
           className='search-input'
            placeholder='Search'
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
            />
				</div></main></div>
    </div>
}

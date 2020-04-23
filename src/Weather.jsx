import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {logout} from "./actions";
import WeatherForm from "./WeatherForm";
import DisplayWeather from "./DisplayWeather";
 const Weather = () => {
     const username = useSelector(state => state.username);
     const weather = useSelector(state => state.weather);
     const dispatch = useDispatch();
        return (
            <div>
                <button type="button" onClick={() => dispatch(logout())}>Logg ut </button>
                <h1>Hei {username}!</h1>
                {weather === null ? <WeatherForm /> : <DisplayWeather weather={weather} />}
            </div>
        )
}

export default Weather;

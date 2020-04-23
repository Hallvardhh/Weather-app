import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getWeather} from "./actions";


const WeatherForm = () => {
    const dispatch = useDispatch();
    const [pos, setPos] = useState({lat: 0, lon: 0});
    const handleChange = (target) => {
        setPos({...pos, [target.name]: target.value})
    };
    return (
        <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(getWeather(pos))
        }}>
            <input type="number"  name="lat" value={pos.lat} required onChange={(event) => handleChange(event.target)}/>
            <input type="number" name="lon" value={pos.lon} required onChange={(event) => handleChange(event.target)}/>
            <input type="submit" />
        </form>
        </div>
    )
};


export default WeatherForm;

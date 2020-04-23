import React from 'react';
import PropTypes from 'prop-types';

const DisplayWeather = ({weather}) => {
    const filteredData = weather.product.time.filter(ele => ele.location.hasOwnProperty('temperature'))
    const formatDateString = (str) =>  {

    }
    return (
        <div>
            {filteredData.map(ele => {
                return(
                <div>
                <span>{ele.from}</span>
                <span>Temperatur: {ele.location.temperature.value}</span>
                </div>
                )
            })}
        </div>
    )
};

DisplayWeather.propTypes = {}

export default DisplayWeather;

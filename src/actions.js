export const login = (userName) => ({
    type: "LOGIN",
    payload: userName
});

export const logout = () => ({
    type: "LOGOUT"
});

export const getWeather = (place) => ({
    type: 'GET_WEATHER',
    payload: place
});

export const getWeatherSuccess = (weather) => ({
    type: 'GET_WEATHER_SUCCESS',
    payload: weather
});

export const getWeatherFailure = () => ({
    type: 'GET_WEATHER_FAILURE'
});
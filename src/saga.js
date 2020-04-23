import {takeLatest, call, put} from "redux-saga/effects";
import {getWeatherSuccess} from "./actions";

const  fetchMetData = async(pos) =>{
    const response = await fetch(`https://api.met.no/weatherapi/locationforecast/1.9/.json?lat=${pos.lat}&lon=${pos.lon}`)
    return await response.json();
}

function* fetchWeather(action) {
    try {
        const weatherData = yield call(fetchMetData, action.payload)
        yield put(getWeatherSuccess(weatherData))
    }catch (e) {
        console.log(e.message)
    }

}
export default function* watchGetWeather() {
  yield takeLatest('GET_WEATHER', fetchWeather)
}

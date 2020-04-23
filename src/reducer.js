
const reducer = (state = {isLoggedIn: false, username: null, weather: null}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {...state, isLoggedIn: true, username: action.payload }
        case "LOGOUT":
            return {...state, isLoggedIn: false, username: null, weather: null}
        case "GET_WEATHER_SUCCESS":
            return {...state, weather: action.payload }        
        default:
            return state;
    }

}

export default reducer;
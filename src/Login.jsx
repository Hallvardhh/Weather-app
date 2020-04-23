import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from './actions';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const handleChange = (val) => {
        setUsername(val)
    }
    return (
        <div>
            <h1>Logg inn</h1>
            <form onSubmit={(e) => { e.preventDefault(); dispatch(login(username))}}>
                <label>Username:</label>
                <input type="text" value={username} required onChange={(event) => handleChange(event.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage

import React from 'react';
import useLocalStorage from './Uselocalstorage';


export default function LoginPage() {
    const [username, setUsername] = useLocalStorage('username', '');
    const [password, setPassword] = useLocalStorage('password', '');



    const handleLogin = () => {

    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
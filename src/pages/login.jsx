import { useState } from "react"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    

    // How react works is that everytime something changes on a page it rerenders
    // so if you have a regular variable

    // var username = '';

    // it will reset to its original value
    // useState() saves the variable inside of the component even beyond component rerenders
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const login = (e) => {
        e.preventDefault();

        console.log('username: ' + username);
        console.log('password: ' + password);

    }

    const googleLogin = ()=>{
        signInWithPopup(auth, provider)
            .then(()=>{
                navigate('/')
            })

    }
    

    return (
        <>
            <form onSubmit={login}>
                <input type="text" name="username" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="text" name="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type='submit'>Login</button>
                <button type="button" onClick={googleLogin}>Login with google</button>
            </form>
        </>
    )
}

export default Login
import { useState } from "react"

const Login = () => {
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
    

    return (
        <>
            <form onSubmit={login}>
                <input type="text" name="username" placeholder="usernames" onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="text" name="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login
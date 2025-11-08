import App from "./App";
import Login from "./pages/login";
import Signup from "./pages/signin";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },

]

export default routes;
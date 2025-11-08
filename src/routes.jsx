import App from "./App";
import Login from "./pages/login";
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    },

    
]

export default routes;
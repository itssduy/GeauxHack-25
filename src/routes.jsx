import App from "./App";
import Login from "./pages/login";
import Signup from "./pages/signin";
import Blog from "./pages/blog";
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
            },
            {
                 path: '/blog',
                element: <Blog />
            }
        ]
    },

]

export default routes;
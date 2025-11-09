import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import RootLayout from "../Layout/RootLayout";
import Herosection from "../Components/Herosection";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Regester from "../Pages/Regester";




const router = createBrowserRouter([
    {
        path: '/',
        element:<RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>, 
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Regester></Regester>,
            }
        ]

    },

]);


export default router;
import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import RootLayout from "../Layout/RootLayout";
import Herosection from "../Components/Herosection";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Regester from "../Pages/Regester";
import ModelDetils from "../Pages/ModelDetils";
import AddnewModel from "../Pages/AddnewModel";




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
            },
            {
                path: '/models/:id',
                loader: ({params}) => fetch(`http://localhost:3000/models/${params.id}`),
                element: <ModelDetils></ModelDetils>,
            },
            {
                path: '/addmodel',
                element: <AddnewModel></AddnewModel>,
            }
        ]

    },

]);


export default router;
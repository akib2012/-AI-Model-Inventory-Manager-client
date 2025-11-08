import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import RootLayout from "../Layout/RootLayout";
import Herosection from "../Components/Herosection";




const router = createBrowserRouter([
    {
        path: '/',
        element:<RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Herosection></Herosection>, 
            }
        ]

    },

]);


export default router;
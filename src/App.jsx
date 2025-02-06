import 'regenerator-runtime/runtime';
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Comida from './components/Food/Comida.jsx'
import Reservas from './components/Reservas.jsx'

//Crear la ruta de navegación entre páginas y que componente renderizar en cada una
const router=createBrowserRouter([
    {
        path:'/',
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/carta',
                element: <Comida/>
            },
            {
                path:'/reservas',
                element: <Reservas/>
            }
        ]
    }
])

function App() {
    return(
        <RouterProvider router={router}/>
    )
}

export default App

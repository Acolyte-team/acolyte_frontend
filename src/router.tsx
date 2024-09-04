import { createBrowserRouter } from 'react-router-dom'
import Userlayout from "./layout/Userlayout"
import Home from './pages/home/Home.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Userlayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
])
export default router
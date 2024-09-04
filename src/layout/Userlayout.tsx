import Navbar from "../components/navbar/Navbar"
import { Outlet } from 'react-router-dom'

const Userlayout: React.FC = () => {
    return (

        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Userlayout
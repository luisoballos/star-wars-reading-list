import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <div className="bg-dark mx-auto" style={{"maxWidth":"2000px"}}>
            <Navbar />
                <Outlet />
            <Footer />
        </div>
    )
}
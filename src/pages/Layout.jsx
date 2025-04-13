import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Home } from "../pages/Home.jsx";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}
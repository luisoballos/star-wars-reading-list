// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    useParams,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Favorites } from "./pages/Favorites";
import { Description } from "./pages/Description";

export const router = createBrowserRouter(
    createRoutesFromElements(
    // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path= "/description/:parent/:id" element={<Description />} />
      </Route>
    )
);
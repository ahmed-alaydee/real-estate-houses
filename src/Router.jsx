import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PropertyDetails from "./pages/PropertyDetails"
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/property/:id",
        element:<PropertyDetails/>
    }
]);
export default router
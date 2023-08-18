import { Router,Route, Routes } from "react-router-dom";
import App from "../App";
import ImageDetails from "../components/ImageDetails/ImageDetail";
function CustomRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/image/:id" element={<ImageDetails />} />
            </Routes>
        </>
    )
}

export default CustomRoutes;
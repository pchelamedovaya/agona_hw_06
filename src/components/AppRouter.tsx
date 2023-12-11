import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import LoginPage from "../pages/LoginPage.tsx";
import CollectionPage from "../pages/CollectionPage.tsx";
import Navbar from "./UI/Navbar/Navbar.tsx";
import CollectionDetailPage from "../pages/CollectionDetailPage.tsx";

interface AppRouterProps {
    shouldShowNavbar: boolean;
}

const AppRouter: FC<AppRouterProps> = ({shouldShowNavbar}) => {
    return (
        <div>
            {shouldShowNavbar && <Navbar/>}
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/collection" element={<CollectionPage/>}/>
                <Route path="/collection/:id" element={<CollectionDetailPage/>}/>
                <Route path="*" element={<CollectionPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;
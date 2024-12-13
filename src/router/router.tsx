import { Outlet, RouteObject } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import DetailsPage from "../page/DetailsPage";
import MainPage from "../page/MainPage";

const router: RouteObject [] = [
    {
        element: <div>
            <div className="position-fixed w-100 z-1">
            <NavbarComponent />
            </div>
            <Outlet />
        </div>,
        path: '/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <DetailsPage />,
                path : '/:id'
            }
        ]
    }
]

export default router
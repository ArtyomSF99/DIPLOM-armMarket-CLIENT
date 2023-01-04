
import CategoryManagement from "../pages/CategoryManagement";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";



export const privateRoutes = [
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
]

export const publicRoutes = [
    {path:'/login', component: <Login/>, exact: true },
    {path:'/registration', component: <Registration/>, exact: true },
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
]

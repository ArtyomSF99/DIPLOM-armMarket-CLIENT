
import AddProduct from "../pages/AddProduct";
import CategoryManagement from "../pages/CategoryManagement";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProducts from "../pages/MyProducts";
import Registration from "../pages/Registration";



export const privateRoutes = [
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
    {path:'/add-product', component: <AddProduct/>, exact: true },
    {path:'/my-products', component: <MyProducts/>, exact: true },
]

export const publicRoutes = [
    {path:'/login', component: <Login/>, exact: true },
    {path:'/registration', component: <Registration/>, exact: true },
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
]

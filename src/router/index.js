
import ProductById from "../pages/ProductById";
import AddProduct from "../pages/AddProduct";
import CategoryManagement from "../pages/CategoryManagement";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainProducts from "../pages/MainProducts";
import MyProducts from "../pages/MyProducts";
import Registration from "../pages/Registration";



export const privateRoutes = [
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
    {path:'/add-product', component: <AddProduct/>, exact: true },
    {path:'/my-products', component: <MyProducts/>, exact: true },
    {path:'/main-products', component: <MainProducts/>, exact: true },
    {path: '/product/:id', component: <ProductById/>, exact: true},
]

export const publicRoutes = [
    {path:'/login', component: <Login/>, exact: true },
    {path:'/registration', component: <Registration/>, exact: true },
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
    {path:'/main-products', component: <MainProducts/>, exact: true },
    {path: '/product/:id', component: <ProductById/>, exact: true},
]

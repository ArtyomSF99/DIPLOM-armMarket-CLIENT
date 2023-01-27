
import ProductById from "../pages/ProductById";
import AddProduct from "../pages/AddProduct";
import CategoryManagement from "../pages/CategoryManagement";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainProducts from "../pages/MainProducts";
import MyProducts from "../pages/MyProducts";
import Registration from "../pages/Registration";
import MyProfile from "../pages/MyProfile";
import UserProfile from "../pages/UserProfile";
import MyChats from "../pages/MyChats";




 const userRoutes = [
    {path:'/home', component: <Home/>, exact: true },
    {path:'/add-product', component: <AddProduct/>, exact: true },
    {path:'/my-products', component: <MyProducts/>, exact: true },
    {path:'/main-products', component: <MainProducts/>, exact: true },
    {path: '/product/:id', component: <ProductById/>, exact: true},
    {path: '/my-profile/:id', component: <MyProfile/>, exact: true},
    {path: '/user-profile/:id', component: <UserProfile/>, exact: true},
    {path: '/my-chats', component: <MyChats/>, exact: true}

]
 const adminRoutes = [
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
    {path:'/add-product', component: <AddProduct/>, exact: true },
    {path:'/my-products', component: <MyProducts/>, exact: true },
    {path:'/main-products', component: <MainProducts/>, exact: true },
    {path: '/product/:id', component: <ProductById/>, exact: true},
    {path: '/my-profile/:id', component: <MyProfile/>, exact: true},
    {path: '/user-profile/:id', component: <UserProfile/>, exact: true},
    {path: '/my-chats', component: <MyChats/>, exact: true}

]

 const adminModeratorRoutes = [
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
    {path:'/add-product', component: <AddProduct/>, exact: true },
    {path:'/my-products', component: <MyProducts/>, exact: true },
    {path:'/main-products', component: <MainProducts/>, exact: true },
    {path: '/product/:id', component: <ProductById/>, exact: true},
    {path: '/my-profile/:id', component: <MyProfile/>, exact: true},
    {path: '/user-profile/:id', component: <UserProfile/>, exact: true},
    {path: '/my-chats', component: <MyChats/>, exact: true}

]

 const moderatorRoutes = [
    {path:'/home', component: <Home/>, exact: true },
    {path:'/category-management', component: <CategoryManagement/>, exact: true },
    {path:'/add-product', component: <AddProduct/>, exact: true },
    {path:'/my-products', component: <MyProducts/>, exact: true },
    {path:'/main-products', component: <MainProducts/>, exact: true },
    {path: '/product/:id', component: <ProductById/>, exact: true},
    {path: '/my-profile/:id', component: <MyProfile/>, exact: true},
    {path: '/user-profile/:id', component: <UserProfile/>, exact: true},
    {path: '/my-chats', component: <MyChats/>, exact: true}

]

 const publicRoutes = [
    {path:'/login', component: <Login/>, exact: true },
    {path:'/registration', component: <Registration/>, exact: true },
    {path:'/home', component: <Home/>, exact: true },
    {path:'/main-products', component: <MainProducts/>, exact: true },
    {path: '/product/:id', component: <ProductById/>, exact: true},
    {path: '/user-profile/:id', component: <UserProfile/>, exact: true},
]

export const appRoutes = (status) => {
    switch(status){
        case "user":
            return userRoutes
        case "admin":
            return adminRoutes
        case "admin_moderator":
            return adminModeratorRoutes
        case "moderator":
            return moderatorRoutes    
        default:
            return publicRoutes
    }
}
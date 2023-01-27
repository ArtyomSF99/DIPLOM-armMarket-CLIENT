
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { publicRoutes, privateRoutes, appRoutes } from '../router';
import {useSelector} from "react-redux"

const AppRouter = () => {
    const my_info = useSelector(state => state.user.user)
    return (
         
    my_info &&  <Routes>
            {appRoutes(my_info.status).map(route =>
                <Route
                    element={
                        route.component}
                    path={route.path} exact={route.exact} key={route.path} />
            )}
            <Route path="*" element={<Home />} />
            </Routes>
           
            
    )
}

export default AppRouter

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { publicRoutes, privateRoutes } from '../router';
import {useSelector} from "react-redux"

const AppRouter = () => {
    const isAuth = useSelector( state => state.isAuth.isAuth)
    return (
            isAuth
            ?<Routes>
            {privateRoutes.map(route =>
                <Route
                    element={
                        route.component}
                    path={route.path} exact={route.exact} key={route.path} />
            )}
            <Route path="*" element={<Home />} />
            </Routes>
            :<Routes>
            {publicRoutes.map(route =>
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
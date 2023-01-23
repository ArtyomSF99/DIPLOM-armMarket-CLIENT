import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import classes from './NavBar.module.css'
import AuthService from '../../../services/AuthService';
import MyButton from '../button/MyButton';
import { API_URL } from '../../../http';
import MyAvatar from '../avatar/MyAvatar';

const Navbar = () => {
    const[isUserNameHovered, setIsUserNameHovered] = useState(false)
    const[isNavigationHovered, setIsNavigationHovered] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector( state => state.isAuth.isAuth)
    const user = useSelector(state => state.user.user)

    const LogOut = async () =>{
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        dispatch({type:"CHANGE_AUTH", payload:!isAuth})
        dispatch({type:"DELETE_USER", payload:{}})
        navigate('/login')
  }
    return(
user && <div className={classes.navbar}>
        <div onClick={() => setIsNavigationHovered(!isNavigationHovered)} className={classes.navigation}>
        <div>Navigation</div>
        <div className={isNavigationHovered?classes.navbar_navigation_window_open:classes.navbar_navigation_window_close}>
        <div>
        <Link to={`/login`}>
        <MyButton onClick={LogOut}>LogOut</MyButton>
        </Link>
        </div>
        <div>
        <Link to={`/category-management`}>
            <MyButton>CategoryManagement</MyButton>
        </Link>
        </div>
        <div>
        <Link to={`/add-product`}>
            <MyButton>AddProduct</MyButton>
        </Link>
        </div>
        <div>
        <Link to={`/main-products`}>
            <MyButton>All Products</MyButton>
        </Link>
        </div>
        <div>
        <Link to={`/my-profile/${user.id}`}>
            <MyButton>My Profile</MyButton>
        </Link>
        </div>
        <div>
        <Link to={`/my-chats`}>
            <MyButton>My Chats</MyButton>
        </Link>
        </div>      
     
      
        
        

        </div>
        </div>
        
        <div className={classes.navbar_user_info_container}>
        <div onMouseEnter={() => setIsUserNameHovered(true)} onMouseLeave={() => setIsUserNameHovered(false)} className={classes.navbar_user_name}>
        <b>
        {`${user.first_name} ${user.last_name}`}
        </b>
        <div className={isUserNameHovered?classes.navbar_hover_options_open:classes.navbar_hover_options_closed}>
        <div>asdfasdf</div>
        <div>fdasfasdfasdfsadf</div>
        <div>asdfasdf</div>
        <div>fdasfasdfasdfsadf</div>
        <div>asdfasdf</div>
        <div>fdasfasdfasdfsadf</div>
        <div>asdfasdf</div>
        <div>fdasfasdfasdfsadf</div>
        <div>asdfasdf</div>
        <div>fdasfasdasdfsadfsadfsadfasdfsadf</div>
        <div>asdfasdf</div>
        <div>fdasfasdfasdfsadf</div>
        <div>asdfasdf</div>
        <div>fdasfasdfasdfsadf</div>

        </div>
        </div>
        <div className={classes.navbar_avatar_container}>
      
        {user.avatar_path
        ?<img src={`${API_URL}/${user.avatar_path}`} alt="avatar"/>
        :<div className={classes.navbar_avatar}>
            <MyAvatar name={user.first_name} size={1}/>
        </div>}
        </div>
       
        </div>
      
        
        </div>
    )
}

export default Navbar;
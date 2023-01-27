import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import classes from './NavBar.module.css'
import AuthService from '../../../services/AuthService';
import MyButton from '../button/MyButton';
import { API_URL } from '../../../http';
import MyAvatar from '../avatar/MyAvatar';
import NavButton from '../button/NavButton';

const Navbar = () => {
    const[isUserNameHovered, setIsUserNameHovered] = useState(false)
    const[isManagementHovered, setIsManagementHovered] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector( state => state.isAuth.isAuth)
    const my_info = useSelector(state => state.user.user)

    const LogOut = async () =>{
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        dispatch({type:"CHANGE_AUTH", payload:!isAuth})
        dispatch({type:"DELETE_USER", payload:{}})
        navigate('/login')
  }
    return(
         <div className={classes.navbar}>
        {/* <div onClick={() => setIsNavigationHovered(!isNavigationHovered)} className={classes.navigation}>
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
        </div> */}
        <div className={classes.navbar_home_container}>
        <Link to={`/home`}>
            <NavButton>Գլխավոր էջ</NavButton>
        </Link>
        </div>
        <div className={classes.navbar_main_product_container}>
        <Link to={`/main-products`}>
            <NavButton>Ապրանքներ</NavButton>
        </Link>
        </div>
        {isAuth === false && 
        <div className={classes.navbar_isauth_false_container}>
        <div className={classes.navbar_isauth_false_empty_block}></div>
        <div className={classes.navbar_isauth_false_log_reg_block}>
        <Link to={`/login`}>
            <NavButton>Մուտք</NavButton>
        </Link>
        </div>
        <div className={classes.navbar_isauth_false_log_reg_block}>
        <Link to={`/registration`}>
            <NavButton>Գրանցվել</NavButton>
        </Link>
        </div>
        </div>}
        {isAuth &&<div className={classes.navbar_add_product_container}>
        <Link to={`/add-product`}>
            <NavButton>Տեղադրել հայտարարություն</NavButton>
        </Link>
        </div>
        }
        
        {my_info.status ==="admin" || my_info.status ==="admin_moderator" || my_info.status ==="moderator"
        ?<div className={classes.navbar_management_container}>
        <div  onMouseEnter={() => setIsManagementHovered(true)} onMouseLeave={() => setIsManagementHovered(false)} className={classes.navbar_management_block}>
        <NavButton>Կառավարում</NavButton>
        <div className={isManagementHovered?classes.navbar_hover_management_options_open:classes.navbar_hover_options_closed}>
        <Link to={`/category-management`}>
            <button className={classes.navbar_navigation_btn}>Կատեգորիաներ</button>
        </Link>
     
        </div>  
        </div>
      
        </div>
        :<div className={classes.navbar_empty_container}></div>}
       {isAuth && <div onMouseEnter={() => setIsUserNameHovered(true)} onMouseLeave={() => setIsUserNameHovered(false)} className={classes.navbar_user_name_container}>
        <div className={classes.navbar_user_name}>
        <b>
        {`${my_info.first_name} ${my_info.last_name}`}
        </b>
        </div>
     
    <div className={isUserNameHovered?classes.navbar_hover_options_open:classes.navbar_hover_options_closed}>
        <Link to={`/my-profile/${my_info.id}`}>
            <button className={classes.navbar_navigation_btn}>My Profile</button>
        </Link>
        <Link to={`/my-chats`}>
            <button className={classes.navbar_navigation_btn}>My Chats</button>
        </Link>
        <Link to={`/login`}>
        <button className={classes.navbar_navigation_btn_logout} onClick={LogOut}>LogOut</button>
        </Link>
        </div>
      
        </div>
}
      
      {isAuth &&  <div className={classes.navbar_avatar_container}>
      
      {my_info.avatar_path
      ?<img src={`${API_URL}/${my_info.avatar_path}`} alt="avatar"/>
      :<div className={classes.navbar_avatar}>
          <MyAvatar name={my_info.first_name} size={1}/>
      </div>}
      </div>
      }
        
        </div>
    )
}

export default Navbar;
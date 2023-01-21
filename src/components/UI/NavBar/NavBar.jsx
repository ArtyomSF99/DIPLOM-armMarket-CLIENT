import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import classes from './NavBar.module.css'
import AuthService from '../../../services/AuthService';
import MyButton from '../button/MyButton';


const Navbar = () => {
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
        <div className={classes.navbar}>
         <Link to={`/login`}>
        <MyButton onClick={LogOut}>LogOut</MyButton>
        </Link>
     
        <Link to={`/category-management`}>
            <MyButton>CategoryManagement</MyButton>
        </Link>
        <Link to={`/add-product`}>
            <MyButton>AddProduct</MyButton>
        </Link>
        <Link to={`/main-products`}>
            <MyButton>All Products</MyButton>
        </Link>
        <Link to={`/my-profile/${user.id}`}>
            <MyButton>My Profile</MyButton>
        </Link>
        <Link to={`/my-chats`}>
            <MyButton>My Chats</MyButton>
        </Link>
        </div>
    )
}

export default Navbar;
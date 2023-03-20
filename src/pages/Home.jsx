import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/Loader/Loader'
import AuthService from '../services/AuthService'

export default function Home() {
    const[isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const isAuth = useSelector( state => state.isAuth.isAuth)
  

  const change = () =>{
    console.log(isAuth)
  }
  const test = async () =>{
        setIsLoading(true)
        const response = await AuthService.getUsers()
        console.log(response.data)
        setIsLoading(false)
  }

  const LogOut = async () =>{
        setIsLoading(true)
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        dispatch({type:"CHANGE_AUTH", payload:!isAuth})
        dispatch({type:"DELETE_USER", payload:{}})
        navigate('/login')
  }

  return (
        isLoading
        ?<Loader/>
        :<div>
        
    </div>
    
  )
}

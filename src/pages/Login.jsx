
import React, { useState, useEffect, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import MySubmit from '../components/UI/button/MySubmit';
import MyInput from '../components/UI/input/MyInput';
import TextHeader from '../components/UI/textHeader/TextHeader';
import MyDisabledSubmit from '../components/UI/button/MyDisabledSubmit';
import Loader from '../components/UI/Loader/Loader';
import AuthService from '../services/AuthService';
import {useDispatch, useSelector} from "react-redux"
import WhiteHeader from '../components/UI/textHeader/WhiteHeader';

const Login = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector( state => state.isAuth.isAuth)

  const[login, setLogin] = useState('')
  const[password, setPassword] = useState('')
  const[loginDirty, setLoginDirty] = useState(false)
  const[passwordDirty, setPasswordDirty] = useState(false)
  const[loginError, setLoginError] = useState('Email-ը չի կարող լինել դատարկ')
  const[passwordError, setPasswordError] = useState('Գաղտնաբառը չի կարող լինել դատարկ')
  const[formValid, setFormValid] = useState(false)
  const[serverMessage, setServerMessage] = useState('')
  const[isLoading, setIsLoading] = useState(false)
  
 

  useEffect(() => {
    if(loginError || passwordError){
      setFormValid(false)
    }
    else{
      setFormValid(true)
    }
  }, [loginError, passwordError])

  const loginHandler = (e) =>{
    setLogin(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())){
      setLoginError("Սխալ email")
    }
    else{
      setLoginError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length<6 || e.target.value.length>15){
      setPasswordError("Գաղտնաբառը պետք է լինի մեծ 6-ից և փոքր 15-ից")
      if(!e.target.value){
        setPasswordError('Գաղտնաբառը չի կարող լինել դատարկ')
      }
    }
    else{
      setPasswordError('')
    }
   
  }

  const blurHandler = (e) =>{
    switch (e.target.name){
      case 'login':
        setLoginDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
        default:

    }
  }
  
    const logIn = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        const response = await AuthService.login(login, password)
        console.log(response.data)
        localStorage.setItem('token', response.data.accessToken)
        dispatch({type:"SAVE_USER", payload:response.data.user})
        dispatch({type:"CHANGE_AUTH", payload:!isAuth})
        setIsLoading(false)
    }
    
    const change = () =>{
      dispatch({type:"CHANGE_AUTH", payload:!isAuth})
    }
    const test =async () =>{
      const response = await AuthService.getUsers()
      console.log(response.data)
    }
  

    return(
        <div className='main'>
        {isLoading
        ?<Loader/>
        :<div className='login_page'>
        <div className='login'>
        
        <TextHeader text="Մուտք"/>
        {serverMessage
        ?<h4 style={{textAlign: 'center', color:'teal'}}>{serverMessage}</h4>
        :null}
        <form onSubmit={logIn} className="login_form">
        <WhiteHeader text="ԱրմՄարկետ"/>
        <div className='login_container'>
        <MyInput onChange={e=> loginHandler(e)} value={login} onBlur={e=> blurHandler(e)} inputname="Email"   name='email' type='text' placeholder='Մուտքագրեք Ձեր email-ը...'/>
        <div className='input_error'>{loginError}</div>
        </div>
        <div className='login_container'>
        <MyInput onChange={e=> passwordHandler(e)} value={password} inputname='Գաղտնաբառ' name='password' type='password' placeholder='Մուտքագրեք Ձեր գաղտնաբառը...'/>
        <div className='input_error'>{passwordError}</div>
        </div>
        {formValid
        ?<div className='submit_container'>
        <MySubmit style={{marginTop:'10%'}} disabled={!formValid} type='submit'>Ուղարկել</MySubmit>
        </div>  
        :<div className='submit_container'>
        <MyDisabledSubmit style={{marginTop:'10%'}}>Ուղարկել</MyDisabledSubmit>
        </div>
        
        }
        
        </form>
        <div className="login_registration">
            <h6 style={{color:'green', marginRight:'10px'}} >
                Գրանցված չեք՞
            </h6>
            <div className='go_to_log_reg'>
            <Link to={'/registration'}>
            <MyButton>Գրանցվել</MyButton>
            </Link>
            </div>
           
            
        </div>
        </div>
       
       
        
        
    </div>}
  
        
        </div>
       
    )
}

export default Login; 
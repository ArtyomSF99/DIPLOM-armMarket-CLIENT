import React, { useEffect, useState } from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/NavBar/NavBar";
import AuthService from "./services/AuthService";
import {useDispatch, useSelector} from "react-redux"
import './styles/App.css';
import Loader from "./components/UI/Loader/Loader";



function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector( state => state.isAuth.isAuth)
  const[isLoading, setIsLoading] = useState(false)

  useEffect( () =>{
   
    if(localStorage.getItem('token')){
      setIsLoading(true)
      AuthService.refresh().then( response =>{
        localStorage.setItem('token', response.data.accessToken)
        dispatch({type:"SAVE_USER", payload:response.data.user})
        dispatch({type:"CHANGE_AUTH", payload:!isAuth})
        console.log(isAuth)
        
      }
      ).then(() =>{
        
          setIsLoading(false)
        
      })
    }
  }, [])
  return (
      
      <div className="App">
      {isLoading
      ?<Loader/>
      :<BrowserRouter>
          <Navbar/>
          <AppRouter/>  
        </BrowserRouter>}

      </div>
   
    
  );
}

export default App;

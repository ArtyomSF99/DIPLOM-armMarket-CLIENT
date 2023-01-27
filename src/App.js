import React, { useEffect, useState } from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/NavBar/NavBar";
import AuthService from "./services/AuthService";
import {useDispatch, useSelector} from "react-redux"
import './styles/App.css';
import Loader from "./components/UI/Loader/Loader";
import CategoriesService from "./services/CategoriesService";
import ProductService from "./services/ProductService";
import ServerResponseModal from "./components/UI/modal/ServerResponseModal";
import UserService from "./services/UserService";
import TestNavbar from "./components/UI/NavBar/TestNavBar";



function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector( state => state.isAuth.isAuth)
  const globalModal = useSelector(state => state.app.globalModal)
  const serverResponse = useSelector(state => state.app.serverResponse)

  const[isLoading, setIsLoading] = useState(false)
  

  useEffect( () =>{
   
    if(localStorage.getItem('token')){
      setIsLoading(true)
      AuthService.refresh().then( response =>{
        localStorage.setItem('token', response.data.accessToken)
        dispatch({type:"SAVE_USER", payload:response.data.user})
        dispatch({type:"CHANGE_AUTH", payload:!isAuth})
        console.log(response.data)
        UserService.getUserChats(response.data.user.id).then(response =>{
          dispatch({type:"SAVE_MY_CHATS", payload:response.data})
        })
      }
      )
    }
    CategoriesService.getCategories().then(response =>{
      
      dispatch({type:"SAVE_CATEGORIES", payload:response.data})
    
    }).then(() =>{
      CategoriesService.getAttributes().then(response =>{
        dispatch({type:"SAVE_ATTRIBUTES", payload:response.data})
      }).then(() =>setIsLoading(false))
    }).then(() =>{
      ProductService.getAllProducts().then(response =>{
        dispatch({type:"SAVE_PRODUCTS", payload:response.data})
        console.log(response.data)
      })
    }).catch(e => console.log(e))
  }, [ dispatch])
  return (
      
      <div className="App">
      {isLoading
      ?<Loader/>
      :<BrowserRouter>
          <Navbar/>
          <ServerResponseModal  visible={globalModal} setVisible={() => dispatch({type:"CHANGE_GLOBAL_MODAL", payload:false})} message={serverResponse}/>
          <AppRouter/>  
        </BrowserRouter>}

      </div>
   
    
  );
}

export default App;

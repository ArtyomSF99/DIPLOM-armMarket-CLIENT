import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ProfileOpinion from '../components/profile/ProfileOpinion'
import ProfileProducts from '../components/profile/ProfileProducts'
import UserInfo from '../components/profile/UserInfo'
import ProfileSelectButton from '../components/UI/button/ProfileSelectButton'
import LoaderFullScreen from '../components/UI/Loader/LoaderFullScreen'
import UserService from '../services/UserService'

export default function MyProfile() {
    const[user, setUser] = useState({})
    const[indexShow, setIndexShow] = useState(0)
    const[isLoading, setIsLoading] = useState(true)
    const params = useParams();

   useEffect(() =>{
        UserService.getUserById(params.id).then(response =>{
            setUser(response.data)
            console.log(response.data)
        }).then(() => setIsLoading(false))
   },[]) 

  return (
    isLoading
    ?<LoaderFullScreen/>
    :<div className='main_responsiv'>
    <div className='my_profile_main_container'>
    <div className='my_profile_main_discription'>
        <UserInfo user={user.user}/>
    </div>
    <div className='profile_additional_info_container'>
    <div className='profile_additional_info_select'>
    <div >
    <ProfileSelectButton onClick={() => setIndexShow(0)}>
        Կարծիքներ
    </ProfileSelectButton>
    </div>
    <div>
    <ProfileSelectButton onClick={() => setIndexShow(1)}>
        Հայտարարություններ
    </ProfileSelectButton>
    </div>    
   
    </div>
    
  
    {indexShow===0 &&<ProfileOpinion opinion={user.user_opinion}/>}
    {indexShow===1 &&<ProfileProducts products={user.user_products}/>}

   
    </div>
    </div>
   
    <button onClick={() => console.log(user)}>test</button>
    </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import ProfileProducts from '../components/profile/ProfileProducts'
import UserInfo from '../components/profile/UserInfo'
import LoaderFullScreen from '../components/UI/Loader/LoaderFullScreen'

export default function MyProducts() {
  const user = useSelector(state => state.user.user)
  
  return (
    user
    ?<div className='main_responsiv'>
    <div className='my_profile_main_container'>
    <div className='my_profile_main_discription'>
        <UserInfo user={user}/>
    </div>
    <div>
      <ProfileProducts/>
    </div>
    </div>
    </div>
    :<LoaderFullScreen/>
  )
}

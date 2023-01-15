import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProfileOpinion from '../components/profile/ProfileOpinion'
import ProfileProducts from '../components/profile/ProfileProducts'
import UserInfo from '../components/profile/UserInfo'
import ProfileSelectButton from '../components/UI/button/ProfileSelectButton'
import LoaderFullScreen from '../components/UI/Loader/LoaderFullScreen'
import MyModal from '../components/UI/modal/MyModal'
import UserService from '../services/UserService'


export default function UserProfile() {
    const[user, setUser] = useState({})
    const[myModal, setMyModal] = useState(false)
    const[isLoading, setIsLoading] = useState(true)
    const[indexShow, setIndexShow] = useState(0)
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
    <div className='profile_main_container'>
    <div className='profile_main_discription'>
      {user.user && <UserInfo user={user.user}/>}  
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
   
  
    {indexShow===0 &&<ProfileOpinion/>}
    {indexShow===1 &&<ProfileProducts products={user.user_products}/>}

   
    </div>
    </div>
    <MyModal  visible={myModal} setVisible={setMyModal}>
    <div>hello</div>
    </MyModal>
    <button onClick={() => setMyModal(!myModal)}>test</button>
    </div>
  )
}

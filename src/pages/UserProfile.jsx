import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ProfileOpinion from '../components/profile/ProfileOpinion'
import ProfileProducts from '../components/profile/ProfileProducts'
import UserInfo from '../components/profile/UserInfo'
import ProfileSelectButton from '../components/UI/button/ProfileSelectButton'
import LoaderFullScreen from '../components/UI/Loader/LoaderFullScreen'
import MyModal from '../components/UI/modal/MyModal'
import AddOpinionForm from '../components/UI/modal/MyModalForms/AddOpinionFomr'
import ConfirmForm from '../components/UI/modal/MyModalForms/ConfirmForm'
import EditOpinionForm from '../components/UI/modal/MyModalForms/EditOpinionForm'
import UserService from '../services/UserService'
import { Utils } from '../utils/utils'


export default function UserProfile() {
    const[user, setUser] = useState({})
    const[myModal, setMyModal] = useState(false)
    const[isLoading, setIsLoading] = useState(true)
    const[indexShow, setIndexShow] = useState(0)
    const[selectedObj, setSelectedObj] = useState({})
    const[addOpinionModal, setAddOpinionModal] = useState(false)
    const[addOpinionLoader, setAddOpinionLoader] = useState(false)
    const[editOpinionModal, setEditOpinionModal] = useState(false)
    const[editOpinionLoader, setEditOpinionLoader] = useState(false)
    const[deleteOpinionModal, setDeleteOpinionModal] = useState(false)
    const[deleteOpinionLoader, setDeleteOpinionLoader] = useState(false)
    const my_info = useSelector(state => state.user.user)

    const params = useParams();

   useEffect(() =>{
        UserService.getUserById(params.id).then(response =>{
            setUser(response.data)
            console.log(response.data)
        }).then(() => setIsLoading(false))
   },[addOpinionModal, deleteOpinionModal, editOpinionModal]) 

   const addOpinion = async (comment) => {
      const user_id = params.id
      const sender_user_id = my_info.id
      const avatar_path = my_info.avatar_path
      const user_name = `${my_info.first_name} ${my_info.last_name}`
      const opinion = comment
      const exhibition_date = Utils.getMyDate()
      const exhibition_time = Utils.getMyTime()
      const response = await UserService.addOpinion(user_id, sender_user_id, avatar_path, user_name, opinion, exhibition_date, exhibition_time)
      console.log(response.data)
      setAddOpinionLoader(false)
      setAddOpinionModal(false)
   }
   const editOpinion = async (comment, new_opinion) =>{
    const opinion_id = comment.id
    await UserService.editOpinion(opinion_id, new_opinion)
    setSelectedObj({})
    setEditOpinionLoader(false)
    setEditOpinionModal(false)
   }
   const deleteOpinion = async (comment) =>{
    const opinion_id = comment.id
    await UserService.deleteOpinion(opinion_id)
    setSelectedObj({})
    setDeleteOpinionLoader(false)
    setDeleteOpinionModal(false)
   }

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
   
    <div  className='profile_additional_info_show'>
    {indexShow===0 &&<ProfileOpinion setSelectedObj={setSelectedObj} setAddOpinionModal={setAddOpinionModal} setEditOpinionModal={setEditOpinionModal} setDeleteOpinionModal={setDeleteOpinionModal} user={user.user} opinions={user.user_opinion}/>}
    {indexShow===1 &&<ProfileProducts products={user.user_products}/>}

    </div>
   
   
    </div>
    </div>
    <MyModal  visible={myModal} setVisible={setMyModal}>
    <div>hello</div>
    </MyModal>
    <MyModal  visible={addOpinionModal} setVisible={setAddOpinionModal}>
    <AddOpinionForm addOpinion={addOpinion} addOpinionLoader={addOpinionLoader} setAddOpinionLoader={setAddOpinionLoader}/>
    </MyModal>
    <MyModal  visible={editOpinionModal} setVisible={setEditOpinionModal}>
    <EditOpinionForm selectedObj={selectedObj} editOpinion={editOpinion} editOpinionLoader={editOpinionLoader} setEditOpinionLoader={setEditOpinionLoader} />
    </MyModal>
    <MyModal  visible={deleteOpinionModal} setVisible={setDeleteOpinionModal}>
      <ConfirmForm text="Ցանկանու՞մ եք ջնջել Ձեր թողած կարծիքը" selectedObj={selectedObj} modalAnswerYes={deleteOpinion} deleteOpinionLoader={deleteOpinionLoader} setDeleteLoader={setDeleteOpinionLoader} modalAnswerNo={setDeleteOpinionModal}/>
    </MyModal>
    <button onClick={() => console.log(user)}>test</button>
    </div>
  )
}

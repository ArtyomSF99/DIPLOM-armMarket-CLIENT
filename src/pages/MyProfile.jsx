import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ProfileOpinion from '../components/profile/ProfileOpinion'
import ProfileProducts from '../components/profile/ProfileProducts'
import UserInfo from '../components/profile/UserInfo'
import ProfileSelectButton from '../components/UI/button/ProfileSelectButton'
import LoaderFullScreen from '../components/UI/Loader/LoaderFullScreen'
import MyModal from '../components/UI/modal/MyModal'
import ConfirmForm from '../components/UI/modal/MyModalForms/ConfirmForm'
import ProductService from '../services/ProductService'
import UserService from '../services/UserService'

export default function MyProfile() {
    const[user, setUser] = useState({})
    const[indexShow, setIndexShow] = useState(0)
    const[isLoading, setIsLoading] = useState(true)
    const[selectedObj, setSelectedObj] = useState({})
    const[deleteProductModal, setDeleteProductModal] = useState(false)
    const[deleteProductLoader, setDeleteProductLoader] = useState(false)
    const params = useParams();
    const dispatch = useDispatch()

   useEffect(() =>{
        UserService.getUserById(params.id).then(response =>{
            setUser(response.data)
            console.log(response.data)
        }).then(() => setIsLoading(false))
   },[deleteProductModal]) 

   const deleteProduct = async (product) =>{
    const product_id = product.id
    const product_folder = product.product_folder
    const category_id = product.product_category_id
    console.log(product)
    const response =  await ProductService.deleteProduct(product_id, product_folder, category_id)
    if(response.status === 200) {
        dispatch({type:"SET_SERVER_RESPONSE", payload:"Ձեր հայտարարությունը հաջողությամբ ջնջված է"})
        dispatch({type:"CHANGE_GLOBAL_MODAL", payload:true})
    }
    console.log(response)
    setSelectedObj({})
    setDeleteProductLoader(false)
    setDeleteProductModal(false)
   }

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
    
    <div  className='profile_additional_info_show'>
    {indexShow===0 &&<ProfileOpinion opinions={user.user_opinion} user={user.user} />}
    {indexShow===1 &&<ProfileProducts  products={user.user_products}  setSelectedObj={setSelectedObj} setDeleteProductModal={setDeleteProductModal}/>}
    </div>
  
    </div>
    </div>
    <MyModal  visible={deleteProductModal} setVisible={setDeleteProductModal}>
      <ConfirmForm text="Ցանկանու՞մ եք ջնջել Ձեր Հայտարարությունը" selectedObj={selectedObj} modalAnswerYes={deleteProduct} deleteProductLoader={deleteProductLoader} setDeleteLoader={setDeleteProductLoader} modalAnswerNo={setDeleteProductModal}/>
    </MyModal>
    <button onClick={() => console.log(user)}>test</button>
    </div>
  )
}

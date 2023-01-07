import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate,} from 'react-router'
import MyHr from '../UI/hr/MyHr'
import ProductService from '../../services/ProductService'
import TextHeader from '../UI/textHeader/TextHeader'
import AttributeInput from './AttributeInput'
import AttributeTextArea from './AttributeTextArea'
import ProductImage from './ProductImage'
import { Utils } from '../../utils/utils'
import AttributesInput from './AttributesInput'


export default function AddNewProduct({categories, attributes, selectedCategory}) {
  const[arr, setArr] = useState([])
  const[attributeComponents, setAttributeComponents] = useState([])
  const[imgArray, setImgArray] = useState([])
  const[showImagesArray, setShowImagesArray] = useState([])
  const[categoryAttributes, setCategoryAttributes] = useState([])
  const[readyAttributes, setReadyAttributes] = useState([])
  const[productName, setProductName] = useState('')
  const[productDiscription, setProductDiscription] = useState('')
  const[productPrice, setProductPrice] = useState('')


  const user = useSelector(state => state.user.user)
  const selectedCategoryObject = categories.filter(el => el.name === selectedCategory)[0]
  
  const navigate = useNavigate();


  useEffect(() =>{
    const attributesResult = attributes.filter(el => el.category_id === selectedCategoryObject.id)
    const attributesComponentsResult = attributesResult.map(el => <AttributesInput key={el.id} attribute={el} readyAttributes={readyAttributes} setReadyAttributes={setReadyAttributes}/>)
    setCategoryAttributes(attributesResult)
    setAttributeComponents(attributesComponentsResult)
  },[readyAttributes])

  const test = () =>{
    // const newPath = `${location.pathname}/gsagads`;
    // console.log(newPath)
       console.log(imgArray)
    //   window.location.replace(newPath);
    // navigate('/home')
  }

  const sendProduct = async (event) =>{
    event.preventDefault()

    const formData = new FormData()
    const date = Utils.getMyDate()
    const time = Utils.getMyTime()
    const productFolder = Date.now()+Math.floor(Math.random() * 100)
    for(let i =0; i<imgArray.length; i++){
      formData.append(`file${i+1}`, imgArray[i].file)
    }
  
    formData.append(`attributes`, JSON.stringify(readyAttributes))
    
    formData.append('user_id', user.id)
    formData.append('category_id', selectedCategoryObject.id)
    formData.append('date', date)
    formData.append('time', time)
    await ProductService.createProduct(formData, selectedCategoryObject.name, productFolder )
    
    }

  const removeShowImage = (id) => {
    const newShowImage = showImagesArray.filter(el => el.img_id !== id)
    const newImgArray = imgArray.filter(el => el.img_id !== id)
    setShowImagesArray(newShowImage)
    setImgArray(newImgArray)
  }

  return (
    <div className='create_product'>
          <TextHeader text={selectedCategory}/>
          <form onSubmit={sendProduct} style={{display:'flex',flexDirection:'column', alignItems:'center', width:'100%'}}>
        <div className='show_product_images'>
          {showImagesArray.map(el =>
              <div key={Date.now()+Math.random()} className='show_product_image_container'>
              <img  className='show_product_image' src={el.url} alt="kek" />
              <div className='show_product_image_delete' onClick={() => removeShowImage(el.img_id)}>
              <img src='/img/remove.svg' width={'80%'} height={'50%'} alt='checked'/>
              </div>
              </div>            
          )}
        
        </div>
        <MyHr/>
        <ProductImage showImagesArray={showImagesArray} setShowImagesArray={setShowImagesArray} imgArray={imgArray} setImgArray={setImgArray}/>
        <div className="product_input_container">
        <AttributeInput attribute={{attribute_name:'Անվանում'}} value={productName} setValue={setProductName}/>
        <AttributeInput attribute={{attribute_name:'Արժեքը'}} value={productPrice} setValue={setProductPrice}/>

        {attributeComponents}
        <AttributeTextArea attribute={{attribute_name:'Նկարագրություն'}} productDiscription={productDiscription} setProductDiscription={setProductDiscription}/>
        </div>
        
        <button onClick={test}>test</button>
        <button onClick={sendProduct}>Տեղադրել</button>
        <button>send</button>
        </form>
    </div>
  )
}

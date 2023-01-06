import React, { useState } from 'react'
import { Navigate } from 'react-router'
import MyHr from '../UI/hr/MyHr'
import TextHeader from '../UI/textHeader/TextHeader'
import ProductImage from './ProductImage'


export default function AddNewProduct({categories, attributes, selectedCategory}) {
  const[arr, setArr] = useState([<TextHeader text={selectedCategory}/>,<TextHeader text={selectedCategory}/>,<TextHeader text={selectedCategory}/>,<TextHeader text={selectedCategory}/>])
  const[imgArray, setImgArray] = useState([])
  const[showImagesArray, setShowImagesArray] = useState([])
  const selectedCategoryObject = categories.filter(el => el.name === selectedCategory)[0]
  const selectedCategoryAttributes = attributes.filter(el => el.category_id === selectedCategoryObject.id)

  const test = () =>{
    console.log(imgArray)
    console.log(showImagesArray)
    console.log(selectedCategoryObject)
    console.log(selectedCategoryAttributes)
   
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
        <div className="product_input_container">{arr}</div>
        <button onClick={test}>test</button>
    </div>
  )
}

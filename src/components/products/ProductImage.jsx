import React, { useState } from 'react'
import classes from './Products.module.css'

export default function ProductImage({showImagesArray, setShowImagesArray, imgArray, setImgArray}) {
    const[loaded, setLoaded] = useState(false)
    const[imageUrl, setImageUrl] = useState('')
    const[image, setImage] = useState({})

    let reader = new FileReader()
    let id = 0;

    const imageHandler = (e) =>{
        id = Date.now() + Math.random()
        const imgTest = imgArray.filter(el => el.file.name === e.target.files[0].name)
        if(imgTest.length ===0){
            setImage(e.target.files[0])
        
            setImgArray([...imgArray, {img_id: id  ,file:e.target.files[0]}])
            reader.readAsDataURL(e.target.files[0])
        }
       
        console.log(imgTest)
    }
    reader.onloadend = () => {
        setImageUrl(reader.result)
        setShowImagesArray([...showImagesArray, {img_id: id, url:reader.result}])
     }

  return (
    <div>
    <div  className={classes.input_container}>
    <input className={classes.image_input} type="file" onChange={imageHandler} accept="image/png, image/jpeg" ></input>
  

    <img className={classes.show_image} src='/img/photo.svg' alt='avatar'/>
    
    </div>
       

    </div>
  )
}

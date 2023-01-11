import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/ProductService'
import LoaderFullScreen from '../components/UI/Loader/LoaderFullScreen'
import  ProductImageSlider  from '../components/products/ProductImageSlider'

export default function ProductById() {
    const params = useParams()
    const [product, setProduct] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    useEffect(() =>{

          ProductService.getProductById(params.id).then( response =>
            setProduct(response.data)
        ).then(() => setIsLoading(false))
    },[])
    const test = () =>{
        console.log(product)
    }
  return (
    <div className='main_responsiv'>
    <div className='product_by_id_container'>
 {/* <img src={product.product_user.avatar_path} alt='/img/failure.png'/> */}
 <ProductImageSlider images={product.images_path}/>
      <button onClick={test}>asdfsadf</button>
    </div>
   
    </div>
  )
}

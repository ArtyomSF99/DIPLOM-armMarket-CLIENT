import React from 'react'
import classes from './Products.module.css'
import {Link} from 'react-router-dom'
import { API_URL } from '../../http'
import { useSelector } from 'react-redux'

export default function ProductCard({product, setDeleteProductModal, setSelectedObj}) {
  const my_info = useSelector(state => state.user.user)
    const imgPath = API_URL+"/"+product.product_main_photo_path
  return (
    <div className={classes.product_card}>
   
    <img src={imgPath} onError={(e)=>{e.target.src=`/img/failure.png`}} className={classes.product_image} alt='dsaf'/>
    
    <div className={classes.product_card_info}>
    <Link to={`/product/${product.id}`} className='link'>
    <div className={classes.product_card_header}><b>{product.product_name}</b></div>
    </Link>
       
        <div className={classes.product_card_price}>Գինը՝ {product.product_price} Դրամ</div>
        <div className={classes.product_card_date}>{product.exhibition_date} {product.exhibition_time}</div>
    </div>
     {my_info.id === product.user_id &&
        <div className={classes.product_btns}>
        <img onClick={() => {
            setDeleteProductModal(true)
            setSelectedObj(product)}} className={classes.product_delete} src='/img/delete.png' alt='edit'/>
        </div>
        }
    </div>
  )
}

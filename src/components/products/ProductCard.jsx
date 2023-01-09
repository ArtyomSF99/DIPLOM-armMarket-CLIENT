import React from 'react'
import classes from './Products.module.css'
import { API_URL } from '../../http'

export default function ProductCard({product}) {
    const imgPath = API_URL+"/"+product.product_main_photo_path
  return (
    <div className={classes.product_card}>
    <img src={imgPath} className={classes.product_image} alt='dsaf'/>
    <div className={classes.product_card_info}>
        <div className={classes.product_card_header}><b>{product.product_name}</b></div>
        <div className={classes.product_card_price}>Գինը՝ {product.product_price} Դրամ</div>
        <div className={classes.product_card_date}>{product.exhibition_date} {product.exhibition_time}</div>
    </div>
    </div>
  )
}

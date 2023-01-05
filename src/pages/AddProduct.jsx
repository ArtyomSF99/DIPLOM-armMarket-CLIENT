import React, { useState } from 'react'
import AddNewProduct from '../components/products/AddNewProduct'
import SelectProductCatgory from '../components/products/SelectProductCatgory'

export default function AddProduct() {
    const[selected, setSelected] = useState(false)
    const[selectedCatgory, setSelectedCategory] = useState('')



  return (
    <div className='main_responsiv'>
        <div className='add_product_main'>
            {!selected
            ?<SelectProductCatgory/>
            :<AddNewProduct/>
            }
        </div>
        <button onClick={() => setSelected(!selected)}>test</button>
    </div>
  )
}
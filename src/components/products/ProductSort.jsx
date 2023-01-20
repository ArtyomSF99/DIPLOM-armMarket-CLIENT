import React, { useState } from "react";
import { Utils } from "../../utils/utils";
import classes from "./Products.module.css";

export default function ProductSort({products, showProducts,showSortedProducts, setShowSortedProducts,setProductLoader}) {
  const [btnIndex, setBtnIndex] = useState(0);
    
const changeIndex = (index) =>{
    setBtnIndex(index)
    setProductLoader(true)
        switch(index){
           
            case 1:
             if(showProducts.length !==0){
                const tmp = showProducts.slice()
                const newProducts = Utils.getSortedArrayByPrice(tmp)
                setShowSortedProducts(newProducts)
                console.log('second')
                }
                else if(showProducts.length===0){
                  const tmp = products.slice()
                const newProducts = Utils.getSortedArrayByPrice(tmp)
                setShowSortedProducts(newProducts) 
                console.log('thrid')
              }
              break;
              case 2:
              if(showProducts.length !==0){
                  const tmp = showProducts.slice()
                const newProducts = Utils.getSortedArrayByPrice(tmp)
                setShowSortedProducts(newProducts.reverse())
                }
                else if(showProducts.length===0){
                  const tmp = products.slice()
                const newProducts = Utils.getSortedArrayByPrice(tmp)
                setShowSortedProducts(newProducts.reverse()) 
              }
              break;
              case 3:
                if(showProducts.length !==0){
                  const tmp = showProducts.slice()
                const newProducts = Utils.getSortedArrayByName(tmp)
                setShowSortedProducts(newProducts)
                }
                else if(showProducts.length===0){
                  const tmp = products.slice()
                const newProducts = Utils.getSortedArrayByName(tmp)
                setShowSortedProducts(newProducts) 
              }
              break;
              case 4:
               
                   if(showProducts.length !==0){
                  const tmp = showProducts.slice()
                    const newProducts = Utils.getSortedArrayByName(tmp)
                    setShowSortedProducts(newProducts.reverse())
                    }
                    else if(showProducts.length===0){
                      const tmp = products.slice()
                    const newProducts = Utils.getSortedArrayByName(tmp)
                    setShowSortedProducts(newProducts.reverse()) 
                  }
              break;
              case 5:
              
                if(showProducts.length !==0){
                  const tmp = showProducts.slice()
                const newProducts = Utils.getSortedArrayByDate(tmp)
                setShowSortedProducts(newProducts)
                console.log('second')
                }
                else if(showProducts.length===0){
                  const tmp = products.slice()
                const newProducts = Utils.getSortedArrayByDate(tmp)
                setShowSortedProducts(newProducts) 
                console.log('thrid')
              }
          
              break;
              case 6:
              
                if(showProducts.length !==0){
                  const tmp = showProducts.slice()
                    const newProducts = Utils.getSortedArrayByDate(tmp)
                    setShowSortedProducts(newProducts.reverse())
                    }
                    else if(showProducts.length===0){
                      const tmp = products.slice()
                    const newProducts = Utils.getSortedArrayByDate(tmp)
                    setShowSortedProducts(newProducts.reverse()) 
                  }
              break;
              case 7:
               if(showProducts.length !==0){
                  const tmp = showProducts.slice()
                const newProducts = Utils.getSortedArrayByTime(tmp)
                setShowSortedProducts(newProducts)
                }
                else if(showProducts.length===0){
                  const tmp = products.slice()
                const newProducts = Utils.getSortedArrayByTime(tmp)
                setShowSortedProducts(newProducts) 
              }
              break;
              case 8:
               if(showProducts.length !==0){
                  const tmp = showProducts.slice()
                    const newProducts = Utils.getSortedArrayByTime(tmp)
                    setShowSortedProducts(newProducts.reverse())
                    }
                    else if(showProducts.length===0){
                      const tmp = products.slice()
                    const newProducts = Utils.getSortedArrayByTime(tmp)
                    setShowSortedProducts(newProducts.reverse()) 
                  }
              break;
              
            default:
                setShowSortedProducts([])
        }

        setTimeout(() =>{
            setProductLoader(false)
        },500)
          
         

     
}




  return (
    <div className={classes.product_sort_container}>
      <h6>Տեսակավորում ըստ</h6>
      <button
        onClick={() => changeIndex(1)}
        className={
          btnIndex === 1
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        Արժեքի <b>&#8648;</b>
      </button>
      <button
        onClick={ () => changeIndex(2)}
        className={
          btnIndex === 2
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        Արժեքի <b>&#8650;</b>
      </button>
      <button
        onClick={() => changeIndex(3)}
        className={
          btnIndex === 3
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        Անվան <b>&#8648;</b>
      </button>
      <button
        onClick={() => changeIndex(4)}
        className={
          btnIndex === 4
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        Անվան <b>&#8650;</b>{" "}
      </button>
      <button
        onClick={() => changeIndex(5)}
        className={
          btnIndex === 5
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        Ամսաթվի <b>&#8648;</b>
      </button>
      <button
        onClick={() => changeIndex(6)}
        className={
          btnIndex === 6
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        Ամսաթվի <b>&#8650;</b>
      </button>
      <button
        onClick={() => changeIndex(7)}
        className={
          btnIndex === 7
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        ժամի <b>&#8648;</b>
      </button>
      <button
    
        onClick={() => changeIndex(8)}
        className={
          btnIndex === 8
            ? classes.product_sort_btn_active
            : classes.product_sort_btn_off
        }
      >
        ժամի <b>&#8650;</b>
      </button>
      <button className={classes.reset_sort}  onClick={() => changeIndex(0)}>Վերականգնել</button>
    </div>
  );
}

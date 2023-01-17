import React, { useState } from "react";
import MyHr from "../UI/hr/MyHr";

import MyInputSearch from "../UI/input/MyInputSearch";
import classes from "./Products.module.css";

export default function ProductSearch({ searchByQuery }) {
  const [value, setValue] = useState("");
  const [selectVisible, setSelectVisible] = useState(false)
  return (
    <div className={classes.product_search_container}>
      <div className={classes.product_search}>
        <div className={classes.product_search_input}>
          <MyInputSearch
            value={value}
            onChange={(e) => setValue(e.target.value)}
            inputname="Որոնել ամբողջ ցուցակում"
            placeholder="Մինչև 30 նիշ"
            maxLength={30}
          />
        </div>
        <img
          onClick={() => searchByQuery(value)}
          className={classes.product_search_icon}
          src="/img/search.svg"
          alt="search"
        />
      </div>
      <div className={classes.product_sort_select_query_container}>
      <div className={classes.product_sort_select_query_block}>
      {/* <div onClick={() =>setSelectVisible(!selectVisible)} className={classes.poroduct_sort_select_container}>
            safdfas
           
      </div>
      <div className={selectVisible?classes.product_sort_select_list:classes.hiden}>
        <div className={classes.product_sort_select_list_item}>
        Ըստ անվան պոքրից մեծ  
         <MyHr/>       
        </div>
        <div className={classes.product_sort_select_list_item}>
        Ըստ անվան պոքրից մեծ  
         <MyHr/>       
        </div>
        <div className={classes.product_sort_select_list_item}>
        Ըստ գնի պոքրից մեծ  
         <MyHr/>       
        </div>
        <div className={classes.product_sort_select_list_item}>
        Ըստ անվան պոքրից մեծ  
         <MyHr/>       
        </div>
       
      </div> */}
      </div>

      </div>
      
    </div>
  );
}

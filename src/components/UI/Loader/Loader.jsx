import React from "react";
import cl from './Loader.module.css'

const Loader = () => {
   return( 
   <div className={cl.loader}>
<div className={cl.cube}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
    </div>
   </div>
   )
}

export default Loader;
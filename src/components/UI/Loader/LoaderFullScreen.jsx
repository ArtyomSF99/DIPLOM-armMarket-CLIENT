import React from "react";
import cl from './Loader.module.css'

const LoaderFullScreen = () => {
   return( 
   <div className={cl.loader_center}>
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

export default LoaderFullScreen;
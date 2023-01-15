import React from "react";
import classes from "./MyInputSearch.module.css"

const MyInputSearch = React.forwardRef( (props, ref) => {
    return(
      
            <div className={classes.inputContainer}>
            <input type="text" placeholder={props.placeholder} {...props}/>
            
            <label className={classes.label} >{props.inputname}</label>
            
            </div>

        
        

    )


});

export default MyInputSearch;
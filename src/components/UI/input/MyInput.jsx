import React from "react";
import classes from "./MyInput.module.css"

const MyInput = React.forwardRef( (props, ref) => {
    return(
        <div className={classes.input_div}>
            <div className={classes.inputContainer}>
            <input type="text" placeholder={props.placeholder} {...props}/>
            
            <label className={classes.label} >{props.inputname}</label>
            
            </div>
        </div>
        
        

    )


});

export default MyInput;
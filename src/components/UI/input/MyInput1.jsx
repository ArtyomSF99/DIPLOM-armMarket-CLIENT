import React from "react";
import classes from "./MyInput1.module.css"

const MyInput1 = React.forwardRef( (props, ref) => {
    return(
  
            <div className={classes.my_textarea_container}>
            <textarea type="text" tabIndex="0" placeholder={props.placeholder} {...props} className={classes.my_textarea} />
            </div>
            
      
        
        

    )


});

export default MyInput1;
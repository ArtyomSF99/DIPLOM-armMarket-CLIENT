import React from "react";
import classes from "./MyInput1.module.css"

const MyInput1 = React.forwardRef( (props) => {
    return(
       
           
            <input type="text" placeholder={props.placeholder} {...props}/>        
      
        
        
        

    )


});

export default MyInput1;
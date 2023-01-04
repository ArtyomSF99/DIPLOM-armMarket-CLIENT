import React from "react";
import classes from './MySubmit.module.css'

const MySubmit = ({children, ...props}) => {
    return(
        <div className={classes.wrap}>
            <button {...props} className={classes.submit}>{children}</button>
        </div>
        
    );
}

export default MySubmit;
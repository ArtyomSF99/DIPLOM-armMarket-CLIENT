import React from "react";
import classes from './MyDisabledSubmit.module.css'

const MyDisabledSubmit = ({children, ...props}) => {
    return(
        <div className={classes.wrap}>
            <button {...props} className={classes.submit} disabled>{children}</button>
        </div>
        
    );
}

export default MyDisabledSubmit;
import React from "react";
import classes from './MyManagementButton.module.css'

const MyManagementButton = ({children, ...props}) => {
    return(
        <div className={classes.btn_container}>
        <button {...props} className={classes.management_btn}>
            {children}
        </button>
        </div>
    );
}

export default MyManagementButton;
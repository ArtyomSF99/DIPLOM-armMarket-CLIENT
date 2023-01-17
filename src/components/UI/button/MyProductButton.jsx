import React from "react";
import classes from './MyProductButton.module.css'

const MyProductButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            <b>{children}</b>
        </button>
    );
}

export default MyProductButton;
import React from "react";
import classes from './MyPostButton.module.css'

const MyPostButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
}

export default MyPostButton;
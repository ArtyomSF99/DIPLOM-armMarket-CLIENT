import React from "react";
import classes from './ProfileSelectButton.module.css'

const ProfileSelectButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            <b>{children}</b>
        </button>
    );
}

export default ProfileSelectButton;
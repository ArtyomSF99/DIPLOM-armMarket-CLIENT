import React from "react";
import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, setValue, setRegionError }) => {
    return(
        <select
            className={classes.mySelect}
            value={value}
            onChange={event => {
                setValue(event.target.value)
                setRegionError("")
                }}
                required
        >
            <option className={classes.mySelect_option} hidden>{defaultValue}</option>
            {options.map(option =>
                <option className={classes.mySelect_option} key={option.key} value={option.value}>
                    {option.value}
                </option>
            )}
        </select>

    )
}

export default MySelect;
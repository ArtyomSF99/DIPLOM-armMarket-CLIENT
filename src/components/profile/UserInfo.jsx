import React from 'react'
import MyAvatar from '../UI/avatar/MyAvatar'
import classes from './User.module.css'

export default function UserInfo({user}) {
  return (
    user&&
    <div className={classes.user_info_main_container}>
        <div className={classes.user_info_avatar}>
        <MyAvatar name={user.first_name}/>
        </div>
        <div className={classes.user_info_username}>
        <b>{`${user.first_name} ${user.last_name}`}</b>
        </div>
        <div className={classes.user_info_region}>
        <div className={classes.user_info_key}>
        Տարածաշրջան
        </div>
        <div className={classes.user_info_value}>
        {user.region}
        </div>
      
        </div>
        <div className={classes.user_info_contacts}>
        <div className={classes.user_info_key}>
        Mail
        </div>
        <div className={classes.user_info_value}>
        {user.email}
        </div>
        </div>
        <div className={classes.user_info_contacts}>
        <div className={classes.user_info_key}>
        Հեռախոսահամար
        </div>
        <div className={classes.user_info_value}>
        {user.phone}
        </div>
        </div>
        <div className={classes.user_info_accaunt_rating}>
      
        Գնահատականների քանակը: <b>{user.account_rating_count}</b>
      
        </div>
        <div className={classes.user_info_accaunt_rating}>
     
        Ընդհանուր գնահատականը: <b>{user.account_rating ===0 ? 0 :(user.account_rating/user.account_rating_count).toFixed(1)}</b>
        
     
        </div>
        <div className={classes.user_info_accaunt_create_date}>
            Գրանցված է ՝ 2022,12,10-ից
        </div>
    
    </div>
  )
}

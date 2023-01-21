import React, { useState } from 'react';
import cl from './MyModal.module.css'

const ServerResponseModal = ({message, visible, setVisible}) => {
    const[exit, setExit] = useState(false)
    const rootClasses = [cl.myModal]
    if(visible){
        rootClasses.push(cl.active)
    }

    return (

        <div className={rootClasses.join(' ')} onClick={() => {
            setExit(true)
            setTimeout(() =>{
                setVisible(false)
                setExit(false)
            }, 500)
            
            }}>
            <div className={exit?cl.myModalContentExit:cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={cl.server_response}>
            {message}
            </div>
         
            </div>
        </div>

    )
}

export default ServerResponseModal;
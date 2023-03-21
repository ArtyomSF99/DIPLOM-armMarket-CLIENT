
import React, { useEffect, useRef, useState } from 'react'

import styles from './home.module.scss'
import { ObserverUtil } from '../../utils/observerUtil'

export default function ContactsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
  
    const contentRef = useRef(null)
  
    useEffect(() => {
      ObserverUtil(contentRef, setIsVisible, hasBeenVisible, setHasBeenVisible)
    }, [hasBeenVisible])
  return (
    <div ref={contentRef} className={styles.contactsContainer}>
        <h2 className={`${isVisible? styles.animate : styles.hidden}`}>Կոնտակտներ</h2>
        <p className={`${isVisible? styles.animate : styles.hidden}`}> Եթե ձեր պատվերի հետ կապված հարցեր կամ մտահոգություններ ունեք, խնդրում ենք կապվել մեզ հետ հեռախոսով կամ էլ. Մենք միշտ պատրաստ ենք օգնել ձեզ և լուծել ձեր պատվերի հետ կապված ցանկացած խնդիր:</p>
    </div>
  )
}

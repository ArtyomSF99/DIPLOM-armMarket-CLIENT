
import React, { useEffect, useRef, useState } from 'react'

import styles from './home.module.scss'
import { ObserverUtil } from '../../utils/observerUtil'

export default function AboutUsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
  
    const contentRef = useRef(null)
  
    useEffect(() => {
      ObserverUtil(contentRef, setIsVisible, hasBeenVisible, setHasBeenVisible)
    }, [hasBeenVisible])
  return (
    <div ref={contentRef} className={styles.aboutUsContainer}>
        <h2 className={`${isVisible? styles.animate : styles.hidden}`}>Մեր մասին</h2>
        <p className={`${isVisible? styles.animate : styles.hidden}`}>Մեր ընկերությունը հիմնադրվել է` նպատակ ունենալով ապահովել բարձրորակ ապրանքներ և ծառայություններ մատչելի գներով: Մենք ձգտում ենք երկարաժամկետ հարաբերություններ ստեղծել մեր հաճախորդների հետ՝ նրանց առաջարկելով միայն լավագույն որակի ապրանքներ և ծառայություններ:</p>
    </div>
  )
}


import React, { useEffect, useState } from 'react'

import styles from './home.module.scss'
import { useRef } from 'react'
import { ObserverUtil } from '../../utils/observerUtil'

export default function WhyWe() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
  
    const contentRef = useRef(null)
  
    useEffect(() => {
      ObserverUtil(contentRef, setIsVisible, hasBeenVisible, setHasBeenVisible)
    }, [hasBeenVisible])
  return (
    <div ref={contentRef} className={styles.whyWeContainer}>
        <h2 className={`${isVisible? styles.animate : styles.hidden}`}>Ինչու՞ ընտրում մեզ</h2>
        <p className={`${isVisible? styles.animate : styles.hidden}`}>Մենք աշխատում ենք միայն վստահելի մատակարարների հետ՝ երաշխավորելու մեր արտադրանքի բարձր որակը: Մենք նաև տրամադրում ենք գերազանց հաճախորդների աջակցություն և միշտ պատրաստ ենք օգնել ձեզ ցանկացած հարցով: Բացի այդ, մենք առաջարկում ենք արագ առաքում ամբողջ երկրում, որպեսզի կարողանաք ժամանակին ստանալ ձեր պատվերները:</p>
    </div>
  )
}

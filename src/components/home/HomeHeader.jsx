
import React, { useEffect, useRef, useState } from 'react'

import styles from './home.module.scss'
import { ObserverUtil } from '../../utils/observerUtil'

export default function HomeHeader() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    ObserverUtil(contentRef, setIsVisible, hasBeenVisible, setHasBeenVisible)
  }, [hasBeenVisible])
  
  return (
    <div ref={contentRef} className={styles.homeHeaderContainer}>
        <h2 className={`${isVisible? styles.animate : styles.hidden}`}>Բարի գալուստ ԱրմՄարկետ</h2>
        <p className={`${isVisible? styles.animate : styles.hidden}`}>Մենք առաջարկում ենք ապրանքների լայն տեսականի լավագույն արտադրողներից մատչելի գներով: Մեր ընկերությունն ապահովում է արագ և հուսալի առաքում ամբողջ երկրում, որպեսզի կարողանաք ստանալ ձեր պատվերները ժամանակին և ապահով:</p>
    </div>
  )
}


import React, { useEffect, useState } from 'react'

import styles from './home.module.scss'
import { useRef } from 'react'
import { ObserverUtil } from '../../utils/observerUtil'

export default function OurProducts() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
  
    const contentRef = useRef(null)
  
    useEffect(() => {
      ObserverUtil(contentRef, setIsVisible, hasBeenVisible, setHasBeenVisible)
    }, [hasBeenVisible])
  return (
    <div ref={contentRef} className={styles.ourProductsContainer}>
        <h2 className={`${isVisible? styles.animate : styles.hidden}`}>Մեր տեսականին</h2>
        <p className={`${isVisible? styles.animate : styles.hidden}`}>Այստեղ դուք կգտնեք ապրանքների լայն ընտրանի, ներառյալ էլեկտրոնիկա, կենցաղային տեխնիկա, հագուստ, կոշիկ, կոսմետիկա և այլն: Բոլոր ապրանքները ենթակա են որակի խիստ հսկողության՝ ապահովելու համար, որ դուք ստանում եք միայն լավագույն ապրանքները:</p>
    </div>
  )
}


import React, { useEffect, useRef, useState } from 'react'

import styles from './home.module.scss'
import { ObserverUtil } from '../../utils/observerUtil'

export default function HowItWorks() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
  
    const contentRef = useRef(null)
  
    useEffect(() => {
      ObserverUtil(contentRef, setIsVisible, hasBeenVisible, setHasBeenVisible)
    }, [hasBeenVisible])
  return (
    <div ref={contentRef} className={styles.howItWorksContainer}>
        <h2 className={`${isVisible? styles.animate : styles.hidden}`}>Ինչպես ենք աշխատում</h2>
        <p className={`${isVisible? styles.animate : styles.hidden}`}>Պատվիրելու համար պարզապես ընտրեք այն ապրանքները, որոնք ձեզ դուր են գալիս, ավելացրեք դրանք ձեր զամբյուղում և վճարեք: Մենք կկապվենք ձեզ հետ՝ պատվերը հաստատելու և վճարելու համար, այնուհետև կսկսենք պատրաստել այն առաքման համար։</p>
    </div>
  )
}

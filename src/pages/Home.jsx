import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/Loader/Loader'
import AuthService from '../services/AuthService'
import HomeHeader from '../components/home/HomeHeader'
import HowItWorks from '../components/home/HowItWorks'
import OurProducts from '../components/home/OurProducts'
import AboutUsSection from '../components/home/AboutUsSection'
import ContactsSection from '../components/home/ContactsSection'
import WhyWe from '../components/home/WhyWe'

export default function Home() {
    const[isLoading, setIsLoading] = useState(false)
    
  



  return (
        isLoading
        ?<Loader/>
        :<div>
        <HomeHeader/>
        <HowItWorks/>
        <OurProducts/>
        <WhyWe/>
        <AboutUsSection/>
        <ContactsSection/>
    </div>
    
  )
}

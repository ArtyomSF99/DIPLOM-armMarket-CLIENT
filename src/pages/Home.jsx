import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import AuthService from "../services/AuthService";
import HomeHeader from "../components/home/HomeHeader";
import HowItWorks from "../components/home/HowItWorks";
import OurProducts from "../components/home/OurProducts";
import AboutUsSection from "../components/home/AboutUsSection";
import ContactsSection from "../components/home/ContactsSection";
import WhyWe from "../components/home/WhyWe";
import ImageSlider from "../components/home/ImageSlide";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const images = [
    "https://www.tadviser.ru/images/thumb/0/0d/Screen%D0%BF%D1%80%D0%B2shot_8.png/840px-Screen%D0%BF%D1%80%D0%B2shot_8.png",
    "https://rozetked.me/images/uploads/Jj0wN861DZT9.jpg",
    "https://focus.ua/static/storage/thumbs/920x465/5/6c/9baf5e79-8a4355f0797da691db1b99801ef256c5.jpg?v=0064_1",
    "https://belarch.ru/wp-content/uploads/2020/05/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D1%84%D0%B0%D1%81%D0%B0%D0%B4-1024x696.jpg",
    "https://armenpress.am/static/news/b/2013/12/744556.jpg",
    "https://www.gov.kz/uploads/2020/6/30/ef9d4fe7d980d1862aee436c710d8258_original.1181398.jpg",
    "https://gcagro.by/assets/images/selskoe-hozjajstvo-goldkovagro-minsk.jpg",
    "https://avatars.dzeninfra.ru/get-zen_doc/1880127/pub_5d8141063642b600ac892acd_5d83e4e743863f00aea91b2d/scale_1200",
    "https://cs12.pikabu.ru/post_img/big/2021/01/14/10/1610645199187476692.jpg",
    "https://phoenixtour.org/wp-content/uploads/2021/05/01-ARMENIAN-SOUVENIRS.jpg",
    "https://static.mk.ru/upload/entities/2022/06/09/15/articles/facebookPicture/66/09/ec/c2/b03561903f96465c868f14d59f33a53e.jpg",
    "https://ukrhealth.net/wp-content/uploads/2020/01/kosmetyka5675633-750x400.png",
    "https://cs12.pikabu.ru/post_img/big/2021/05/07/5/1620368408117358458.png",
    "https://media.istockphoto.com/id/1349094915/photo/businessman-using-computer-laptop-for-learning-online-internet-lessons-e-learning-education.jpg?s=612x612&w=is&k=20&c=3yj9ASm-ekkgYKoCK8rAVuSdqWdOWoprRtoQbfS1Sqw=",
    "https://media.istockphoto.com/id/1385303595/photo/close-up.jpg?s=612x612&w=is&k=20&c=GvcqfDlnKRrjJDxX4CwCXQRaW3eJKmvrviP9b5-8aiM=",
    "https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_960_720.jpg",
  ];

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <HomeHeader />
      <ImageSlider images={images} />
      <HowItWorks />
      <OurProducts />

      <WhyWe />
      <AboutUsSection />
      <ContactsSection />
    </div>
  );
}

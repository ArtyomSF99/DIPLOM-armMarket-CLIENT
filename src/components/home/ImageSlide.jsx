import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './home.module.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "ease-in-out",
};

const ImageSlider = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index} className={styles.sliderImgContainer}>
          <img src={imageUrl} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

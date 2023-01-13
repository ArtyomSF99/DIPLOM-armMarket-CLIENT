import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classes from './Products.module.css'
import { API_URL } from '../../http';
import BlockLoader from '../UI/Loader/BlockLoader';


 const ProductImageSlider = (props) => {
    const { images } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setDirection(true);
      };
    const prevImage = () => {
        setCurrentIndex((currentIndex + images.length - 1) % images.length);
        setDirection(false);
      };

    return (
        images
        ?<div className={classes.product_images_container}>
            <div className={classes.product_images_main}>
            {images.length>1 && <img  src='/img/left.png' className={classes.image_prev} onClick={prevImage} alt="product_image"/>}
          
            <CSSTransition in={true} key={currentIndex} timeout={0} classNames={classes.img_cont}>
                <img className={direction ? classes.product_rigth_image : classes.product_left_image} src={`${API_URL}/${images[currentIndex].photo_path}`} alt='kek'/>
            </CSSTransition>
            {images.length>1 && <img src='/img/right.png' className={classes.image_next} onClick={nextImage} alt="product_image"/>}
            </div>
            <div className={classes.product_image_indicator}>
            {images.map((el, index) =>(
                <div key={el.id} className={index === currentIndex?classes.product_indicator_active:classes.product_indicator} ></div>
            ))}
                
            </div>
            
        </div>
        :<div className={classes.product_images_container}>
        <div className={classes.product_images_container_loader}>
        <BlockLoader/>
        </div>
            
        </div>
    )
}

export default ProductImageSlider
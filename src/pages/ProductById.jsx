import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductService from "../services/ProductService";
import ProductImageSlider from "../components/products/ProductImageSlider";
import MyHr from "../components/UI/hr/MyHr";
import MyAvatar from "../components/UI/avatar/MyAvatar";
import MyProductButton from "../components/UI/button/MyProductButton";
import { API_URL } from "../http";
import BlockLoader from "../components/UI/Loader/BlockLoader";
import { Link } from "react-router-dom";
import MyModal from "../components/UI/modal/MyModal";

export default function ProductById() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [myModal, setMyModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    ProductService.getProductById(params.id)
      .then((response) => setProduct(response.data)).then(() =>console.log(product))
  }, []);
  return (
    <div className="main_responsiv">
         <MyModal  visible={myModal} setVisible={setMyModal}>
         <div className="product_slider_modal">
         <ProductImageSlider setMyModal={setMyModal} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} images={product.images_path}/>
         </div>
    
    </MyModal>
      <div className="product_by_id_container">
        <div className="product_by_id_image_slider_container">
        <ProductImageSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setMyModal={setMyModal} images={product.images_path} />

        </div>
        <div className="product_by_id_header">
          <b>{product.product_params && product.product_params.product_name}</b>
        </div>
        <MyHr />
        {product.product_params ? (
          <div className="product_by_id_main_info_container">
            <div className="product_by_id_main_info_block">
              <div className="product_by_id_main_info_key">
                <b>Արժեքը:</b>
              </div>
              <div className="product_by_id_main_info_value">
                {product.product_params && product.product_params.product_price}{" "}
                Դրամ
              </div>
            </div>

            {product.attributes &&
              product.attributes.map((el) => (
                <div key={el.id} className="product_by_id_main_info_block">
                  <div className="product_by_id_main_info_key">
                    <b>{el.attribute_name}:</b>
                  </div>
                  <div className="product_by_id_main_info_value">
                    {el.attribute_value}
                  </div>
                </div>
              ))}
            <div className="product_by_id_main_info_discription">
              <div className="product_by_id_main_info_key">
                <b>Նկարագիրը</b>
              </div>
              <pre className="product_discription">
                {product.product_params &&
                  product.product_params.product_discription}
              </pre>
            </div>
          </div>
        ) : (
          <div className="product_by_id_main_info_container">
            <div className="block_loader_center">
              <BlockLoader />
            </div>
          </div>
        )}

        <div className="product_by_id_date_time">
          Հրապարակման ժամանակը:
          <div className="product_by_id_date">
            {product.product_params && product.product_params.exhibition_date}
          </div>
          <div className="product_by_id_time">
            {product.product_params && product.product_params.exhibition_time}
          </div>
        </div>
        {product.product_user ? (
          <div className="product_by_id_user_container">
            {product.product_user.avatar_path ? (
              <div className="product_by_id_user_avatar">
                <img
                  src={`${API_URL}/${product.product_user.avatar_path}`}
                  alt="avatar"
                />
              </div>
            ) : (
              <div className="product_by_id_user_avatar">
              <MyAvatar name={product.product_user.first_name} size={1}/>
              </div>
              
            )}
            <Link className="link" to={`/user-profile/${product.product_params.user_id}`}>
            <div className="product_by_id_user_name">
              {`${product.product_user.first_name} ${product.product_user.last_name}`}
            </div>
            </Link>
          

            <div className="product_by_id_user_contacts">
              <div className="product_by_id_user_info_key">
                <h5>Կոնտակտներ</h5>
              </div>

              <div className="product_by_id_user_contacts_block">
                <div className="product_by_id_user_info_value">
                  {product.product_user.email}
                </div>
                <div className="product_by_id_user_info_value">
                  {product.product_user.phone}
                </div>
              </div>
            </div>
            <MyHr />
            <div className="product_by_id_user_region">
              <div className="product_by_id_user_info_key">
                <h5>Տարածաշրջան</h5>
              </div>

              <div className="product_by_id_user_contacts_block">
                <div className="product_by_id_user_info_value">
                  {product.product_user.region}
                </div>
              </div>
            </div>
            <MyHr />
            <div>
              <MyProductButton>Գրել</MyProductButton>
            </div>
          </div>
        ) : (
          <div className="product_by_id_user_container">
            <BlockLoader />
          </div>
        )}
      </div>
    </div>
  );
}

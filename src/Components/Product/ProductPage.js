import React, { useContext } from "react";
import TrendingSwiper from "../Trending/TrendingSwiper";
import { useParams } from "react-router-dom";
import ProductData from "../ProductData/myProducts";
import { CartContext } from "../Cart/CartContext";
import "./ProductPage.css";

export default function ProductPage(props) {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = ProductData[id];
  const {
    productTitle,
    productlgImage,
    productsmImage1,
    productsmImage2,
    productsmImage3,
    productDescription,
    productPrice,
    productTexture,
    productWeight,
    productSize,
  } = product;

  const [mainImage, setMainImage] = React.useState(productlgImage);

  React.useEffect(() => {
    setMainImage(productlgImage);
  }, [productlgImage]);

  const [quantity, setQuantity] = React.useState(1);

  const incrementQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const totalPrice = product.productPrice * quantity;

  return (
    <div className="product-main-wrapper product-page-spacing">
      <div className="product-title">
        <h1>{productTitle}</h1>
      </div>

      <div className="product-hero-wrapper">
        <div className="product-hero-left">
          <div>
            <img className="product-lgImage" src={mainImage} alt="" />
          </div>
          <div className="product-smImage-wrapper">
            <img
              onMouseOver={() => setMainImage(productsmImage1)}
              className="product-smImage"
              src={productsmImage1}
              alt=""
            />

            <img
              onMouseOver={() => setMainImage(productsmImage2)}
              className="product-smImage"
              src={productsmImage2}
              alt=""
            />

            <img
              onMouseOver={() => setMainImage(productsmImage3)}
              className="product-smImage"
              src={productsmImage3}
              alt=""
            />
          </div>
        </div>

        <div className="product-hero-right">
          <h2>{productDescription}</h2>

          <div className="product-priceInfo">
            <h2>Quantity:</h2>
            <div className="product-quantityInfo">
              <button
                onClick={decrementQuantity}
                className="product-quantityBtn decrementBtn"
              >
                -
              </button>
              <button className="product-quantityBtn">{quantity}</button>
              <button
                onClick={incrementQuantity}
                className="product-quantityBtn incrementBtn"
              >
                +
              </button>
            </div>
            <h2>${totalPrice}</h2>
          </div>

          <div className="product-purchase">
            <button
              onClick={() => addToCart({ ...product, quantity })}
              className="product-purchaseBtn addBtn"
            >
              Add to Cart
            </button>
            <button className="product-purchaseBtn BuyBtn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="product-information-wrapper">
        <div className="product-information-card">
          <h3>Texture:</h3>
          <p>{productTexture}</p>
        </div>

        <div className="product-information-card">
          <h3>Weight:</h3>
          <p>{productWeight}</p>
        </div>

        <div className="product-information-card">
          <h3>Size:</h3>
          <p>{productSize}</p>
        </div>
      </div>

      <TrendingSwiper />
    </div>
  );
}

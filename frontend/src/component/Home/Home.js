import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Banners from "../layout/Banners/Bannerslider"
import FooterBanner from "../layout/Footer/FooterBanner";
import HomeCategory from "../layout/Category/HomeCategories";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="DigiShop" />

          <Banners />
          <HomeCategory />
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <FooterBanner />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

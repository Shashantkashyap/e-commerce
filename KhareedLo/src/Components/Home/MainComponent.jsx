import React, { useEffect } from 'react'
import Banner from './Banner'
import './Home.css'
import Slide from './Slide'
import {getProducts} from "../redux/Action/action"
import { useDispatch, useSelector } from 'react-redux'

export default function MainComponent() {

  const {products} = useSelector(state=> state.getProductsData);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='homeDiv'>
      <div className='homeSection'>
      <div className="bannerPart">
        <Banner></Banner>
      </div>
      <div className="slidePart">
        <div className="leftSlide">
        <Slide title = "Deal of the day" products={products}></Slide>
        </div>
        <div className="rightSlide">
          <h4>Festive latest launches</h4>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg"  />
          <a href="#">See More</a>
        </div>
      </div>

      <Slide title="Today's deal" products={products}></Slide>

      <div className="centerImage">
        <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
      </div>

      <Slide title="Best Seller" products={products}></Slide>
      <Slide title="Upto 80% off" products={products}></Slide>
      
    </div>
    </div>
  )
}

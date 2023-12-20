import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RxDividerHorizontal } from "react-icons/rx";
//import {products} from "./ProductData"
import "./Slide.css"
// Example import statement in your code
import 'react-multi-carousel/lib/revicons.woff';
import {Link, NavLink} from "react-router-dom"


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({title,products}) => {
  return (
    
      <div className="productsSection">
      <div className="productsDeal">
        <h3>{title}</h3>
        <Link to={"/click"}>
        <button className="viewBtn">View All</button>
        </Link>
      </div>

      <RxDividerHorizontal />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
            products.map((e)=>{
                return(
                  
                  <NavLink to={`/getproductsone/${e.id}`}>
                      <div className="productsItem">
                        <div className="productImage">
                            <img src={e.url} alt="Product-Item" />
                        </div>
                        <p className="productsName">{e.title.shortTitle}</p>
                        <p className="productsOffer">{ e.discount}</p>
                        <p className="productsExplore">{e.tagline}</p>
                    </div>
                    </NavLink>
                )
            })
        }

      </Carousel>
    </div>
    
    
  );
};

export default Slide;

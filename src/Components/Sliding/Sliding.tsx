import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slick-theme.css'
import './Sliding.css'


function SampleNextArrow(props:any) {
  const { className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function Sliding() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1600,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: "linear",
    
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <div className="slider-cmn1">
    <div className="slider-container slider-cmn">
      <Slider {...settings}>
        <div className="slider-img-cmn">
          <img src="/src/assets/images/slidshow/vijay1.jpg" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="/src/assets/images/slidshow/Kanguva2.jpeg" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="/src/assets/images/slidshow/mohanlal1.jpeg" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="/src/assets/images/slidshow/pushpa.jpg" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="/src/assets/images/slidshow/kalki1.jpg" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="/src/assets/images/slidshow/Martin.jpg" className="slider-img"/>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Sliding;

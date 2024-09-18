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
          <img src="https://drive.google.com/thumbnail?id=1Uzj5U4J9h6l5K27xLGdenNPdBERrX_oP" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="https://drive.google.com/thumbnail?id=1N6a5jfX0VcqkMi1qM7Msc3b1fP_SXCdG" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="https://drive.google.com/thumbnail?id=1dJ7Hyb58_xzkPAMyhX9XYRCha9IMBKLu" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="https://drive.google.com/thumbnail?id=14Mc3q7bYsww_ktWPpkHt0ClQSI60fOzW" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="https://drive.google.com/thumbnail?id=1q-btf8RVp5awu2qIgtB8cMEeiHhEUZn9" className="slider-img"/>
        </div>
        <div className="slider-img-cmn">
          <img src="https://drive.google.com/thumbnail?id=1D2VCkNBstz-B_l6MGNFUuwQTSQOeFE4N" className="slider-img"/>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Sliding;

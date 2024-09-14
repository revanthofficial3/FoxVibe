import list from '../API_URL.json'
import { useState } from 'react';
import './Content.css'
import Slider from "react-slick";
import './Slick-theme1.css'
import { useNavigate } from "react-router-dom";


function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
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

function Content() {

    const navigate=useNavigate();

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: false,
            dots: false
          }
        }
      ]
      };

    const [lists,_setList] = useState(list)

  return (
    <div className='content-main-common'>
        <div className='content-common'>  
        <h1 className='content-h1'>Trending Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="trending")&&<div className='content-card' key={id} onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div> 
       

        <div className='content-common'>  
        <h1 className='content-h1'>International</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,artist,category}=element
                    return (category==="international")&&<div className='content-card' key={id} onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:artist}});
                        
                    }}>
                            <img src={image} className='content-image content-image1' title={artist}/>
                            <h2 className='content-movie'>{artist}</h2>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div> 
        
        
        <div className='content-common'>  
        <h1 className='content-h1'>Bollywood Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="bollywood")&&<div className='content-card' key={id}onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>
        
        
        <div className='content-common'>  
        <h1 className='content-h1'>Kollywood Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="kollywood")&&<div className='content-card' key={id}onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>
        
        
        <div className='content-common'>  
        <h1 className='content-h1'><span className='content-number'>90</span>'s Tamil Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="90's tamil songs")&&<div className='content-card' key={id}onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>
        
        
        <div className='content-common'>  
        <h1 className='content-h1'>Tollywood Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="tollywood")&&<div className='content-card' key={id}onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>


         <div className='content-common'>  
        <h1 className='content-h1'>Mollywood Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="mollywood")&&<div className='content-card' key={id}onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>
        
        
        <div className='content-common'>  
        <h1 className='content-h1'>Sandalwood Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="sandalwood")&&<div className='content-card' key={id} onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>
         
         
         <div className='content-common'>  
        <h1 className='content-h1'>Punjabi Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,musicdirector,singer,id,category,movie}=element
                    return (category==="punjabi")&&<div className='content-card' key={id} onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            <h2 className='content-director'>{musicdirector}</h2>
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>
        
        
        <div className='content-common'>  
        <h1 className='content-h1'>Kpop Songs</h1>
        <div className='content-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,singer,id,category,movie}=element
                    return (category==="kpop")&&<div className='content-card' key={id} onClick={()=>{
                        navigate('/Common1Songs',{state:{assign:movie}});
                        
                    }}>
                            <img src={image} className='content-image' title={movie}/>
                            <h2 className='content-movie'>{movie}</h2>
                            {/* <h2 className='content-director'>{musicdirector}</h2> */}
                            <h3 className='content-singer'>{singer}</h3>
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>

    
    </div>
    
  )
}

export default Content
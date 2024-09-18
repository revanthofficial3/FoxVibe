import Navbar from '../Navbar/Navbar';
import Slider from "react-slick";
import list from '../API_URL.json'
import { useState } from "react";
import Footer from '../Footer/Footer';
import './Podcasts.css'
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

function Podcasts() {
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

      const navigate=useNavigate();
      const [_values,_setValues] = useState<any>('');

      

    return ( 
        <div className="podcasts">
            <Navbar></Navbar>
            <div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Trending</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-trending")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }} className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                }
                
                </Slider></div>
        </div>
        </div>



        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Tamil Podcasts</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-tamil")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }}className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>



        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Technology</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-technology")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }}className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Health And Wellbeing</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-health-and-wellbeing")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }} className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Story Telling</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-story-telling")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }}className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Business</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-business")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }}className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Science</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-science")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }}className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>LifeStyle</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-lifestyle")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }}className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Documentary</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-documentary")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }} className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>


        <div className='podcasts-common'>  
        <h1 className='podcasts-h1'>Fiction</h1>
        <div className='podcasts-cmn'>
            <div className="slider-container">
                        <Slider {...settings}>
                          
            {lists.map((element:any)=>{
                const{image,id,category,podcastsname}=element
                    return (category==="podcasts-fiction")&&<div onClick={()=>{
                        navigate('/CommonPodcasts',{state:{assign:podcastsname}});
                        
                    }}className='podcasts-card' key={id}>
                            <img src={image} className='podcasts-image' alt={podcastsname} title={podcastsname}/>
                            <h2 className='podcasts-director'>{podcastsname}</h2>
                            
                    </div>
                })
                } 
                </Slider></div>
        </div>
        </div>
        



            </div>
            <Footer></Footer>
        </div>
        
     );
}

export default Podcasts;

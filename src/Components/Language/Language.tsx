import {useState} from "react";
import Navbar from "../Navbar/Navbar";
import lists from '../API_URL.json'
import CustomAudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from '../Footer/Footer'
import './Language.css'

function Language() {
    const [songCount, setSongcount] = useState<any>();
    const [_total, setTotal] = useState<any>(" ");
    const [isPlaying,setIsplaying] = useState<any>(null);

    const handleClick=(index:any)=>{
        setIsplaying(index);
      }
    
    return ( 
        <div>
            <div>
            <Navbar></Navbar>
            <div className='radio-common'>  
        <h1 className='radio-h1'>All Tamil Radio</h1>
        <div className='radio-cmn'>
            <div className="radio-container">
            {lists.map((element:any,index)=>{
                const{image,id,category,radioname,radioaudio,radiofq}=element
                    return (category==="radio-tamil")&&<div className='radio-card'  key={id}>
                            <img src={image} className='radio-image'
                             title={radioname} onClick={()=>{handleClick(index), setSongcount(radioaudio), setTotal(category=="radio-tamil")}}
                             style={{cursor:'pointer',border:isPlaying===index?"7px solid silver":"",}}/>
                            <h2 className='radio-movie'>{radioname}</h2>
                    </div>})}
                    </div></div>

          </div>
          <div className="radio-footer-cmn">
            <Footer></Footer>
          </div>
          
<div className="CommonPodcasts-audio-cmn1">
            <CustomAudioPlayer songCount={songCount}></CustomAudioPlayer>
                    </div>
            </div>
        </div>
     );
}

export default Language;
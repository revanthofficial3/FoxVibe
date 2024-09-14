import Navbar from '../Navbar/Navbar';
import lists from '../../Components/API_URL.json'
import './Artists.css';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';

function Artists() {

    const navigate=useNavigate();

    return ( 
        <div>
            <Navbar></Navbar>
            <div className='artists-common'>  
        <h1 className='artists-h1'>South India</h1>
        <div className='artists-cmn'>
            <div className="artists-container">
            {lists.map((element:any)=>{
                const{image,id,category,director}=element
                    return (category==="artists")&&<div className='artists-card' key={id} onClick={()=>{
                        navigate('/Common2Songs',{state:{assign:director}});
                        
                    }}>
                            <img src={image} className='artists-image artists-image1' />
                            <h2 className='artists-movie'>{director}</h2>
                    </div>})}</div></div></div>
                    <div className='artists-common'>  
        <h1 className='artists-h1'>North India</h1>
        <div className='artists-cmn'>
            <div className="artists-container">
            {lists.map((element:any)=>{
                const{image,id,category,director}=element
                    return (category==="artists1")&&<div className='artists-card' key={id} onClick={()=>{
                        navigate('/Common2Songs',{state:{assign:director}});
                        
                    }} >
                            <img src={image} className='artists-image artists-image1' />
                            <h2 className='artists-movie'>{director}</h2>
                    </div>})}</div></div></div>
                    <div>
                       <Footer></Footer> 
                    </div>
                    
        </div>
     );
}

export default Artists;
import React, { useEffect } from "react";
import SongList1 from "../SongList.json";
import Navbar from "../Navbar/Navbar";
import CustomAudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from "../Footer/Footer";
import { useState } from "react";
import "./CommonSongs.css";


interface valueAssign{
  assign:any;
}

const Gaana: React.FC<valueAssign> = ({assign}) => {
  const [songCount, setSongcount] = useState<any>();
  const [_total, setTotal] = useState<any>(" ");
  let tot = 0;
  let indexId = 1;
  const [isPlaying,setIsplaying] = useState<any>(null);

  console.log(assign)
  const handleChange=()=>{
    
  }

  useEffect(()=>{handleChange();},[SongList1])


  const handleClick=(index:any)=>{
    setIsplaying(index);
  }

  

  return (
    <div className="gaana-cmn">
      <Navbar></Navbar>
      <div>
        <div className="songlist-cmn">
          {SongList1.map((e: any) => {
            const { image, category, id } = e;
            return ((category) === `${assign}` && (
                <div
                  className="songlist-cmn1"
                  key={id}
                  style={{ backgroundImage: `url(${image})` }}>
                  <div className="songlist-cmn2">
                    <div className="gaana-grid">
                      <img
                        src={image}
                        alt="movie image"
                        className="ganna-img"
                      />
                      <div className="gaana-head1-cmn">
                        <div>
                        
                        <h1 className="gaana-category">{category}</h1>
                        {
                          SongList1.map((e:any)=>{
                            const {type}=e;
                            return (
                                  type===`${assign}`&&<div className="gaana-tot-hide">{tot++}</div>
                            )
                          })
                        }
                        <h1 className="gaana-total">Total Songs:{tot}</h1>
                      </div></div>
                    </div>
                     <table className="songlist-table">
                      <thead className="songlist-thead">
                        <tr>
                        <th className="songlist-th">#</th>
                        <th className="songlist-th">Songs</th>
                        <th className="songlist-th">Music Director</th>
                        <th className="songlist-th songlist-th-artist">Artist</th>
                        <th className="songlist-th">Duration</th>
                        <th className="songlist-th songlist-th-download">Download</th>
                        </tr>
                      </thead>
                     <tbody className="songlist-tbody">
                     {SongList1.map((e1: any, index) => {
                      const { songs, id, duration,musicdirector,singer,songname,type} = e1;

                      

                      return (((type)==`${assign}`) &&<tr onClick={()=>{handleClick(index),setSongcount(songs), setTotal(type=="Gaana Songs"&&(SongList1.length))}} className="songlist-bd-cmn"
                      style={{cursor:'pointer',backgroundColor:isPlaying===index?'grey':'',border:isPlaying===index?"2px solid white":"",}} key={id}>

                          <td className="songlist-index songlist-bd">{indexId++}</td>

                          <td className="songlist-songname songlist-bd" title={songname}>{songname}</td>

                          <td className="songlist-bd"><h3 className="songlist-musicdirector" title={musicdirector}>{musicdirector}</h3></td>

                          <td className=" songlist-bd-artist"><h3 className="songlist-singer" title={singer}>{singer}</h3></td>

                          <td className="songlist-duration songlist-bd">{duration}</td>

                          <td className="songlist-download"><a href={songs} download={songs}><i className="fa fa-download songlist-download1"></i></a></td> 

                          </tr>
                          
                        );
                    })}
                    </tbody> 
                    </table> 
                    
                  </div>
                </div>
              )
            );
          })}
          <div className="gaana-footer-cmn">
            <Footer></Footer>
          </div>
          
          <div className="gaana-audio-cmn">
            <CustomAudioPlayer songCount={songCount}></CustomAudioPlayer> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaana;

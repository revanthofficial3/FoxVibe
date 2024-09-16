import React, { useEffect } from "react";
import CommonPodcasts1 from "../SongList.json";
import API_URL from "../API_URL.json"
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import CustomAudioPlayer from "../AudioPlayer/AudioPlayer";
import { useState } from "react";
import {  useLocation } from 'react-router-dom';

interface valueAssign1{
  assign:any;
}

const Common2Songs: React.FC = () => {
  const [songCount, setSongcount] = useState<any>();
  const [_total, setTotal] = useState<any>(" ");
  let tot = 0;
  let indexId = 1;
  const [isPlaying,setIsplaying] = useState<any>(null);

  const location = useLocation();
  const state = location.state as valueAssign1;

  const handleChange=()=>{
    
  }

  useEffect(()=>{handleChange();},[CommonPodcasts1])


  const handleClick=(index:any)=>{
    setIsplaying(index);
  }

  

  return (
    <div className="Common1Songs-cmn">
      <Navbar></Navbar>
      
      <div>
        <div className="Common1Songs-cmn">
          {API_URL.map((e: any) => {
            const {  image, id,type,director } = e;
            return ((director) === `${state.assign}` && (
                <div
                  className="CommonPodcasts-cmn1"
                  key={id}
                  
                  style={{ backgroundImage: `url('${image}')` }}
                  >
                  <div className="CommonPodcasts-cmn2">
                    <div className="CommonPodcasts-grid-songs">
                      <img
                        src={image}
                        alt="movie image"
                        className="ganna-img"
                      />
                      <div className="CommonPodcasts-head1-cmn">
                        <div>
                        
                        <h1 className="CommonPodcasts-category">{director}</h1>
                        {
                          CommonPodcasts1.map((e:any)=>{
                            const {musicdirector}=e;
                            return (
                              (musicdirector)===`${state.assign}`&&<div className="CommonPodcasts-tot-hide">{tot++}</div>
                            )
                          })
                        }
                        <br />  
                        <h1 className="CommonPodcasts-total">Total Songs : {tot}</h1>
                      </div></div>
                    </div>
                    <table className="songlist-table">
                      <thead className="songlist-thead">
                        <tr>
                        <th className="songlist-th">#</th>
                        <th className="songlist-th">Songs</th>
                        <th className="songlist-th">Artist</th>
                        <th className="songlist-th">Duration</th>
                        <th className="songlist-th songlist-th-download">Download</th>
                        </tr>
                      </thead>
                     <tbody className="songlist-tbody">
                     {CommonPodcasts1.map((e1: any, index) => {
                      const { songs, id, duration,musicdirector,singer,songname } = e1;
                       return (((musicdirector)===`${state.assign}`) &&<tr onClick={()=>{handleClick(index),setSongcount(songs), setTotal(type=="Gaana Songs"&&(CommonPodcasts1.length))}} className="songlist-bd-cmn"
                      style={{cursor:'pointer',backgroundColor:isPlaying===index?'grey':'',border:isPlaying===index?"2px solid white":"",}} key={id}>

                          <td className="songlist-index songlist-bd">{indexId++}</td>

                          <td className="songlist-songname songlist-bd">{songname}</td>
                          
                          
                          <td className=" songlist-bd"><h3 className="songlist-singer1" title={singer}>{singer}</h3></td>

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
          <div className="artists-footer-cmn">
            <Footer></Footer>
          </div>
          
          <div className="CommonPodcasts-audio-cmn">
            <CustomAudioPlayer songCount={songCount}></CustomAudioPlayer>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Common2Songs;

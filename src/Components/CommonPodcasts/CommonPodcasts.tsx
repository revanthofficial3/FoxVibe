import React, { useEffect } from "react";
import CommonPodcasts1 from "../SongList.json";
import API_URL from "../API_URL.json"
import Navbar from "../Navbar/Navbar";
import CustomAudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from "../Footer/Footer"
import { useState } from "react";
import './CommonPodcasts.css'
import { useLocation } from 'react-router-dom';

interface valueAssign1{
  assign:any;
}

const CommonPodcasts: React.FC = () => {
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
    <div className="CommonPodcasts-cmn">
      <Navbar></Navbar>
      
      <div>
        <div className="CommonPodcasts-cmn">
          {API_URL.map((e: any) => {
            const { image, id,podcastssummary,podcastsname } = e;
            return (podcastsname === `${state.assign}` && (
                <div
                  className="CommonPodcasts-cmn1"
                  key={id}
                  
                  style={{ backgroundImage: `url('${image}')` }}
                  >
                  <div className="CommonPodcasts-cmn2">
                    <div className="CommonPodcasts-grid">
                      <img
                        src={image}
                        alt="movie image"
                        className="ganna-img"
                      />
                      <div className="CommonPodcasts-head1-cmn">
                        <div>
                        
                        <h1 className="CommonPodcasts-category">{podcastsname}</h1>
                        {
                          CommonPodcasts1.map((e:any)=>{
                            const {podcastsname}=e;
                            return (
                              podcastsname===`${state.assign}`&&<div className="CommonPodcasts-tot-hide">{tot++}</div>
                            )
                          })
                        }
                        <h1 className="CommonPodcasts-total1">{podcastssummary}</h1>
                        <h1 className="CommonPodcasts-total">Total Podcasts:{tot}</h1>
                      </div></div>
                    </div>
                     <table className="CommonPodcasts-table">
                      <thead className="CommonPodcasts-thead">
                        <tr>
                        <th className="CommonPodcasts-th">#</th>
                        <th className="CommonPodcasts-th">Topic</th>
                        <th className="CommonPodcasts-th">Duration</th>
                        <th className="CommonPodcasts-th CommonPodcasts-th-download">Download</th>
                        </tr>
                      </thead>
                     <tbody className="CommonPodcasts-tbody">
                     {CommonPodcasts1.map((e1: any, index) => {
                      const { id, podcastsduration,podcastsname,podcaststopic,podcastsaudio,type } = e1;
                      return ((podcastsname==`${state.assign}`) &&<tr onClick={()=>{handleClick(index), setSongcount(podcastsaudio), setTotal(type=="CommonPodcasts Songs"&&(CommonPodcasts1.length))}} className="CommonPodcasts-bd-cmn"
                      style={{cursor:'pointer',backgroundColor:isPlaying===index?'grey':'',border:isPlaying===index?"2px solid white":"",}} key={id}>

                          <td className="CommonPodcasts-index CommonPodcasts-bd">{indexId++}</td>

                          <td className="CommonPodcasts-songname CommonPodcasts-bd">{podcaststopic}</td>

                          <td className="CommonPodcasts-duration CommonPodcasts-bd">{podcastsduration}</td>

                          <td className="CommonPodcasts-download"><a href={podcastsaudio} download={podcastsaudio}><i className="fa fa-download CommonPodcasts-download1"></i></a></td> 

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
          <div className="commonpodcasts-footer-cmn">
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

export default CommonPodcasts;

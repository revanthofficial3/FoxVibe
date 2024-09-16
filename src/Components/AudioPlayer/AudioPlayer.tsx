import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { makeStyles } from '@mui/styles';
import './Styles.css'

const useStyles = makeStyles((_Theme:any) => ({
  player: {
    '& .rhap_container': {
      color:"yellowgreen",
      
    },
    '& .rhap_main-controls-button': {
      color:"white",
      
    },
    '& .rhap_time': {
        color:"white",
        fontWeight:"bold",
        fontSize:"1.1rem",
    },
  },
}));

interface CustomAudioPlayerProps {
  songCount: any;
}

const CustomAudioPlayer:React.FC<CustomAudioPlayerProps> = ({songCount}) => {
  const classes = useStyles();
  return (
    <div className=''>
    <AudioPlayer
      className={classes.player}
      src={songCount}
      onPlay={_e => console.log("onPlay")}
      
    />
    
    </div>
  );
};

export default CustomAudioPlayer;

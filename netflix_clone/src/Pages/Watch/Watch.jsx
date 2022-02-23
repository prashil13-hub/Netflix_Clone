import React from 'react'
import './Watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon/>
            Home
        </div>
        <video 
            src="https://ak.picdn.net/shutterstock/videos/1066836493/preview/stock-footage-big-city-businessman-uses-smartphone-stands-on-crowded-street-e-commerce-visualization-of.webm" 
            className='video' 
            autoPlay 
            progress 
            controls
        />
    </div>
  )
}

export default Watch
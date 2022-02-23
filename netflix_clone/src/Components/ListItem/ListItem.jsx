import React, { useState } from 'react'
import './ListItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
function ListItem({index}) {

    const [isHovered,setIsHovered] = useState(false);
    const trailer = "https://ak.picdn.net/shutterstock/videos/1066836493/preview/stock-footage-big-city-businessman-uses-smartphone-stands-on-crowded-street-e-commerce-visualization-of.webm"

    return (
        <div 
            className="listItem" 
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)} 
            style={{left:isHovered && index*225-50 + index*2.5}}
        >
            <img 
                src="https://c4.wallpaperflare.com/wallpaper/683/1000/3/anime-one-piece-monkey-d-luffy-shanks-one-piece-wallpaper-preview.jpg" 
                alt="cc" 
            />
            {
                isHovered && (
                    <>
                        <video src={trailer} autoPlay={true} loop></video>
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrowIcon/>
                                <AddIcon/>
                                <ThumbUpOutlinedIcon/>
                                <ThumbDownOffAltOutlinedIcon/>
                            </div>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className='limit'>+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut mollitia fugit tenetur molestiae eaque labore accusamus similique ipsam sed.
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </>
                )
            }
            
            {/* <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon/>
                    <AddIcon/>
                    <ThumbUpOutlinedIcon/>
                    <ThumbDownOffAltOutlinedIcon/>
                </div>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut mollitia fugit tenetur molestiae eaque labore accusamus similique ipsam sed.
            </div>
            <div className="genre">
                Action
            </div> */}
        </div>
    )
}

export default ListItem
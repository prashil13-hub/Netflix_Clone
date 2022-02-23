import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

function Navbar() {
    const [isSrrolled,SetIsScrolled] = useState(false)
    // console.log(window.pageYOffset)

    window.onscroll=()=>{
      SetIsScrolled(window.pageYOffset == 0 ? false : true)
      return () => window.onscroll = null
    }
    // console.log(isSrrolled)

    return (
        <div className={isSrrolled ? "navbar scrolled" : "navbar"} style={{position:'fixed'}}>
          <div className="container">
              <div className="left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                  alt=""
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
              </div>

              <div className="right">
                <SearchIcon className='icon'/>
                <span className='icon'>KID</span>
                <NotificationsIcon className='icon'/>
                <img
                  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div className="profile">
                  <ArrowDropDownIcon className='icon'/>
                  <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}

export default Navbar
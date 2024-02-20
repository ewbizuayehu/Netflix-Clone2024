import React from 'react'
import "../Header/header.css"
import Netflixlogo from "../../Assets/Images/Netflix-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Header() {
  return (
    <>
<div class="list-and-logo-container">
<div class="list-container">
              <ul>
                <li><img src={Netflixlogo} alt="Netflix Logo" /></li>
                <li>Home</li>
                <li>Tvshows</li>
                <li>Latest</li>
                <li>My List</li>
                <li>Browse by languages</li>
            </ul>
        </div>
      
        <div className="logo-container">
      <ul>
      <li><SearchIcon/></li>
      <li><NotificationsNoneIcon/></li>
      <li><AccountBoxIcon/></li>
      <li><ArrowDropDownIcon/></li>
      </ul>
      </div>
</div>
        </>
    
  )
}

import React from 'react'
import "../Footer/Footer.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';


export default function Footer() {
  return (
    
    <div>
      <>
      <div class="Footer-Wrapper">
      <div class="First-wrapper">
        <div class="logoo">
          <FacebookRoundedIcon/>
          <Instagram/>
          <YouTubeIcon/>
        </div>
        <div class="list-one">
          <ul>
            <li>Audio Descerption</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
            <li>service code</li>
          <li class="lastline">
          <div> <CopyrightIcon/></div>
          <div>1997-2024 Netflix,Inc</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="Second-wrapper">
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        </div>
      <div class="Third-Wrapper">
        <li>Gift Crads</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
      </div>
      </div>
      
      </>
      
    </div>
    
    
  )
}


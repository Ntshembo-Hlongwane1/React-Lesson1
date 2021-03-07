import React from 'react';
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="https://images.unsplash.com/photo-1459623837994-06d03aa27b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMHN0b3JlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Home Banner" className="banner"/>
      <div className="banner-text">
        <h4 className="banner-header">Check out our new releases</h4>
        <button className="btn btn-new-releases">New Books</button>
      </div>
    </div>
  )
}

export default Banner

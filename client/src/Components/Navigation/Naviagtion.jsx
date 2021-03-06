import React from 'react';
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <h1 className="nav-logo">
          <span className="nav-logo-first" >e-</span>
          <span className="nav-logo-second" >Books</span>
        </h1>
      </div>
      <ul className="nav-right nav-links">
        <li className="nav-link" >Saved Books</li>
        <li className="nav-link" >Favorite</li>
      </ul>
    </div>
  )
}

export default Navigation

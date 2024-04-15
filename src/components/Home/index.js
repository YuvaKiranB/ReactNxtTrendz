// Write your JS code here

import GetHeader from '../Header'
import './index.css'

const GetHome = () => (
  <div className="homeRoute">
    <GetHeader />
    <div className="homeContainer">
      <div className="homeContent">
        <h1 className="homeH1">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="homeImage1"
        />
        <p className="homeText">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shopNowButton">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="homeImage2"
      />
    </div>
  </div>
)

export default GetHome

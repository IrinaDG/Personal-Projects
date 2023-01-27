import React from 'react'
import { Link } from "react-router-dom"
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg" 
import Slider from '../components/Slider'
import logo from "../assets/jpg/logo 1.png"


function Explore() {
  return (
    <div className="explore">
      <header className="headerExplore">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <p className="pageHeaderHome">Welcome to House Hunt!</p>
      </header>
      <main>
        <Slider />
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent category image"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Venues for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell category image"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Venues for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore
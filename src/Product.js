import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Carousel from './MediaCarousel.js';
import Review from './Review.js'

import './index.scss';
import importAll from './ImportImages';

const img = importAll(require.context('./img', false,/\.(png|jpe?g|svg)$/));

const MediaDict = [
  img['p5-gp1.jpg'],
  img['p5-gp2.jpg'],
  img['p5-gp3.jpg'],
]

const StarRating = () => {
  return(
    <>
      <fieldset className="rating">
          <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 stars"></label>
          <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
          <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Meh - 3 stars"></label>
          <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
          <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
        </fieldset>
    </>
  )
}

const TextBox = ({header, body}) => {
  return(
    <>
    <div className="textbox-wrapper">
      <div className="text-header"> {header} </div>
      <div> {body} </div>
    </div>
    </>
  )
}

const Product = () => {
  return(
    <div className='product'>
      <div className='grid'>
          <div className="r1c1">
            <div><a className="game-name" href="#game-name">Persona 5</a></div>

            <div><a className="game-company-name" href="#game-company-name">Altus</a></div>

            <div><span className="game-price">$26.99</span></div>
          </div>
          <div className="r1c2">
            <div className="rating-div">
              <span className="rate-this-title">Rate this title!</span>
              <a className="rating-value" href="#rating-value"></a>
              <br/>
              <StarRating/>
            </div>
          </div>
          <div className='r1cesrb'>
            <img className="esrb-rating" src={img['teen-esrb-rating.png']} alt="#jsx display esrb rating type"/>
          </div>
          <div className="r1c3">
            <div className="genre">
              <span>Genre:  </span>
              <a className="genre" href="#genre">RPG</a>
            </div>

            <div className="developer">
              <span>Developer: </span>
              <a className="developer" href="#developer">Altus</a>
            </div>


            <div className="release-date">
              <span>Release Date: </span>
              <a className="release date" href="#release-date">Apr 4, 2017</a>
            </div>

            <div className="number-of-players">
              <span># of Players: </span>
              <a className="number-of-players" href="#number-of-players">1</a>
            </div>
        </div>

        <div className="r2c1">
          <img className='game-cover' src={img['Ps4_Persona5.jpg']} alt='game cover.' />

          <Carousel mediaDict={MediaDict}/>
        </div>

        <div className="r3c1">
          <TextBox
            header='Description'
            body='A role-playing video game developed by Atlus.'/>
          <p>
          <Link to='/review'>
            <button>Write a review</button>
          </Link>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Product;

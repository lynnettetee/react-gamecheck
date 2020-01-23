import React from 'react';
import {useState, useLayoutEffect} from 'react';
import {ParallaxProvider, ParallaxBanner} from 'react-scroll-parallax';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './index.scss';
import importAll from './ImportImages';
import NavBar from './NavBar.js';
import ProductPage from './Product.js';
import Filter from './Filter.js';


//call importAll function to simplify image importing
const img = importAll(require.context('./img', false,/\.(png|jpe?g|svg)$/));

const latestGames = [
    img['Ps3_KingdomHearts.jpg'],
    img['Ps4_DeathStranding.jpg'],
    img['Ps4_FinalFantasy15.jpg'],
    img['Ps4_Persona5.jpg'],
    img['Switch_MarioKart8Deluxe.jpg'],
  ];
  
  const filterContent = {
    'Price': ['< 50','< 100'],
    'Developer': ['SquareEnix','Overflow', 'The Coalition'],
    'Rating': ['4+','3+','2+','1+'],
    'Category': ['itemCBL1','itemCBL2']
  }
  
  const productContent = {
    'Latest': Array(4).fill(img['Ps4_Persona5.jpg']),
  
    'Adventure': Array(2).fill(img['Ps4_Persona5.jpg']),
  
    'Role Play': Array(3).fill(img['Ps4_Persona5.jpg']),
  }
const ImgWithimgCaption = ({imgSrc, imgAlt, imgCaption}) => {
  return(
    <>
      <img src={imgSrc} alt={imgAlt} />
      <div>{imgCaption}</div>
    </>
  );
}

const ProductList = ({productListTitle, productList}) => {
  return(
    <>
      <div className='comp-title'>{productListTitle}</div>
      <div className='product-list'>
      {productList.map((productImgURL) => {
          return(
            <Link to='/Product'>
                <input className='product-img' type='image' src={productImgURL} alt={String(productImgURL)}/>
            </Link>
          )
      })}
      </div>
    </>
  )
}

const Home = () => {
  const [offset ,setOffset] = useState(0)

  useLayoutEffect(() => {
    window.scrollTo(handleScroll)
  })

  const handleScroll = () => {
    setOffset(window.pageYOffset);
    return offset;
  }


  return(
    <>
      <ParallaxProvider>
        <ParallaxBanner
          className='parallax-banner'
          layers={[
            {
              image: img['bg.jpg'],
              amount: 0.1,
            },
            {
              image: img['gc.png'],
              amount: 0.4,
            },
          ]}
          style={{height: 1000}}
        >
          <div>GameCheck</div>
        </ParallaxBanner>
      </ParallaxProvider>
      
      <div className='grid'>
        <div className='r1c1'>  
          {Object.keys(filterContent).map(category => {
            return <Filter filterTitle={category} filterItemList={filterContent[category]}/>
          })}
        </div>
        

        <div className='r1c2'>
          {Object.keys(productContent).map(category => {
            return <ProductList productListTitle={category} productList={productContent[category]}/>
          })}
        </div>
        
      </div>      
    </>
  );
}

// ReactDOM.render(<Home/>, document.getElementById('root'));
export default Home;

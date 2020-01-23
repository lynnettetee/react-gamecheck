import React from 'react'
import {useState} from 'react'

const DisplayClickableMedia = ({mediaSrc, clickFunction}) => {
  return(
        <span><input className="clickable-media" type='image' src={mediaSrc} alt={String(mediaSrc)} onClick={() => clickFunction }/></span>
  )
}

const DisplayMedia = ({mediaSrc, mediaAlt}) => {
    return(
        <img className="media-displayed" src={mediaSrc} alt={String(mediaSrc)}/>
    )
}

const CarouselBanner = ({mediaDict, clickFunction}) => {
  return (
    <>
      {mediaDict.map((mediaSrc) =>
         <input type='image' src={mediaSrc} alt={String(mediaSrc)} onClick={() => clickFunction(mediaDict.indexOf(mediaSrc))}/>)
      }
    </>
  )
}

const MediaCarousel = ({mediaDict}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerClickFunction = (i) => {
    setCurrentIndex(i)
  }

  return(
    <>
      <div className='carousel-wrapper'>
        <div className='current-media-container'>
          <DisplayMedia className='current-media' mediaSrc={mediaDict[currentIndex]} />
        </div>

        <div className='banner-wrapper'>
          <CarouselBanner mediaDict={mediaDict} clickFunction={i => bannerClickFunction(i)}/>
        </div>
      </div>
    </>
  )
}

export default MediaCarousel;

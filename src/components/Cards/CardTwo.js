import React from 'react'
import './CardTwo.scss'

const CardTwo = ({title, subTitle, image, link}) => {
  function onClick(){
    const url=new URL(link)
    window.open(url, '_blank');
  }
  return (
    <div class="cardTwo" onClick={onClick}>
      <img src={image.src} alt={image.alt} loading={image.loading} />
      <div class="container-card2">
        <h5>{subTitle}</h5>
        <h3>
          {title}
        </h3>
      </div>
    </div>
  )
}

export default CardTwo
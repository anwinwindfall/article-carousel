import React from 'react'
import './cardOne.scss'



const CardOne = ({title, subTitle, image, link}) => {

  function onClick(){
    const url=new URL(link)
    window.open(url, '_blank');
  }
  console.log(subTitle, "SubTitle");
  return (
    <div class="cardOne" onClick={onClick}>
      <img src={image.src} alt={image.alt} loading={image.loading}/>
      <div class="container-card1">
        <h5>{subTitle}</h5>
        <h3>
          {title}
        </h3>
      </div>
    </div>
  )
}

export default CardOne
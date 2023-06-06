import React from 'react'
import cl from './ServiceCardsItem.module.scss'
// import { useNavigate } from 'react-router-dom'

const ServiceCardsItem = ({ img, title, content}) => {
    // const navigate = useNavigate()

    // function openPost(){
    //   navigate("/posts/" + id)
    // }
    
      return (
        <div className={cl.card_item}>
          <img src={img} alt="post-img" />
          <h3>{title}</h3>
          <p>
            {content}
          </p>
          <button >Подробнее &#8594;</button>
        </div>
      );
  }
  
  export default ServiceCardsItem
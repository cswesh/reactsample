import React from 'react'
import { CardsData } from '../data'
import Card from '../Card/Card'
import './Cards.css'

const Cards = () => {
  return (
    <div className="Cards">
        {CardsData.map((card,id)=>{
            return(
               <div className="parentContainer">
                   <Card
                   title={card.title}
                   barValue={card.barValue}
                   png={card.png}
                   value={card.value}
                   series={card.series}
                   />
               </div> 
            )
        })}
    </div>
  )
}

export default Cards
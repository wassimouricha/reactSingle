import React from 'react'
import './Features.scss'
import Cartes from '../models/Cartes'

type cardType = {
    cardType : Cartes,
}

const Features : React.FC<cardType> = ({cardType}) => {
    
  return (
    <section className="card-container">

    <div className="card">
      <i className="fas fa-paint-brush"></i>
      <div className='minilogo'>
        <img src={cardType.image} alt="" />
      </div>
      <div className='titre'>
      <h1>Feature {cardType.id} </h1>
      </div>
      <div className='texted'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate Perspiciatis voluptate Perspiciatis  Perspiciatis voluptate</p>
      </div>

    </div>

  </section>
  )
}

export default Features
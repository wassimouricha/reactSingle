import React from 'react'
import './Pricing.scss'
import Prices from '../models/Prices'

type priceType = {
  priceType : Prices,
}


const Pricing  : React.FC<priceType>= ({priceType}) => {
  return (
    <div>
        
        <section className="card-container">
        <div className="cardus">
          <div className='titred'>
          <h4>{priceType.titre}  </h4>
          </div>
          <div className='prix'>
            <h1>$ {priceType.titre} / <span>month</span></h1>
          </div>
          <div className='texteus'>
          <p>✔️Feature 1 </p>
          <p>✔️Feature 2 </p>
          <p>✔️Feature 3 </p>
          </div>
    
        </div>
    
      </section>
    </div>

  )
}

export default Pricing
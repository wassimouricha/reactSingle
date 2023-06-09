import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Wave from './component/Wave';
import Features from './component/Features';
import Cartes from './models/Cartes';
import Pricing from './component/Pricing';
import Prices from './models/Prices';
import TitlePricing from './component/TitlePricing';
import Footer from './component/Footer';



function App() {
  const cardData : Cartes[] = [
    {
      id: 1,
      image: 'https://img.icons8.com/?size=512&id=oCl22zgAt5aC&format=png'
    },
    {
      id: 2,
      image: 'https://img.icons8.com/?size=512&id=WshOqi6C94ui&format=png'
    },
    {
      id: 3,
      image: 'https://img.icons8.com/?size=512&id=kG6Xz40JEYZr&format=png'
    },
    {
      id: 4,
      image: 'https://img.icons8.com/?size=512&id=2ymty3Z0baF5&format=png'
    },
    {
      id: 5,
      image: 'https://img.icons8.com/?size=512&id=wdTQ4xPuCrZy&format=png'
    },
    {
      id: 6,
      image: 'https://img.icons8.com/?size=512&id=PdZloh4nlSwY&format=png'
    },
    {
      id: 7,
      image: 'https://img.icons8.com/?size=512&id=QGJF9VsnEmuo&format=png'
    },
    {
      id: 8,
      image: 'https://img.icons8.com/?size=512&id=8mxyaq7lS3Dj&format=png'
    },
    {
      id: 9,
      image: 'https://img.icons8.com/?size=512&id=o0NhVAeU37Sz&format=png'
    },
  ]

  const priceData : Prices[] = [
    {
      id: 1,
      prix: '14.99',
      titre: 'Starter'
    },
    {
      id: 2,
      prix: '29.99',
      titre: 'Premium'
    },
    {
      id: 3,
      prix: '49.99',
      titre: 'Business'
    },
    {
      id: 4,
      prix: '99.99',
      titre: 'Tycoon'
    },
  ]
  return (
    <div className="App">
    <Navbar />
    <Wave />
    <div className='card-container'>
    {cardData.map((cardData) => { return <Features key={cardData.id}  cardType={cardData }/> })}
    </div>
    <TitlePricing />
    <div className='card-contained'>
    {priceData.map((priceData) => { return <Pricing key={priceData.id}   priceType={priceData}/> })}
    </div>
    <Footer />
    </div>
  );
}

export default App;

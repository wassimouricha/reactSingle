import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Wave from './component/Wave';
import Features from './component/Features';
import Cartes from './models/Cartes';
import Pricing from './component/Pricing';



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
  return (
    <div className="App">
    <Navbar />
    <Wave />
    <div className='card-container'>
    {cardData.map((cardData) => { return <Features key={cardData.id}  cardType={cardData }/> })}
    </div>
    <Pricing  />

    </div>
  );
}

export default App;

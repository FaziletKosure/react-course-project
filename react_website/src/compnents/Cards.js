import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import data from '../../src/cartItemData.json'
import cartItem from '../../src/cartItem.json'
import fulldata from '../../src/fullstack.json'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              {
                  data.map((items,i)=>   <CardItem key={i}
                  {...items}
                />)
              }
          </ul>
          <ul className='cards__items'>
          {
                  cartItem.map((item,i)=>   <CardItem key={i}
                  {...item}
                />)
              }
         
          </ul>
          <ul className='cards__items'>
          {
                  fulldata.map((item,i)=>   <CardItem key={i}
                  {...item}
                />)
              }
    
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

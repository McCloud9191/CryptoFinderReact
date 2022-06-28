import React from 'react'

const Coin = ({name, icon, price, symbol}) => {
  return (
    <div className='coin'>
        <h2>Name: {name}</h2>
        <img src={icon} alt="coin" />
        <h3>Price: {price}$</h3>
        <h3>Icon: {symbol}</h3>
        <button>Buy</button>
    </div>
  )
}

export default Coin
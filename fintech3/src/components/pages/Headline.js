import React from 'react'
import TextLoop from 'react-text-loop'
import "../styles/headline.scss"

function Headline() {
  return (
    <div className='headline-container'>
        <h1> Welcome to SikePay</h1>
        <p>Discover the power of easypay using Sikepay</p>
        <div className='animated-text-container'>
            
                <TextLoop className='components'>
                    <span>Etherium</span><br />
                    <span>Decentralization</span><br />
                    <span>Crypto</span>
                </TextLoop>
            
        </div>        
    </div>
  )
}

export default Headline
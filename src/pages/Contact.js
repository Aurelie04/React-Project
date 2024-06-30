import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';

function Contact() {
  return (
    <div className='contact'
      style={{ background: `url({PizzaLeft})` }}>
        <div className='leftSide'></div>
        <div className='rightSide'>
            <h2> Contact Us</h2>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name </label>
                <input name='name' placeholder='Enter Full name' type='text' />
                <label htmlFor='email'>Email </label>
                <input name='email' placeholder='Enter Email' type='text' />
            </form>
        </div>


    </div>
  )
}

export default Contact
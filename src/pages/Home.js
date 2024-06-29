import { Button } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import BackgrongImage from "../assets/pizzaBckground.jpeg";
import"../styles/Home.css";

function Home() {
  return 
  <div className='home' style={{ background: `url({BackgrongImage})` }}>
      <div className='headerContainer'>
        <h1>Delicious Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="menu">
          <button> ORDER NOW </button>
        </Link>
        
        
      </div>
  </div>
  
}

export default Home
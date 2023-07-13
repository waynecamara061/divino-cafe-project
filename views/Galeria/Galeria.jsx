import React, { useState } from 'react'
import Header from '../../src/components/Banner/Header/Header'
import { Link } from "react-router-dom";
import './index.scss';
import galeria_1 from '../../src/img/galeria_1.jpg';
import galeria_2 from '../../src/img/galeria_2.jpg';
import galeria_3 from '../../src/img/galeria_3.jpg';
import galeria_4 from '../../src/img/galeria_4.jpg';
import galeria_5 from '../../src/img/galeria_5.jpg';
import galeria_6 from '../../src/img/galeria_6.jpg';
import galeria_7 from '../../src/img/galeria_7.jpg';
import galeria_8 from '../../src/img/galeria_8.jpg';
import galeria_9 from '../../src/img/galeria_9.jpg';
import galeria_10 from '../../src/img/galeria_10.jpg';
import galeria_11 from '../../src/img/galeria_11.jpg';
import galeria_12 from '../../src/img/galeria_12.jpg';
import galeria_13 from '../../src/img/galeria_13.jpg';
import galeria_14 from '../../src/img/galeria_14.jpg';
import galeria_15 from '../../src/img/galeria_15.jpg';
import galeria_16 from '../../src/img/galeria_16.jpg';
import galeria_17 from '../../src/img/galeria_17.jpg';
import galeria_18 from '../../src/img/galeria_18.jpg';
import galeria_19 from '../../src/img/galeria_19.jpg';
import galeria_20 from '../../src/img/galeria_20.jpg';
import galeria_21 from '../../src/img/galeria_21.jpg';
import galeria_22 from '../../src/img/galeria_22.jpg';
import galeria_23 from '../../src/img/galeria_23.jpg';

const Galeria = () => {

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  
  return (
    <div>
        <Header />
        <div className='nGaleria'>
            <h1>
              GALERIA
            </h1>      
        </div>
        <div className='nFotos'>
          <div  
            className={`foto ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={galeria_1} alt="galeria_1" />
          </div>
          <div className="foto">
            <img src={galeria_2} alt="galeria_2" />
          </div>
          <div className="foto">
            <img src={galeria_3} alt="galeria_3" />
          </div>
          <div className="foto">
            <img src={galeria_4} alt="galeria_4" />
          </div>
          <div className="foto">
            <img src={galeria_5} alt="galeria_5" />
          </div>
          <div className="foto">
            <img src={galeria_6} alt="galeria_6" />
          </div>
          <div className="foto">
            <img src={galeria_7} alt="galeria_7" />
          </div>
          <div className="foto">
            <img src={galeria_8} alt="galeria_8" />
          </div>
          <div className="foto">
            <img src={galeria_9} alt="galeria_9" />
          </div>
          <div className="foto">
            <img src={galeria_10} alt="galeria_10" />
          </div>
          <div className="foto">
            <img src={galeria_11} alt="galeria_11" />
          </div>
          <div className="foto">
            <img src={galeria_12} alt="galeria_12" />
          </div>
          <div className="foto">
            <img src={galeria_13} alt="galeria_13" />
          </div>
          <div className="foto">
            <img src={galeria_14} alt="galeria_14" />
          </div>
          <div className="foto">
            <img src={galeria_15} alt="galeria_15" />
          </div>
          <div className="foto">
            <img src={galeria_16} alt="galeria_16" />
          </div>
          <div className="foto">
            <img src={galeria_17} alt="galeria_17" />
          </div>
          <div className="foto">
            <img src={galeria_18} alt="galeria_18" />
          </div>
          <div className="foto">
            <img src={galeria_19} alt="galeria_19" />
          </div>
          <div className="foto">
            <img src={galeria_20} alt="galeria_20" />
          </div>
          <div className="foto">
            <img src={galeria_21} alt="galeria_21" />
          </div>
          <div className="foto">
            <img src={galeria_22} alt="galeria_22" />
          </div>
          <div className="foto">
            <img src={galeria_23} alt="galeria_23" />
          </div>
        </div>
    </div>
  )
}

export default Galeria
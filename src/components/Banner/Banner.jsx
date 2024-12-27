import React from 'react';
import './style.css'
// import { Container } from './styles';

function Banner() {
  return (
    <div className='banner'>
        <nav className='banner-nav'>
            <h1 className='title-1'>Sofya Batista</h1>
            <ul>
                <li><a href='#'>Sobre</a></li>
                <li><a href='#'>Projetos</a></li>
                <li><a href='#'>Contato</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Banner;
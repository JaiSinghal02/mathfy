import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/banner.png'

export default function Header(){
    return(
        <div className='header-div'>
            <div className='header-logo-container'>
                <div className='header-logo-div'>
                    <img src={logo} alt='logo'/>
                </div>
            </div>
            <div className='header-banner-container'>
                <div className='header-banner-div'>
                    <img src={banner} alt='banner'/>
                    <div className='header-banner-text'>A fun way to evaluate expressions</div>
                </div>
            </div>
        </div>
    )
}
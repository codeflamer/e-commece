/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ShopMen from '../../assets/shopmens.jpg';
import ShopWomen from '../../assets/shopwomens.jpg';
import './styles.scss';

const Directory = () => {
    return (
        <div className='directory'>
            <div className='wrap-directory'>
                <div 
                      className='item'
                      style={{
                          backgroundImage:`url(${ShopMen})`
                      }}>
                    <a href='#'> Men's Cloth</a>
                </div>
                <div 
                      className='item'
                      style={{
                          backgroundImage:`url(${ShopWomen})`
                      }}>
                     <a href='#'>Women's Cloth</a>
                </div>
            </div>
        </div>
    )
}

export default Directory

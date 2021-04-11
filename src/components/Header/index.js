import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';

const Header  = () => {
    return (
        <header>
          <div className='wrap'>
            <div className='Logo'>
                {/* <img src='' alt='logoimage'/> */}
                <Link to='/'>
                   Tolu's Fashion
                </Link> 
            </div>

            <div className='callToaction'>
              <ul>
                <li>
                    <Link to='/registration'>
                      Registration
                    </Link>
                </li>
                 {/* <li>
                    <Link to='/registration'>
                      Registration
                    </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </header>
    )
}

export default Header 

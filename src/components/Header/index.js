import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/utils';

const Header  = (props) => {
    const{currentUser} = props;

    const handleClick =()=>{
     auth.signOut()
    }

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

              {currentUser && (
                <ul>
                  <li>
                      <span onClick={handleClick}>
                        Logout
                      </span>
                  </li>
                </ul>
              )}

              {!currentUser && (
                <ul>
                  <li>
                      <Link to='/registration'>
                        Registration
                      </Link>
                  </li>
                  <li>
                      <Link to='/login'>
                        Login
                      </Link>
                  </li>
              </ul>
              )}

              
            </div>
          </div>
        </header>
    )
}

Header.defaultProps = {
  currentUser:null
}

export default Header 

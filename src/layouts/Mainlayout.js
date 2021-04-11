import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Mainlayout = (props) => {
    return (
        <div>
           <Header/>
           <div className='main'>
                {props.children}
           </div>
           <Footer/>
        </div>
    )
}

export default Mainlayout

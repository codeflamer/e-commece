import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Homepagelayout = (props) => {
    return (
        <div>
           <Header {...props}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Homepagelayout

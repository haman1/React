import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <h2>Ar <span>-Homes</span></h2>
            
            <span className="secondaryText">
                Our Vision is to make all people <br></br>
                get the best places to stay
            </span>
            </div>
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className='secondaryText'>139 Lennox, Ave, NewYork</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>About Us</span>
                    <span>Product</span>
                    <span>Services</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;
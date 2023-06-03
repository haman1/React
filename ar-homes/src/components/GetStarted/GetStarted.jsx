import React from 'react'
import './GetStarted.css';
function GetStarted() {
  return (
    <section className='g-wrapper'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Ar-Homes</span>
                <span className='secondaryText'>Subscribe and find super attractive quotes from us<br></br>
                Find your residence soon
                </span>

                <button className="button">
                    <a href="mailto:ar-homes@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted;
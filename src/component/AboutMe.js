import profile from '../assests/profile.jpeg'
import React from 'react'
import './AboutMe.css'
const AboutMe = () => {
    return(
        <div>
            <div className= 'cointner'>
             <img src={profile} className = 'profile-picture' alt = 'reema'/>
             <h1>Reema mansour</h1>
             <p> 16 years-old .<br></br> Studying at G.O.S .<br></br> I'm a Dabkah dancer at ANQAA-PDT  <br></br>  Member at GSG Family  <br></br>Student&Volunteer at AMIDEAST-Gaza <br></br> Here is my <a href='https://www.facebook.com/reema.niveen'>Facebook Account</a> , and my <a href='https://www.instagram.com/reemamansour1/'>Instagram Account</a> </p>
            <p> My favirote book is : Milk and honey!</p>
            <button onClick ={() => {alert('Thanks for reading!')}} className = 'button'>Thanks!</button>


             </div>

        </div>
    )
}

export default AboutMe;
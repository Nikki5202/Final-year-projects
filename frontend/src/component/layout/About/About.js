
import React from "react";
import "./About.css";
import Img from './pic.jpg'
import Img2 from './raki.jpeg'

function About () {
    let message = `Project: Digital E-commerce Application (DigiShop)`;
    return (
      
      <section class="section-white">
 
    <div class="container">
      
        <div class="row">
       
                    <div class="head">

                          <h6> ABOUT US </h6>

                          <p class="section-subtitle">{message}</p>
                          
                    </div> 
             
            
              <div class="frame">
                  <div class="team-item">
                  
                      <img src={Img} class="team-img" alt="pic" />                   
                      <h3>NIKKI KUMAR H</h3>            
                      <div class="team-info"><p>MERN STACK DEVELOPER</p></div>
                      <p></p> 
            </div> 
                  <div class="team-item">
                  
                      <img src={Img2} class="team-img" alt="pic" />
                     
                      <h3>RAKESH G</h3>
                      
                      <div class="team-info"><p>FRONTEND DEVELOPER</p></div>

                      <p></p>
                  
                      </div>

            </div> 

        </div> 
    
    </div> 

    </section>
    )
}

export default About;
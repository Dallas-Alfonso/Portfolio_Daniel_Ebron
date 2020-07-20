import React from 'react';

import Layout from '../components/Layout';
/* import PageFooter from '../components/PageFooter'; */
import SideBar from '../components/Sidebar';

import pic2 from '../assets/images/Hotel-Rooms.png';
import pic3 from '../assets/images/C-Stats.png';
import pic6 from '../assets/images/Snake.png';
import pic7 from '../assets/images/E-Commerce.png';
/* import pic8 from '../assets/images/pic08.jpg'; */
/* import Scroll from '../components/Scroll'; */
/* import Number4 from '../Number4.gif'; */
import './app.css';

import {Button} from "../components/Button";

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header >
{/*
            <div className="mainBack">
              <h8>
                Hi! I'm Daniel
              </h8>
              <br />
              <h8>
              A Web Developer
              </h8>
              <br />
              <h8>
                Let take a look at my work!
              </h8>
            </div>
*/}
            
              
            {/*<h2 className="alt">*/}
              <h2>
              <span class="backGroundBorder" >
              Hi! I'm <strong>Daniel </strong>
              </span>
              <br />
              <p>
              <span class="backGroundBorder">
              A Web Developer
              </span>
              </p>
              </h2>
            {/*</h2>*/}
          
            <p className="pColor">
              <span class="backGroundBorder"> 
              Let's look at my Projects!
              </span>
            </p>
            
            
          </header>
          
          {/* <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
          */}
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
        
            <h9>Portfolio</h9>
            
          </header>

         
          
          <div className="row2"> {/*style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} */} {/* className="row" */}
            

          <article className="grid-item">
              <div className="containerForOverLay">
                
                  <img src={pic7} alt="" className="image-fitz" />
                  <div className="overlay">
                  <h3 className="text"> Call Me Maybe  </h3>
                  <h3 className="text2">React | Bootstrap | JavaScipt | CSS </h3>
                  </div>

                </div>
                <header className="headerstyle">

                  <Button>
                  <a target="_Blank" href="https://call-me-maybe.netlify.app/" rel="noreferrer" >
                  <h3>Live Project</h3>
                  </a>
                  </Button>

                  <Button>
                  <a target="_Blank" href="https://github.com/Dallas-Alfonso/Call-Me-Maybe" rel="noreferrer">
                  <h3>Git Hub Repo</h3>
                  </a>
                  </Button>
                </header>
              </article>

              <article className="grid-item">
              <div className="containerForOverLay">
                
                  <img src={pic3} alt="" className="image-fitz"/>
                  <div className="overlay">
                  <h3 className="text"> Together We Stand  </h3>
                  <h3 className="text2">React | API | Javascipt | CSS</h3>
                  </div>
                
                </div> 

                <header className="headerstyle">
                  
                  <Button type="button">
                  <a target="_Blank" href="https://cproj.netlify.app/" rel="noreferrer">
                  <h3>Live Project</h3>
                  </a>
                  </Button>

                  <Button>
                    <a target="_Blank" href="https://github.com/Dallas-Alfonso/Together-We-Stand" rel="noreferrer">
                  <h3>Git Hub Repo</h3>
                  </a>
                    </Button>
                </header>
              </article>
          
              
              <article className="grid-item">{/* styles container of image? */}  
                
              <div className="containerForOverLay">
              

                {/* styling here is for ACTUAL image */}
                  <img src={pic2} alt="" className="image-fitz"/>

                  <div className="overlay">
                  <h3 className="text">Paradise Rooms</h3>
                  <h3 className="text2">React | Javascipt | CSS </h3>
                  </div>
              </div>  
                
                <header className="headerstyle">

                  <Button type="button" >
                  <a target="_Blank" href="https://paradise-rooms.netlify.app/" rel="noreferrer">
                    <h3>
                    Live Project
                    </h3>
                  </a>
                  </Button>

                  <Button>
                  <a target="_Blank" href="https://github.com/Dallas-Alfonso/Paradise-Rooms" rel="noreferrer">

                    
                  <h3>Git Hub Repo</h3>
                  </a>
                  </Button>
                </header>
                
              </article>  
              
              <article className="grid-item">
              <div className="containerForOverLay">
                
                  <img src={pic6} alt="" className="image-fitz"/>
                  <div className="overlay">
                  <h3 className="text"> Snake Of Doom  </h3>
                  <h3 className="text2">React | Javascipt | CSS</h3>
                  </div>
              </div>

                <header className="headerstyle">

                  <Button>
                    <a target="_Blank" href="https://snake-of-doom.netlify.app/" rel="noreferrer">
                  <h3>Live Project</h3>
                  </a>
                  </Button>

                  <Button>
                    <a target="_Blank" href="https://github.com/Dallas-Alfonso/Snake-Of-Doom" rel="noreferrer">
                  <h3>Git Hub Repo</h3>
                  </a>
                  </Button>
                </header>
              </article>
              
              
            
          </div>

          
          
        </div>
      </section>

      {/*<div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Magna Nullam</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Natoque Vitae</h3>
                </header>
              </article>
            </div>*/}

      <section id="about" className="three">
        <div className="container">
          <header>
            <h9>About Me</h9>
          </header>
          {/*
          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>
           */}
          <p>
            I am a Web Developer with a background in Finance.  
            I like to build reactive Web Applications and am always looking to grow, both professionally and personally.
            I am a motivated self starter and a team player.
            Outside of work, I enjoy boxing, biking, golfing, going on great hikes and playing basketball.
            

          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h9>Contact</h9>
          </header>

          <p>
            Let's build something together.  Let's connect!  
          </p>


          {/* ?subject=Portfolio Applicants! */}
          <form method="post" action="mailto:dallas.ebron@gmail.com" enctype="text/plain">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input aria-label="Name" type="text" name="Name" placeholder="Name"/>
              </div>
              <div className="col-6 col-12-mobile">
                <input aria-label="Email" type="text" name="Email" placeholder="Email"/>
              </div>
              {/* 
              <div className="col-6 col-12-mobile">
                <input type="text" name="Subject" placeholder="Subject" />
              </div>
              */}
              <div className="col-12">
                <textarea aria-label="Message" name="Message" placeholder="Message" />
              </div>
              <div className="col-12">
                
                <input aria-label="Send Message" type="submit" value="Send Message" />
                
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    
  </Layout>
);

export default IndexPage;

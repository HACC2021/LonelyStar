import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "../App.css"

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return (  
            // <Header data={JsonData.Header}></Header>
            <header>
            <div className="intro-logo jumbo-bg">
              <h1>Welcome to OHABot!</h1>
              <h3>Need information about the services of the Office of Hawaiian affairs? <br></br>
                  If so then you're in the right place! 
                  You can chat with OHABot to get routed to relevant information by clicking the button below. 
              </h3>

              {/* <img
                src="https://bootstrapmade.com/demo/themes/eStartup/img/hero-img.png"
                className=""
                alt=""
              /> */}
              <div className="intro-button">
                <a href="chat">Chat with OHABot</a>
              </div>
            </div>
      
            <style jsx>{`
              header {
                margin-bottom: 1rem;
                height: 100vh;
                // background-image: linear-gradient(red, yellow);
                background: rgb(238,174,202);
                background: linear-gradient(6deg, rgba(238,174,202,1) 0%, rgba(196,183,81,1) 0%, rgba(148,187,233,1) 100%);
              }
              .intro-logo {
                display: flex;
                position: absolute;
                top: 5em;
                bottom: 0;
                left: 0;
                right: 0;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                text-align: center;
              }
      
              .intro-logo h1 {
                font-size: 1.8em;
                font-weight: 900;
                font-family: 'Philosopher', sans-serif;
                color: var(--brand-color);
              }
              @media (min-width: 768px) {
                .intro-logo h1 {
                  font-size: 3.5em;
                }
              }
              .intro-logo h3 {
                font-size: 1rem;
                font-weight: 300;
                color: var(--gray-color-1);
                margin-bottom: 3em;
              }
      
              .intro-logo img {
                max-width: 95%;
                height: auto;
              }
              .company-icons__item + .company-icons__item {
                margin-left: 1rem;
              }
              @media (min-width: 575px) {
                .company-icons__item + .company-icons__item {
                  margin-left: 2rem;
                }
              }
              .company-icons__item i {
                margin-right: 5px;
              }
              .intro-button {
                margin-top: 2.3em;
                margin-bottom: 3em;
              }
              .intro-button a {
                padding: 0.65em 2.6em;
                border-radius: 20px;
                color: var(--brand-color);
                border: 1.8px solid var(--brand-color);
                background: white;
                transition: all 0.5s;
              }
              .intro-button a:hover {
                background-color: var(--brand-color);
                color: white;
              }
      
              .company-icons {
                color: var(--gray-color-2);
                font-size: 0.95em;
              }
              .company-icons__item {
                transition: all 0.5s;
              }
              .company-icons__item:hover {
                color: var(--brand-color);
                cursor: pointer;
              }
            `}</style>
          </header>

        );
    }
}
 
export default LandingPage;
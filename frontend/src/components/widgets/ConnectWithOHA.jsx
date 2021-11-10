import React, { Component } from 'react';

class ConnectWithOHA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div aria-label="Page 1" data-page-number="1">
            <p>For information on upcoming OHA events, please visit our events calendar at&nbsp;<a href="https://www.oha.org/events/">https://www.oha.org/events/</a> or visit any of our social media accounts on <a href="https://www.facebook.com/officeofhawaiianaffairs/">Facebook</a>&nbsp;or&nbsp;<a href="https://www.instagram.com/oha_hawaii/?hl=en">Instagram</a><a href="https://www.instagram.com/oha_hawaii/?hl=en">.</a> You can also <a href="https://kawaiola.news/subscribe/">subscribe</a> to our <strong>Ka Wai Ola</strong>, our free, monthly newspaper (and e-newspaper) that serves the Hawaiian community by reporting on critical issues that impact not&nbsp;only Hawaiians but the community at large.</p>
            </div>
         );
    }
}
 
export default ConnectWithOHA;
import React, { Component } from 'react';

class CareersWithOHA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div aria-label="Page 1" data-page-number="1">
            <p>For a listing of available employment opportunities with OHA, please visit our website at&nbsp;<a href="https://www.oha.org/jobs">https://www.oha.org/jobs</a>, download an application and submit it along with your resume to:</p>
            <p><br role="presentation" />Office of Hawaiian Affairs, 560 N. Nimitz Hwy., Suite 200 <br role="presentation" />Honolulu, Hawaii 96817 <br role="presentation" />Attention: Human Resources <br role="presentation" />or email <a href="mailto:ohahr@oha.org">ohahr@oha.org</a>.</p>
            <p><br role="presentation" />If you have any questions, please contact our office at 808-594-1888. Mahalo for your interest.</p>
            </div>
         );
    }
}
 
export default CareersWithOHA;
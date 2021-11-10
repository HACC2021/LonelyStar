import React, { Component } from 'react';

class OHABoardMeeting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div aria-label="Page 1" data-page-number="1">There are two ways you can submit public testimony for an OHA board meeting be either: (1) <br role="presentation" />email written testimony at least 24 hours prior to the scheduled meeting, or (2) as live, oral&nbsp;testimony online during the Public Testimony portion of the virtual meeting. Public testimony&nbsp;must be limited to matters listed on the meeting agenda. <br role="presentation" />You may also testify on Community Concerns if this is listed on a meeting agenda. Community <br role="presentation" />Concerns allows the public to provide testimony on matters that are not listed on the meeting&nbsp;agenda.&nbsp;If you would like to submit public testimony, please <a href="https://www.oha.org/how-to-submit-testimony-for-oha-bot-meetings/">Click Here</a> for more details.</div>
        );
    }
}
 
export default OHABoardMeeting;
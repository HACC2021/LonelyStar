import React, { Component } from 'react';

import {Button} from 'react-bootstrap'

class Ancestry extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Button href="https://www.oha.org/registry" variant="secondary" size="lg">
                Verify your ancestry
            </Button>          
        );
    }
}
 
export default Ancestry;
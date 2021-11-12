import React, { Component } from 'react';
import {Button,Popover, OverlayTrigger} from 'react-bootstrap'
import BusinessLoans from './BusinessLoans';
import EmergencyFinancialAssistance from './EmergencyFinancialAssistance';
import LoanBalance from './LoanBalance';
import PersonalLoans from './PersonalLoans';

class LoansGeneral extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const businessPopover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">Business Loans</Popover.Header>
              <Popover.Body>
                  <BusinessLoans/>
              </Popover.Body>
            </Popover>
          );

        const personalPopover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">Personal Loans</Popover.Header>
              <Popover.Body>
                  <PersonalLoans/>
              </Popover.Body>
            </Popover>
          );

        const emergencyPopover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">Emergency Loans</Popover.Header>
              <Popover.Body>
                  <EmergencyFinancialAssistance/>
              </Popover.Body>
            </Popover>
          );

        const balancePopover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">Check your loan balance</Popover.Header>
              <Popover.Body>
                  <LoanBalance/>
              </Popover.Body>
            </Popover>
          );

        return (
            <div>
                <OverlayTrigger trigger="click" rootClose placement="left" overlay={businessPopover}>
                    <Button variant="success">Business Loans</Button>
                </OverlayTrigger>

                <OverlayTrigger trigger="click" rootClose placement="right" overlay={personalPopover}>
                    <Button variant="success">Personal Loans</Button>
                </OverlayTrigger>

                <OverlayTrigger trigger="click" rootClose placement="right" overlay={emergencyPopover}>
                    <Button variant="success">Emergency Loans</Button>
                </OverlayTrigger>

                <OverlayTrigger trigger="click" rootClose placement="right" overlay={balancePopover}>
                    <Button variant="success">Check loan balance</Button>
                </OverlayTrigger>

                {/* <Button variant="secondary" size="lg">
                    Personal Loans
                </Button>
                <Button variant="secondary" size="lg">
                    Emergency Loans
                </Button> */}
            </div>
          );
    }
}
 
export default LoansGeneral;
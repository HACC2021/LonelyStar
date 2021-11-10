class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const url = 'http://127.0.0.1:8000/api/chat';
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          "question": message
        })
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(data =>
            {
            switch(JSON.parse(data).answer) {
              case "1":
                this.actionProvider.handleScholarships();
                break;
              case "2":
                this.actionProvider.handleAncestry();
                break;
              case "3":
                this.actionProvider.handleLoansGeneral();
                break;
              case "4":
                this.actionProvider.handleBusinessLoans();
                break;
              case "5":
                this.actionProvider.handlePersonalLoans();
                break;
              case "6":
                this.actionProvider.handleEmergencyFinancialAssistance();
                break;
              case "7":
                this.actionProvider.handleOHABoardMeeting();
                break;
              case "8":
                this.actionProvider.handleConnectWithOHA();
                break;
              case "9":
                this.actionProvider.handleCareersWithOHA();
                break;
              case "10":
                this.actionProvider.handleKuleanaLandTax();
                break;
              case "11":
                this.actionProvider.handleOHADatabase();
                break;
              case "12":
                this.actionProvider.handleContactTrustee();
                break;
              default:
                console.log(data)
                console.log('defaultttt')
                console.log(typeof JSON.parse(data).answer)
            }
        })
        .catch((error) => {
          console.log(error)
        });
        
        
        // if (message.includes('hello')) {
          // this.actionProvider.handleHello();
          // }
          
      // console.log(message);
    }
  }

export default MessageParser;
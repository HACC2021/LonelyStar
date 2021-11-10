class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello() {
    const botMessage = this.createChatbotMessage('Hello. Nice to meet you.');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  handleScholarships() {
    const botMessage = this.createChatbotMessage(
      "Here is what I found for scholarships",
      {
        widget: 'scholarships',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleAncestry() {
    const botMessage = this.createChatbotMessage(
      "To verify if you are eligible for the services of OHA and/or sign up the Hawaiian Registry card, please click the button below",
      {
        widget: 'ancestry',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  } 

   handleLoansGeneral() {
    const botMessage = this.createChatbotMessage(
      "OHA provides 3 types of loans; Business loans, Personal Loans and Emergency Loans." + 
      " To learn more about any of the 3 loans, please select the corresponding option below ",
      {
        widget: 'loansGeneral',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleBusinessLoans() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for business loans",  
      {
        widget: 'businessLoans',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handlePersonalLoans() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for personal loans",  
      {
        widget: 'personalLoans',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleEmergencyFinancialAssistance() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for emergency financial assistance",  
      {
        widget: 'emergencyFinancialAssistance',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleOHABoardMeeting() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for testifying in the OHA board meeting",  
      {
        widget: 'OHABoardMeeting',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleConnectWithOHA() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for connecting with OHA and staying updated",  
      {
        widget: 'connectWithOHA',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleCareersWithOHA() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for jobs at OHA",  
      {
        widget: 'careersWithOHA',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleKuleanaLandTax() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for Kuleana land tax exemption",  
      {
        widget: 'kuleanaLandTax',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleOHADatabase() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for OHA's database",  
      {
        widget: 'OHADatabase',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

   handleContactTrustee() {
    const botMessage = this.createChatbotMessage(
      "Heres what I found for contacting your trustee",  
      {
        widget: 'contactTrustee',
      }
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

}

export default ActionProvider;
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if (message.includes('hello')) {
        this.actionProvider.handleHello();
      }

      // if (message.includes('dog')) {
      //   this.actionProvider.handleDog();
      //   console.log(message);
      // }
      console.log(message);
    }
  }

export default MessageParser;
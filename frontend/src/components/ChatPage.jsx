import React, { Component } from 'react';
import config from './bot/config.js';
import MessageParser from './bot/MessageParser.js';
import ActionProvider from './bot/ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                />
                <h1>sup</h1>
             </div>
        );
    }
}
 
export default ChatPage;
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
            <div className="container">
                <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                disableScrollToBottom={true}
                />

                <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // background-image: linear-gradient(red, yellow);
                }
                `}</style>
             </div>
        );
    }
}
 
export default ChatPage;
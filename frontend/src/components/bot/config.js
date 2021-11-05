import { createChatBotMessage } from 'react-chatbot-kit';
import  DogPicture from '../DogPicture'

const botName = 'OHABot';

const config = {
  initialMessages: [createChatBotMessage(`Aloha! I'm ${botName} and I'm here to help you with questions about
  the services of the Office of Hawaiian Affairs`), createChatBotMessage('How can I help you?')],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
import { createChatBotMessage } from 'react-chatbot-kit';
import Ancestry from '../widgets/Ancestry';
import BusinessLoans from '../widgets/BusinessLoans';
import PersonalLoans from '../widgets/PersonalLoans';
import LoansGeneral from '../widgets/LoansGeneral';
import Scholarships from '../widgets/Scholarships';
import EmergencyFinancialAssistance from '../widgets/EmergencyFinancialAssistance';
import OHABoardMeeting from '../widgets/OHABoardMeeting';
import ConnectWithOHA from '../widgets/ConnectWithOHA';
import CareersWithOHA from '../widgets/CareersWithOHA';
import KuleanaLandTax from '../widgets/KuleanaLandTax';
import OHADatabases from '../widgets/OHADatabases';
import ContactTrustee from '../widgets/ContactTrustee';

const botName = 'OHABot';

const config = {
  initialMessages: [createChatBotMessage(`Aloha! I'm ${botName} and I'm here to help you with questions about
  the services of the Office of Hawaiian Affairs`), createChatBotMessage('How can I help?')],
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
      widgetName: 'scholarships',
      widgetFunc: (props) => <Scholarships {...props} />,
    },
    {
      widgetName: 'ancestry',
      widgetFunc: (props) => <Ancestry {...props} />,
    },
    {
      widgetName: 'loansGeneral',
      widgetFunc: (props) => <LoansGeneral {...props} />,
    },
    {
      widgetName: 'businessLoans',
      widgetFunc: (props) => <BusinessLoans {...props} />,
    },
    {
      widgetName: 'personalLoans',
      widgetFunc: (props) => <PersonalLoans {...props} />,
    },
    {
      widgetName: 'emergencyFinancialAssistance',
      widgetFunc: (props) => <EmergencyFinancialAssistance {...props} />,
    },
    {
      widgetName: 'OHABoardMeeting',
      widgetFunc: (props) => <OHABoardMeeting {...props} />,
    },
    {
      widgetName: 'connectWithOHA',
      widgetFunc: (props) => <ConnectWithOHA {...props} />,
    },
    {
      widgetName: 'careersWithOHA',
      widgetFunc: (props) => <CareersWithOHA {...props} />,
    },
    {
      widgetName: 'kuleanaLandTax',
      widgetFunc: (props) => <KuleanaLandTax {...props} />,
    },
    {
      widgetName: 'OHADatabase',
      widgetFunc: (props) => <OHADatabases {...props} />,
    },
    {
      widgetName: 'contactTrustee',
      widgetFunc: (props) => <ContactTrustee {...props} />,
    },
  ],
};

export default config;
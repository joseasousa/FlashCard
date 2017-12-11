import Reactotron from 'reactotron-react-native';

const tron = Reactotron
  .configure({
    name: 'Flash Card',
  })
  .connect();

global.tron = tron;

import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';


const tron = Reactotron
  .configure({
    name: 'Flash Card',
  })
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking())
  .connect();

global.tron = tron;

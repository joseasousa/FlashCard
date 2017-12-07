import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking,
  } from 'reactotron-react-native';
  
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
  
  global.console.log = tron.log;
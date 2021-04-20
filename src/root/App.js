
import React, { useEffect } from 'react';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import { store } from '../redux/store/index';

const App = () => {

  //GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

  // LogBox.ignoreLogs(['Setting a timer']);
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;

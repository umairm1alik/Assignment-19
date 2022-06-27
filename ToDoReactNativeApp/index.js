/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppWraper from './AppWraper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWraper);

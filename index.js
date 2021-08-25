import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';

// import './src/services/task';

ReactNativeForegroundService.register();
AppRegistry.registerComponent(appName, () => App);

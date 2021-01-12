import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import createStore from './reducks/store/store';
import {ConnectedRouter} from  'connected-react-router';
import {createBrowserHistory} from 'history'
import Amplify from "aws-amplify";                    
import config from "./aws-exports";   
import { MuiThemeProvider } from "@material-ui/core"
import {theme} from "./assets/theme"

const history = createBrowserHistory();                 
Amplify.configure(config)    

export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

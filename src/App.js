import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './App.css';
import SearchBox from './SearchBox'
import makeExpanding from './expanding-animation';
import AppBar from './AppBar';

const ExpandingSearchBox = makeExpanding(SearchBox);

class App extends Component {
  render() {
        //https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
        const style = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

    return (
        <MuiThemeProvider>
          <div >
           <AppBar />
            <div style={style}>

            <ExpandingSearchBox/>
          </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;

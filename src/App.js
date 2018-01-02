import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from 'store';

import './App.css';
import EntryListView from './features/EntryListView/EntryListView';
import OverviewView from './features/OverviewView/OverviewView';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <div className="App">
                        <EntryListView />
                        <OverviewView />
                    </div>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;

import React, { Component } from 'react';

import './App.css';
import fakeEntries from './fakeEntries';
import EntryList from './features/EntryList/EntryList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <EntryList entries={fakeEntries} />
            </div>
        );
    }
}

export default App;

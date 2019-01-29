import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './global.scss'

class App extends Component {
    render() {
        return (
            <div>
                Hello React
            </div>
        );
    }
}

const mountEl = document.getElementById('root');
ReactDOM.render(<App />, mountEl)
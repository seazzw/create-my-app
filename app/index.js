import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './global.scss';
import { Button } from '@alifd/next';

class App extends Component {
    render() {
        return (
            <div>
                Hello React
                <Button type="primary">Normal</Button>
            </div>
        );
    }
}

const mountEl = document.getElementById('root');
ReactDOM.render(<App />, mountEl)
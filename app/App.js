import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from '@alifd/next';
import './styles/global.scss';

class App extends Component {
    render() {
        return (
            <div>
                <p>
                    <Button type='primary'>Hello React!</Button>
                </p>
            </div>
        );
    }
}

export default App;
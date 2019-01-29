import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';

class Home extends Component {
    static propTypes = {};

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

export default Home;
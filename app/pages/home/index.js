import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Button } from '@alifd/next';

class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <p>
                    <Button type='primary'>Hello Reacttt!</Button>
                </p>
            </div>
        );
    }
}

export default Home;

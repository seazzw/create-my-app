import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
// import { Button } from '@alifd/next';

import MediaElement from './MediaElement';

class Home extends Component {
    static propTypes = {};

    render() {
        const sources = [
            // { src: 'http://www.streambox.fr/playlists/test_001/stream.m3u8', type: 'application/x-mpegURL' }
            // { src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4' }
            // { src: 'rtmp://firehose.cul.columbia.edu:1935/vod/mp4:sample.mp4', type: 'video/rtmp' }
            { src: 'rtmp://pili-live-rtmp.nanjids.com/nanjids/1', type: 'video/rtmp' }
        ];
        const config = {};
        const tracks = {};
        return (
            <div>
                <MediaElement
                    id='player1'
                    mediaType='video'
                    preload='none'
                    controls
                    width='640'
                    height='360'
                    poster=''
                    sources={JSON.stringify(sources)}
                    options={JSON.stringify(config)}
                    tracks={JSON.stringify(tracks)}
                />
            </div>
        );
    };
}

export default Home;

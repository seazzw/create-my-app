import React from 'react';
import ReactDOM from 'react-dom';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';
import App from './App';

const mountEl = document.getElementById('root');
ReactDOM.render(<App />, mountEl);

import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import 'antd/dist/antd.css';
import Main from './Pages/Main'
import  './rem.js'

import './static/css/public.css'
import { hasPrefixSuffix } from 'antd/lib/input/ClearableLabeledInput';

// import './index.css'
ReactDom.render(<Main />,document.getElementById('root'))

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


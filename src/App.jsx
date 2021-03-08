import React from 'react'

import {/*BrowserRouter*/HashRouter as Router} from 'react-router-dom'
import DiaRouter from "./router";

import './assets/css/base.css'
import 'normalize.css'

function App() {
    return (
        <Router>
            <DiaRouter/>
        </Router>
    )
}

export default App

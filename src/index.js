import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './globalStyles'
import App from './app'

import './i18next'


ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <GlobalStyles />
            <App />
    </Suspense>,
    document.getElementById('root')
)
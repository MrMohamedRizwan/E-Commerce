import React from 'react'
import ReactDOM from 'react-dom/client'
import Mark1 from './mark1.jsx'
import './index.css'
import Head from './heade.jsx'
import Mark2 from './mark2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head/>
    <Head/>

    <div id="min">
    <Mark1 />
    <Mark2 s/>
    </div>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authprovider from './context/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Authprovider>
      <div className='dark:bg-slate-900 dark:text-white'>
        <App />
      </div>
    </Authprovider>
  </React.StrictMode>,
)

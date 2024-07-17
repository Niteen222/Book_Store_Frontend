import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auth from './context/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Auth>
      <div className='dark:bg-slate-900 dark:text-white'>
        <App />
      </div>
    </Auth>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MyContext from './MyContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext><App /></MyContext>
)

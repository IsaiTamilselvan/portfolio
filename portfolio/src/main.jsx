import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

// This is the starting point of our React app
// ReactDOM.createRoot finds the <div id="root"> in index.html
// and renders our App component inside it

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

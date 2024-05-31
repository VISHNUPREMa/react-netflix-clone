import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import RowPost from './Components/RowPost/RowPost.jsx'
import {action , originals , comedy , romance} from './Constants/url.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NavBar/>
   <Banner/>
   <RowPost url={originals} title='Netflix Originals' />
   <RowPost url={action} title='Actions'  isSmall /> 
   <RowPost url={comedy} title='Comedy'  isSmall />
   {/* <RowPost url={romance} title='Romance'  isSmall /> */}
  </React.StrictMode>,
)

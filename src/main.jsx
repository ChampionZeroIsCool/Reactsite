import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import SidebarLayout from './SidebarLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SidebarLayout /> */}
    <Layout />
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UploadFile from './UploadFile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App numberCount={5}/>
    <App numberCount={8} />
    <div className='flex-col flex'>
      <UploadFile />
    </div>
  </StrictMode>,
)

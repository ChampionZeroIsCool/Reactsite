import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function UploadFile() {
  const [state, setState] = useState('upload');
  function uploadFunction() {
    setState('processing');
  }

  if (state == 'upload') {
    return (
      <>
        <button  className='bg-black' onClick={uploadFunction}>upload</button>
      </>
    )
  }
  if (state == 'processing') {
    return (
      <>
        <h1>Processing...</h1>
        
        
      </>
    )
  } 
}

export default UploadFile

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider 
    domain="dev-221dvdydsptdq8xc.us.auth0.com"
    clientId="adLVRsE4mUM1IW0ydpYkwYR4bhJUHHLR"
    redirectUri={window.location.origin}>

    <App />
    </Auth0Provider>
  </StrictMode>,
)

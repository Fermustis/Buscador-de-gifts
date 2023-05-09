import React from 'react' // importacion de react
import ReactDOM from 'react-dom/client' // este importacion hace las siguientes cosas: marca el elemento raiz como un elemento de react, y renderiza el componente App en el elemento raiz
import { GifExpertApp } from './GifExpertApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)

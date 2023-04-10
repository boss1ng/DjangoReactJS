import '@/styles/globals.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';

function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div> 
  )
}

export default App;
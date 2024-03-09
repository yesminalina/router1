import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Contacto from './views/Contacto'
import NotFound from './views/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
export default App

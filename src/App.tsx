import './App.css'
import About from './components/about'
import CardsPage from './components/cards-page'
import Contact from './components/contact'
import Introduction from './components/introduction'
import Proyects from './components/proyects'

function App() {

  return (
    <div className="App">
      <CardsPage />
      <Introduction />
      <Contact />
      <About />
      <Proyects />

    </div>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

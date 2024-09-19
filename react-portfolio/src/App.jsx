import './App.css'
import {Outlet} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
      <div className='container'>
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default App

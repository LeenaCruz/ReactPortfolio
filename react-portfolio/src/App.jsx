import './App.css'
import {Outlet} from 'react-router-dom';
import Nav from './components/Navbar'
// import Header from './components/UI/Header'
function App() {

  return (
      <>
        <Nav />
        <main className="mx-3">
          <Outlet />
        </main>
      </>
  );
}

export default App

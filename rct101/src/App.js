import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import LargeWithNewsletter from './Pages/Footer';
import Footer from './Pages/Footer';
import Men from './Pages/Men';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      {/* <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676" alt="" /> */}
      <Navbar/>
      <AllRoutes/>
      {/* <Login/> */}

    </div>
  );
}

export default App;

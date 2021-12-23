import './App.css';
import About from './components/About/About';
import Client from './components/Client/Client';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Price from './components/Price/Price';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
     <Header></Header>
     <About></About>
     <Shop></Shop>
     <Menu></Menu>
     <Client></Client>
     <Price></Price>
    </div>
  );
}

export default App;

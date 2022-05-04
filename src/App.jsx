import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Paragraph from './Components/Paragraph';
import Registration from './Components/Registration';
import Button from './Components/Button';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    
      <Greeting />{/*Funcion de Saludar Texto h1.*/}

      <Paragraph />{/*Funcion de Parrafo.*/}

      <Registration />{/*Funcion de Texto h2.*/}

      <Button />{/*Funcion del boton.*/}

      <Footer />{/*Funcion de Pie de Pagina.*/}
      
    </div>
  );
}

export default App;
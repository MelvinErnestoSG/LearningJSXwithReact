import logo from './logo.svg';
import './App.css';
import Greeting from './Component/Greeting';
import Paragraph from './Component/Paragraph';
import Registration from './Component/Registration';
import Button from './Component/Button';
import Footer from './Component/Footer';

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
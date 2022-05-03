import logo from './logo.svg';
import './App.css';

function Greeting() {
  return (
    <h1 className="texto1">Bienvenidos a todos.</h1>
  );
}

function Paragraph() {
  return (
    <p className="parrafo">Estoy Aprendiendo React JSX.</p>
  );
}

function Registration() {
  return (
    <h2 className="texto2">Registration</h2>
  );
}

function Button() {
  return (
    <Button className="boton">Join the team</Button>
  );
}

function Footer() {
  return (
    <footer className="pie">
    <p>
      Copyright &copy; 2021-2022 <br></br>Melvin Ernesto Santana Garcia. <br></br>Todos los derechos reservados.
    </p>
  </footer>
  );
}

function App() {
  return (
    <div className="App">

      <header clasName="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    
      <Greeting />{/*Funcion de Saludar Texto h1.*/}

      <Paragraph />{/*Funcion de Parrafo.*/}

      <Registration/>{/*Funcion de Texto h2.*/}

      <Button />{/*Funcion del boton.*/}

      <Footer />{/*Funcion de Pie de Pagina.*/}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function greeting(text) {
  return <h1>{text}</h1>;
}

function paragraph(text){
  return <p>{text}</p>;
}

function App() {
  return (
    <div className="App">
      <header clasName="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greeting('Hello JSX!')}
        {paragraph("Estoy Aprendiendo React JSX")}
      </header>
    </div>
  );
}

export default App;

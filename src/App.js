import './App.css';
import './components/HelloWorld';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Caminha';

  function soma(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <HelloWorld/>
      <p>Olá, {name}</p>
      <p>{soma(3,5)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;

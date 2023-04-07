import './App.css';
import './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name = "Caminha"

  return (
    <div className="App">
      <SayMyName nome={name}/>
      <Pessoa nome="Caminha" idade="23" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;

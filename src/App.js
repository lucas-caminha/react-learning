import './App.css';
import './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const name = "Caminha"

  return (
    <div className="App">
      <SayMyName nome={name}/>
      <Pessoa nome="Caminha" idade="23" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <Frase/>
      <List/>
    </div>
  );
}

export default App;

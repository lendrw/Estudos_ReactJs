
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Leandro"/>
      <Pessoa 
      nome="Carlos"
      idade="20"
      profissao="pedreiro"
      foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
    
  );
}

export default App;

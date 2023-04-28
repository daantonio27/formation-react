import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Phrase from './components/phrase';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Test CSS</h1>
      <Phrase/>
      <SayMyName nome="Da Antonio" />
      <SayMyName nome="Antonio" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;

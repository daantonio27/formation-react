import './App.css';
import HelloWorld from "./components/HelloWorld";
import Evento from "./components/Evento";
import Form from "./components/Form";


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <HelloWorld />
      <Evento />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;

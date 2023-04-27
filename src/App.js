import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Da Antonio'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Modifier JSX</h2>
      <p>Salut, {newName}</p>
      <p>Somme: {sum(1, 2)}</p>
      <img src={url} alt="Mon image" />
      <HelloWorld />
    </div>
  );
}

export default App;

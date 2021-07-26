import './App.css';
import Quotes from './Quotes';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <div className="jumbotron">
          <div className="row text-center">
              <Quotes />
          </div>
        </div>
      </header>

    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import MoviesTable from './components/MoviesTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <MoviesTable/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MoviesTable from './components/MoviesTable';
import ButtonContainer from './components/ButtonContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <section className='App-body'>
        <MoviesTable/>
        <ButtonContainer/>
      </section>
    </div>
  );
}

export default App;

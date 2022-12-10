import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MoviesTable from './components/MoviesTable';
import ButtonContainer from './components/ButtonContainer';
import AddForm from './components/AddForm';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Route path="">
        <header className="App-header">
          <Header/>
        </header>
        <section className='App-body'>
          <MoviesTable/>
          <ButtonContainer/>
        </section>
      </Route>
      <Route path="/add">
        <section className='App-form'>
          <AddForm/>
        </section>
      </Route>
    </div>
    </Router> 
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import Header from './components/Header';
import MoviesTable from './components/MoviesTable';
import AddForm from './components/AddForm';

function App() {
  return (
  <div className="App">
    <Navigation/>
    <header className="App-header">
      <Header/>
    </header>
    <section className='App-body'>
      <MoviesTable/>
    </section>
    <Routes>
      <Route path="/add" element={<AddForm />} />
    </Routes> 
  </div>
  );
}

export default App;

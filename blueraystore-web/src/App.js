import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./page/Home";
import AddForm from './components/AddForm';

function App() {
  return (
    <Router>

      <Route path="/" index element={<Home />} />
      <Route path="/add" element={<AddForm />} />

    </Router> 
  );
}

export default App;

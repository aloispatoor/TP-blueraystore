import Header from '../components/Header';
import MoviesTable from '../components/MoviesTable';
import ButtonContainer from '../components/ButtonContainer';
import AddForm from '../components/AddForm';


function Home(){
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <section className='App-body'>
          <MoviesTable/>
          <ButtonContainer/>
        </section>
        <section className='App-form'>
          <AddForm/>
        </section>
    </div>
}

export default Home
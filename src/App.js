import './App.css';
import NavBar from './components/NavBar';
import ItemsList from './components/itemsList.js'

function App() {
  return (
    <>
      <NavBar />
      <div className='items'>
        <ItemsList />
      </div>
    </>
  );
}

export default App;
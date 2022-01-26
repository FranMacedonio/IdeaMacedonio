import './App.css';
import NavBar from './components/NavBar';
import MediaCard from './components/items.js';

function App() {
  return (
    <>
      <NavBar />
      <div className='items'>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
      </div>
    </>
  );
}

export default App;
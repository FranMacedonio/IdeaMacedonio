import './App.css';
import NavBar from './components/NavBar';
import MediaCard from './components/items.js';

function App() {
  return (
    <>
      <NavBar />
      <div className='items'>
        <MediaCard 
        img="https://imagenes.elpais.com/resizer/5nI4wXyGN_4jvSSsa03TTuYdOfQ=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4JW7BFJRRQVJDRT55GABP2P6HU.jpg"
        nombre="Leche"
        desc="Leche llegada recien del campo"
        />
        <MediaCard 
        img="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/04/20/607e941fc06ab.jpeg"
        nombre="Huevos"
        desc="Huevos sacados de mi gallinero"
        />
        <MediaCard 
        img="https://www.tienda.lamadrilena.com.ar/media/catalog/product/cache/d38be127ecf06dfec35606e11d013cfe/8/9/895-054-3-BLANCO_4.JPG"
        nombre="Alpargatas"
        desc="Alpargatas hechas por mi abuelo"
        />
      </div>
    </>
  );
}

export default App;
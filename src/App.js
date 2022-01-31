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
        stock="Quedan 6 botellas de leche"
        stockItem='6'
        />
        <MediaCard 
        img="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/04/20/607e941fc06ab.jpeg"
        nombre="Huevos por docena"
        desc="Huevos sacados de mi gallinero"
        stock="Quedan 5 docenas de huevos"
        stockItem='5'
        />
        <MediaCard 
        img="https://www.tienda.lamadrilena.com.ar/media/catalog/product/cache/d38be127ecf06dfec35606e11d013cfe/8/9/895-054-3-BLANCO_4.JPG"
        nombre="Alpargatas"
        desc="Alpargatas hechas por mi abuelo"
        stock="Quedan 3 pares de alpargatas"
        stockItem='3'
        />
      </div>
    </>
  );
}

export default App;
import { BrowserRouter as Router} from 'react-router-dom';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Products from './components/products';
import  {productsData, productsDataTwo}  from './components/products/data';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />    
        <Hero/>
        <Products heading="Choose Your Favortes" data={productsData}/>
        <Feature/>
        <Products heading="Treats for You" data={productsDataTwo}/>
    </Router>
  );
}
export default App;

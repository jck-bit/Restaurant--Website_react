import { BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/products';
import  productsData  from './components/products/data';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />    
        <Hero/>
        <Products heading="Choose Your Favortes" data={productsData}/>
    </Router>
  );
}
export default App;

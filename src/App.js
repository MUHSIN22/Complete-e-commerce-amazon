
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">Amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Signin</a>
        </div>
      </header>
      <main>
        <Route path = "/product/:id" component = {ProductScreen}></Route>
        <Route path="/" component = {HomeScreen} exact></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Catalogue from './components/Catalogue';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Setup from './components/Setup';
import Testimonials from './components/Testimonials';
import Top from './components/Top';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/catalog' component={Catalogue} />
        <Route path='/cart' component={Cart} />
      </Switch>
      <Route path='/' exact component={Main} />
      <Route path='/' exact component={Feature} />
      <Route path='/' exact component={Testimonials} />
      <Route path='/' exact component={Setup} />
      <Route path='/' exact component={Top} />
      <Footer />
    </div>
  );
}

export default App;

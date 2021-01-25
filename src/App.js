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
      <Main />
      <Feature />
      <Testimonials />
      <Setup />
      <Top />
      <Footer />
    </div>
  );
}

export default App;

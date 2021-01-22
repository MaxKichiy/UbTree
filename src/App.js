import Feature from './components/Feature';
import Header from './components/Header';
import Main from './components/Main';
import Setup from './components/Setup';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Feature />
      <Testimonials />
      <Setup />
    </div>
  );
}

export default App;

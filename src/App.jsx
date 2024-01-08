// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './Context';

function App() {
  const { loading } =useGlobalContext();
  
  return (
    <main>
      { loading ? <main><div className='loading' style={{ marginTop: '6rem' }}></div></main>
        : <><Navbar />
          <CartContainer /></>
      }
    </main>
  );
}

export default App;

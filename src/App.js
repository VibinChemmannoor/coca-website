import './App.css';
import Routes from './routes';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   <Toaster/>
   <Routes/>
   </>
  );
}

export default App;

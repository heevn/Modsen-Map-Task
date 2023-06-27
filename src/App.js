import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;

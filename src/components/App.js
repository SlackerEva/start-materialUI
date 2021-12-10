//import logo from '../logo.svg';
import { Container, Card } from '@mui/material';
import './App.css';
import { makeup } from '../data/makeup.js';
import Header from './Header.js';
import ItemsList from './ItemsList.js';

//import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{mt: '1rem'}}>
        <ItemsList />
      </Container>
    </div>
  );
}

export default App;

import { Container} from '@mui/material';
import './App.css';
import { useState } from 'react';
import Header from './Header.jsx';
import ItemsList from './ItemsList.jsx';
import Footer from './Footer.jsx';
import Filters from './Filters.jsx';

function App() {
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  return (
    <div className="App">
      <Header handleFilters={() => setFiltersOpen(true)} />
      <Container sx={{mt: '1rem'}}>
        <ItemsList />
      </Container>
      <Footer />
      <Filters filtersOpen={isFiltersOpen} filtersClose ={() => setFiltersOpen(false)} />
    </div>
  );
}

export default App;

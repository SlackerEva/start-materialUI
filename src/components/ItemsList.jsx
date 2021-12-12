import { Grid } from '@material-ui/core';
import ItemCard from './ItemCard.jsx';
import makeupArr from '../data/makeup.js'

export default function ItemsList() {
  return (
    <Grid container spacing={2}>
        {makeupArr.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ItemCard key={item.id} {...item}/>
          </Grid>
        ))}  
    </Grid>
  );
}
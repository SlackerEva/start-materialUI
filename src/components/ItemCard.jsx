import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { sizeHeight } from '@mui/system';

export default function ItemCard(props) {

  const [isFavorite, setFavorite] = useState(false);
  const [isStar, setStar] = useState(false);

  function handleFavorite() {
    setFavorite(!isFavorite);
  }

  function handleStar() {
    setStar(!isStar);
  }

  return (
    <Card>
      <CardMedia
        component='img'
        image={props.url}
        alt={props.name}
      />
      <CardHeader 
        title={        
          <Typography noWrap gutterBottom variant='h6' component='h4' textAlign='center'>
            {props.name}
          </Typography>
        } 
        sx={{display: 'block', borderBottom: '1px solid gray' }}
      />
      <CardActions disableSpacing>
        <IconButton 
          aria-label='add to favorites' 
          sx={{color: '#245D56'}}
          onClick={() => handleFavorite()}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton 
          aria-label='already bought'
          sx={{color: 'orange'}}
          onClick={() => handleStar()}
        >
          {isStar ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
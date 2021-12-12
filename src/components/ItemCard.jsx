import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import Typography from '@mui/material/Typography';

export default function ItemCard(props) {
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
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='already bought'>
          <StarIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
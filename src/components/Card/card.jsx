
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicRating from '../Rating/rating';
import { Card, CardContent, CardMedia, Typography, IconButton, Collapse } from '@mui/material';
import { Link } from "react-router-dom";


export default function Post({ id, image, title, text, rating, isExpanded, onToggle }) {
   console.log('Rendering Post with id:', id);
  return (
    <Link to={`/card/${id}`} style={{ textDecoration: 'none' }}>
       <Card sx={{ maxWidth: 345, position: 'relative', marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="400"
        image={image}
        alt={`Изображение ${title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <BasicRating value={rating} />
      </CardContent>

      {/* Кнопка в правом нижнем углу */}
      <IconButton
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label="Показать больше"
        sx={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          transition: 'transform 0.3s',
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
        }}
      >
        <ExpandMoreIcon />
      </IconButton>

      {/* Раскрываемый текст */}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {text}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Link>
   
  );
}
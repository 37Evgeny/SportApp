import { Box, Grid, Button } from "@mui/material"; // добавьте Grid сюда
import Post from "../Card/card";
import * as React from 'react';
import { useContext } from 'react';
import { CardContext } from '../../context/cardContext';

const CardList = () => {

     const { data } = useContext(CardContext);

  const [expandedId, setExpandedId] = React.useState(null);

  const handleToggle = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>

      {/* Основной контент */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: 'auto',
          height: '100%',
        }}
      >
        <Grid container spacing={2} wrap="wrap">
          {data.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Post
              id={card.id}
                image={card.image}
                title={card.title}
                text={card.text}
                rating={card.rating}
                isExpanded={expandedId === card.id}
                onToggle={() => handleToggle(card.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
};

export default CardList;
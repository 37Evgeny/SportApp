import { Box, Grid, Button } from "@mui/material"; // добавьте Grid сюда
import Post from "../Card/card";
import * as React from 'react';

const PostList = ({ cards }) => {
  const [expandedId, setExpandedId] = React.useState(null);

  const handleToggle = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      
      {/* Левый toolbar */}
      <Box
        sx={{
          width: 200,
          bgcolor: 'background.paper',
          p: 2,
          borderRight: '1px solid #ccc',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        <h3>Toolbar</h3>
        <Button variant="contained" fullWidth>Кнопка 1</Button>
        <Button variant="contained" fullWidth>Кнопка 2</Button>
      </Box>

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
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Post
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

export default PostList;
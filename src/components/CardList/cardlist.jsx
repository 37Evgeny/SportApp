import { Container, Grid } from "@mui/material";
import Post from "../Card/card";
import * as React from 'react';

const CardList = ({ cards }) => {
  const [expandedId, setExpandedId] = React.useState(null);

  const handleToggle = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <Container>
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
    </Container>
  );
};

export default CardList;
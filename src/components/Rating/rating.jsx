import { Box, Typography, Rating } from '@mui/material';

export default function BasicRating({value}) {

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        '& > legend': { mt: 2 } 
      }}
    >
       <Typography component="legend" sx={{ display: 'flex', alignItems: 'center'}}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        Сложность:
        <Rating name="read-only" value={value} readOnly sx={{ ml: 1 }} />
      </Box>
    </Typography>
    </Box>
  );
}

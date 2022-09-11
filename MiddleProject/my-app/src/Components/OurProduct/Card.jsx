import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Card.css"
export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 0.75 }}>
      <CardActionArea>
        <CardMedia
        className='imgMedia'
          component="img"
          height="400"
          image={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

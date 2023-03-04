import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LogoNoBG from '../../assets/logo-no-bg.png'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative', left: '0', margin: 'auto', marginBottom: '10rem' }}>
      <CardActionArea sx={{padding: '2rem'}}>
        <CardMedia
          component="img"
          height="auto"
          image={LogoNoBG}
          alt="Baznas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BANK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            BSI
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            REKENING
          </Typography>
          <Typography variant="body2" color="text.secondary">
            7193239368
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            NAMA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            BAZNAS UPZ AL HIDAYAH GATSU
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
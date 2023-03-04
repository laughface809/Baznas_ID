import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import image4 from '../../assets/image-4.jpeg'
import image5 from '../../assets/image-5.jpeg'
import image6 from '../../assets/image-6.jpeg'
import image7 from '../../assets/image-7.jpeg'
import image8 from '../../assets/image-8.jpeg'
import image9 from '../../assets/image-9.jpeg'
import image10 from '../../assets/image-10.jpeg'
import image11 from '../../assets/image-11.jpeg'


function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 'auto',
        height: 'auto',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={'auto'}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: image4,
    title: 'Baznas',
    author: '@baznas',
    featured: true,
  },
  {
    img: image5,
    title: 'baznas',
    author: '@baznas',
  },
  {
    img: image6,
    title: 'baznas',
    author: '@baznas',
  },
  {
    img: image7,
    title: 'baznas',
    author: '@baznas',
  },
  {
    img: image8,
    title: 'baznas',
    author: '@baznas',
  },
  {
    img: image9,
    title: 'baznas',
    author: '@baznas',
    featured: true,
  },
  {
    img: image10,
    title: 'baznas',
    author: '@baznas',
  },
  {
    img: image11,
    title: 'baznas',
    author: '@baznas',
  },
];
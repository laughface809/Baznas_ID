import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LeftMenuTabs from './left-menu';
import RightMenuProgress from './right-menu';

export default function FundInformation() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <LeftMenuTabs />
        </Grid>
        <Grid item xs={6}>
          <RightMenuProgress />
        </Grid>
      </Grid>
    </Box>
  );
}
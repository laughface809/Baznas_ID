import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LeftMenuTabs from './left-menu';
import RightMenuProgress from './right-menu';

export default function FundInformation({
  setPage,
  status,
  setStatus
}) {

  const [users, setUsers] = React.useState([])

  const API_URL = 'https://sheet2api.com/v1/iWeyymcZSACT/baznas_id';
  async function fetchUsers() {
  try{
    const response = await fetch(API_URL)
    const users = await response.json();
    return users;
    }catch(err){
      console.error(err); 
    }
  }

  React.useEffect(() => {
    fetchUsers().then(users => {
      setUsers(users)
    })
  }, [])
  

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: { xs: 'block', md: 'flex' } }}>
        <Grid item xs={6} sx={{ maxWidth: { xs: 'unset', md: '50%' }}}>
          <LeftMenuTabs users={users} />
        </Grid>
        <Grid item xs={6} sx={{ maxWidth: { xs: 'unset', md: '50%' }, marginTop: { xs: '5rem', md: 'unset' } }}>
          <RightMenuProgress setPage={setPage} setStatus={setStatus} users={users} />
        </Grid>
      </Grid>
    </Box>
  );
}
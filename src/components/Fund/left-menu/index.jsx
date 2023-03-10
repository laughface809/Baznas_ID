import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Description from './Description';
import Updates from './Updates';
import DonorWall from './DonorWall';
import Disbursement from './Disbursement';
import Information from './Information';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({
  users
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: {xs: '6rem', md: '8rem'}, maxWidth: {xs: '6rem', md: '8rem'} }}
      >
        <Tab label="Deskripsi" {...a11yProps(0)} />
        <Tab label="Kabar Terbaru (2)" {...a11yProps(1)} />
        <Tab label="Daftar Donatur (3)" {...a11yProps(2)} />
        <Tab label="Pencairan Dana (1)" {...a11yProps(3)} />
        <Tab label="informasi Penggalangan" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Description />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Updates />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DonorWall users={users} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Disbursement />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Information />
      </TabPanel>
    </Box>
  );
}
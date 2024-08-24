import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DetailCom from '.';
import Group from './Group';
import SalaryTab from './Salary';
import { BUttonwrap, BUttonwrap4, Center } from './style';
import { LeadsCon } from '../leads/style';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%',padding: '50px 300px', }}>
        <BUttonwrap>
      
        
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        

       {/* <BUttonwrap4> */}
          <Tab style={{border: '1px solid #2C2669 ',
            borderRadius:' 6px 0px 0px 6px',
            background: '#2C2669',
            color: 'white'
          }} label="Profile" textColor="green" {...a11yProps(0)} />   
          <Tab style={{
            
            // background: '#2C2669',
            // color: 'white',
            borderTop: '2px solid #2C2669',
borderBottom: '2px solid  #2C2669',
borderLeft: '2px solid  #2C2669',
          }}  label="Groups" {...a11yProps(1)} /> 

          <Tab
           style={{border: '2px solid #2C2669 ',
            borderRadius:' 0px 6px 6px 0px',
            // background: '#2C2669',
            // color: 'white'
          }}
          label="Salary" {...a11yProps(2)} />
          {/* </BUttonwrap4> */}
         
        </Tabs>
        
    
      </BUttonwrap>
       
      <CustomTabPanel value={value} index={0}>
        <DetailCom/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Group/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SalaryTab/>
      </CustomTabPanel>
    </Box>
 
  );
}

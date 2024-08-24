import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import info from "../../../../assets/leads/info.png"
import { Users } from '../../../../data/data';
import { Popover1, PopoverWrapLeft, PopoverWrapRight } from './accordstyle';
import { useParams } from 'react-router-dom';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id1 = open ? 'simple-popover' : undefined;

  const data = Users.maindata.slice(0);
  const dataLength = data.length;
  console.log("data:", data.length);

  const { id } = useParams() ;
  const resultdata = Users.maindata.find(
    (value) => value.id === parseInt(id));
    console.log(resultdata);

  return (
    <div>
        
           
        
      <div style={{backgroundColor: 'transparent', padding: '0px'}} aria-describedby={id} variant="contained" onClick={handleClick}>
      <img src={info} alt="ima" /> 
      </div>
      <Popover
        id={id1}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        

        {/* {
            data.map((resultdata,key)=> {
                return( */}
        <Typography sx={{ p: 3 }}>
      
           

                   
                    <Popover1  >
                        <PopoverWrapLeft>
                            {/* <h1>{resultdata.car.name}</h1> */}
                            {/* <h1>{resultdata.car.desc.callnumber}</h1> */}
                            {/* <h1>{resultdata.car.date}</h1> */}
                            <h1 >ShoraximovShamsiddin</h1>
                            <h1>99 999 99 99</h1>
                            <h1>01.01.2024</h1>
                        </PopoverWrapLeft>
                        <PopoverWrapRight>
                            <p>Full Name</p>
                            <p>Phone Number</p>
                            <p>Updated</p>


                        </PopoverWrapRight>
                    </Popover1>
                      
             
            </Typography>
             {/* )
            })
        } */}
            
      </Popover>
        
    </div>
  );
}
